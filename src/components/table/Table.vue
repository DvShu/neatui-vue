<script lang="ts">
import { defineComponent, h, PropType, ref, toRaw, watch } from 'vue';
import type { VNode, CSSProperties } from 'vue';
import { isBlank, random } from 'ph-utils';
import { format } from 'ph-utils/date';

export interface ColumnOption {
  /** 排序时，如果传递了 key，则会将此 key 回传，便于排序, 如果不传此 key，则排序无效 */
  key?: string;
  /** 文本 */
  title?: string;
  /** 是否启用排序 */
  sorter?: boolean;
  /** 是否固定列 */
  fixed?: 'left' | 'right';
  /** 列宽 */
  width?: string | number;
  /** 单元格内容渲染函数 */
  render?: (row: any, index: number) => VNode | VNode[];
  /** 表头分组配置 */
  children?: ColumnOption[];
  /** td colspan */
  colspan?: number | ((rowData: any, rowIndex: number) => number);
  /** td rowspan */
  rowspan?: number | ((rowData: any, rowIndex: number) => number);
  /** th colspan */
  titleColspan?: number;
  /** th rowspan */
  titleRowspan?: number;
  id?: string;
  style?: CSSProperties;
  class?: string;
}

export interface DataSortState {
  key: string;
  index: number;
  order: 'asc' | 'desc';
}

interface SortOption {
  key: string;
  order: string;
}

type SorterFnOption = (
  data: any[],
  sortInfo: { order: string; key: string },
) => any[];

type RowKeyOption = (row: any) => any;

function getLeftStart(id: string, left: [string, number][]) {
  let start = 0;
  const len = left.length;
  let isFirst = false;
  for (let i = 0; i < len; i++) {
    const item = left[i];
    if (item[0] === id) {
      if (i === 0) {
        isFirst = true;
      }
      break;
    }
    start += item[1];
  }
  return { start, isFirst };
}

function getRightStart(id: string, right: [string, number][]) {
  let start = 0;
  let isFirst = false;
  const len = right.length;
  for (let i = len - 1; i >= 0; i--) {
    const item = right[i];
    if (item[0] === id) {
      if (i === len - 1) {
        isFirst = true;
      }
      break;
    }
    start += item[1];
  }
  return { start, isFirst };
}

/** 通过配置的 columns 计算表头跨行，跨列 */
function calculateSpan(
  headers: ColumnOption[],
  level = 0,
  leftFixed: [string, number][],
  rightFixed: [string, number][],
): ColumnOption[] {
  const tmpCols = [];
  for (let i = 0, len = headers.length; i < len; i++) {
    const header = headers[i];
    if (header.id == null) {
      header.id = header.key || header.title;
    }
    if (isBlank(header.id)) {
      header.id = random(6) as string;
    }
    if (header.fixed != null) {
      const widNum = Number.parseInt(`${header.width || 0}`);
      if (header.fixed === 'left') {
        leftFixed.push([header.id as string, widNum]);
      } else if (header.fixed === 'right') {
        rightFixed.push([header.id as string, widNum]);
      }
    }
    // 如果有子级元素，递归计算
    if (header.children != null) {
      let titleColspan = header.titleColspan;
      const childrenSpans = calculateSpan(
        header.children,
        level + 1,
        leftFixed,
        rightFixed,
      );
      if (titleColspan == null) {
        titleColspan = childrenSpans.reduce(
          (sum, childSpan) => sum + (childSpan.titleColspan || 0),
          0,
        );
      }
      tmpCols.push({
        ...header,
        titleColspan: titleColspan,
        titleRowspan: header.titleRowspan || 1,
        children: childrenSpans,
      });
    } else {
      let titleRowspan = header.titleRowspan;
      if (titleRowspan == null) {
        titleRowspan = getMaxDepth(headers);
      }
      // 如果元素没有子级，意味着它占满从当前层级到最底层的所有行
      tmpCols.push({
        ...header,
        titleColspan: header.titleColspan || 1,
        titleRowspan: titleRowspan,
      });
    }
  }
  return tmpCols;
}

// 递归获取最深的层级数
function getMaxDepth(headers: ColumnOption[]) {
  let maxDepth = 1;
  headers.forEach((header) => {
    if (header.children) {
      const childDepth = getMaxDepth(header.children) + 1;
      if (childDepth > maxDepth) {
        maxDepth = childDepth;
      }
    }
  });
  return maxDepth;
}

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<ColumnOption[]>,
      required: true,
    },
    /** 创建带斑马纹的表格 */
    stripe: {
      type: Boolean,
      default: true,
      required: false,
    },
    /** 是否显示四周边框 */
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    /** 是否固定表头 */
    fixedHead: {
      type: Boolean,
      default: false,
      required: false,
    },
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    defaultSort: {
      type: Object as PropType<SortOption>,
      required: false,
    },
    sorter: {
      type: Function as PropType<SorterFnOption>,
      required: false,
    },
    /** 渲染表尾合计行 */
    renderSummary: {
      type: Function as PropType<() => VNode | VNode[]>,
      required: false,
    },
    /** 是否使用 fixed[table-layout:fixed] 布局 */
    tableLayout: {
      type: String,
      required: false,
      default: 'auto',
    },
    rowKey: {
      type: Function as PropType<RowKeyOption>,
      required: false,
    },
  },
  emits: ['select-change'],
  setup(props) {
    const sortInfo = ref<SortOption>({
      key: '',
      order: '',
    });
    const sourceData = ref(props.data);
    /** 缓存列样式, 避免每次遍历列都重新计算 */
    const globalColStyles: Record<string, CSSProperties> = {};
    /** 左边固定列 */
    const fixedLeft: [string, number][] = [];
    /** 右边固定列 */
    const fixedRight: [string, number][] = [];
    const isFixedColumn = ref(false);
    const parsedColumns = calculateSpan(
      props.columns,
      0,
      fixedLeft,
      fixedRight,
    );
    isFixedColumn.value = fixedLeft.length > 0 || fixedRight.length > 0;

    function getCommonStyle(
      column: ColumnOption,
      fl: [string, number][],
      fr: [string, number][],
    ): CSSProperties {
      const id = column.id as string;
      if (id in globalColStyles) {
        return globalColStyles[id];
      }
      const res: CSSProperties = { ...column.style };
      if (column.width != null) {
        if (typeof column.width === 'number') {
          res.width = `${column.width}px`;
        } else {
          res.width = column.width;
        }
      }
      if (column.fixed != null) {
        let startInfo = { start: 0, isFirst: false };
        if (column.fixed === 'left') {
          startInfo = getLeftStart(id, fl);
          res.boxShadow = '-4px 0 4px -4px #d9d9d9 inset';
          res.left = `${startInfo.start}px`;
        } else if (column.fixed === 'right') {
          startInfo = getRightStart(id, fr);
          res.boxShadow = '4px 0 4px -4px #d9d9d9 inset';
          res.right = `${startInfo.start}px`;
        }
      }
      globalColStyles[id] = res;
      return res;
    }

    watch(
      () => props.data,
      () => {
        sourceData.value = props.data;
      },
    );

    function dataSort(
      data: any[],
      sortInfo: SortOption,
      sorterFn?: (
        data: any[],
        sortInfo: { order: string; key: string },
      ) => any[],
    ) {
      let oriData = [...data];
      if (sorterFn) {
        return sorterFn(oriData, toRaw(sortInfo));
      }
      if (sortInfo.key === '') {
        return oriData;
      }
      return oriData.sort((a, b) => {
        if (sortInfo.order === 'asc') {
          return a[sortInfo.key] >= b[sortInfo.key] ? 1 : -1;
        }
        return a[sortInfo.key] >= b[sortInfo.key] ? -1 : 1;
      });
    }

    if (props.defaultSort != null) {
      sortInfo.value = {
        key: props.defaultSort.key,
        order: props.defaultSort.order,
      };
      sourceData.value = dataSort(props.data, sortInfo.value, props.sorter);
    }

    function handleHeadClick({ sorter, key }: any) {
      if (sorter === true) {
        let sortKey = key;
        let sortOrder = '';
        if (key === sortInfo.value.key) {
          if (sortInfo.value.order === 'asc') {
            sortOrder = 'desc';
          } else {
            sortKey = '';
          }
        } else {
          sortOrder = 'asc';
        }
        sortInfo.value = {
          order: sortOrder,
          key: sortKey,
        };
        sourceData.value = dataSort(props.data, sortInfo.value, props.sorter);
      }
    }

    function renderHeadCol(column: ColumnOption, index: number) {
      const thAttrs: any = {
        class: {
          'sort-column': column.sorter === true,
          'sort-asc':
            sortInfo.value.key === column.key && sortInfo.value.order === 'asc',
          'sort-desc':
            sortInfo.value.key === column.key &&
            sortInfo.value.order === 'desc',
          'nt-fixed': column.fixed,
        },
        style: getCommonStyle(column, fixedLeft, fixedRight),
        colspan: column.titleColspan,
        rowspan: column.titleRowspan,
      };

      if (column.sorter === true) {
        thAttrs.onClick = () => {
          handleHeadClick({
            key: column.key || '',
            index,
            order: 'asc',
            sorter: column.sorter,
          });
        };
      }
      const colChildren = [];
      colChildren.push(h('span', column.title));
      if (column.sorter === true) {
        colChildren.push(
          h('span', { class: 'caret-wrapper' }, [
            h('span', { class: 'sort-caret ascending' }),
            h('span', { class: 'sort-caret descending' }),
          ]),
        );
      }
      return h('th', thAttrs, colChildren);
    }

    function renderHeadRow(
      columns: ColumnOption[],
      rowChildren: VNode[],
      children: VNode[],
    ) {
      for (let i = 0, len = columns.length; i < len; i++) {
        const column = columns[i];
        rowChildren.push(renderHeadCol(column, i));

        if (column.children != null) {
          let rChildren: VNode[] = [];
          renderHeadRow(column.children, rChildren, children);
          children.push(h('tr', rChildren));
        }
      }
    }

    function renderHead() {
      const headTrs: VNode[] = [];
      const rootChildren: VNode[] = [];
      renderHeadRow(parsedColumns, rootChildren, headTrs);
      headTrs.unshift(h('tr', rootChildren));
      return headTrs;
    }

    function renderBodyRow(
      columns: ColumnOption[],
      rowIndex: number,
      rowData: any,
      rowChildren: VNode[],
      selectionName: string,
    ) {
      for (const column of columns) {
        if (column.children == null) {
          let rowspan: null | number = null;
          let colspan: null | number = null;
          if (typeof column.rowspan === 'number') {
            rowspan = column.rowspan;
          }
          if (typeof column.rowspan === 'function') {
            rowspan = column.rowspan(rowData, rowIndex);
          }
          if (typeof column.colspan === 'number') {
            rowspan = column.colspan;
          }
          if (typeof column.colspan === 'function') {
            colspan = column.colspan(rowData, rowIndex);
          }
          if (rowspan !== 0 && colspan !== 0) {
            const tdAttr: any = {
              style: getCommonStyle(column, fixedLeft, fixedRight),
              class: [column.fixed ? 'nt-fixed' : undefined, column.class],
              colspan,
              rowspan,
            };

            if (column.render != null) {
              rowChildren.push(
                h('td', tdAttr, column.render(rowData, rowIndex)),
              );
            } else if (column.key != null) {
              rowChildren.push(h('td', tdAttr, rowData[column.key]));
            } else {
              rowChildren.push(h('td', tdAttr, ''));
            }
          }
        } else {
          renderBodyRow(
            column.children,
            rowIndex,
            rowData,
            rowChildren,
            selectionName,
          );
        }
      }
    }

    function renderBody() {
      const bodies: VNode[] = [];
      format();
      const selectionName = `${random(3)}${String(Date.now()).substring(8)}`;
      for (let i = 0, len = sourceData.value.length; i < len; i++) {
        const dataItem = sourceData.value[i];
        const $tds: VNode[] = [];
        renderBodyRow(parsedColumns, i, dataItem, $tds, selectionName);
        bodies.push(h('tr', $tds));
      }
      return bodies;
    }

    return () =>
      h(
        'div',
        { class: 'nt-table-wrapper' },
        h(
          'table',
          {
            class: [
              'nt-table',
              props.stripe ? 'nt-table-stripe' : '',
              isFixedColumn.value || props.tableLayout === 'fixed'
                ? 'nt-table-fixed'
                : '',
              props.border ? 'nt-table-border' : '',
            ],
          },
          [
            h(
              'thead',
              {
                class: {
                  'nt-fixed': props.fixedHead,
                },
                style: {
                  top: props.fixedHead ? '0' : undefined,
                },
              },
              renderHead(),
            ),
            h(
              'tbody',
              props.data.length === 0
                ? h(
                    'td',
                    {
                      class: 'nt-table__none-col',
                      colspan: props.columns.length,
                    },
                    '暂无数据记录!',
                  )
                : renderBody(),
            ),
            props.renderSummary
              ? h(
                  'tfoot',
                  { class: 'nt-fixed', style: { bottom: '0' } },
                  props.renderSummary(),
                )
              : null,
          ],
        ),
      );
  },
});
</script>
