<script lang="ts">
import { defineComponent, h, PropType, ref, watch } from 'vue';
import type { VNode } from 'vue';
import Radio from './Radio.vue';
import Checkbox from './Checkbox.vue';
import { random } from 'ph-utils';
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
  colspan: number | ((rowData: any, rowIndex: number) => number);
  /** td rowspan */
  rowspan: number | ((rowData: any, rowIndex: number) => number);
  /** th colspan */
  titleColspan: number;
  /** th rowspan */
  titleRowspan: number;
  /** 设置可选择 */
  type?: 'radio' | 'checkbox';
  /** 为 radio，checkbox 设置是否禁用 */
  disabled?: (row: any) => boolean;
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

type SorterFnOption = (data: any[]) => any[];

type RowKeyOption = (row: any) => any;

/** 通过配置的 columns 计算表头跨行，跨列 */
function calculateSpan(headers: ColumnOption[], level = 0): ColumnOption[] {
  if (!Array.isArray(headers)) {
    return [];
  }

  const spans = headers.map((header) => {
    // 如果有子级元素，递归计算
    if (header.children != null) {
      let titleColspan = header.titleColspan;
      const childrenSpans = calculateSpan(header.children, level + 1);
      if (titleColspan == null) {
        titleColspan = childrenSpans.reduce(
          (sum, childSpan) => sum + childSpan.titleColspan,
          0,
        );
      }
      return {
        ...header,
        titleColspan: titleColspan,
        titleRowspan: header.titleRowspan || 1,
        children: childrenSpans,
      };
    } else {
      let titleRowspan = header.titleRowspan;
      if (titleRowspan == null) {
        titleRowspan = getMaxDepth(headers);
      }
      // 如果元素没有子级，意味着它占满从当前层级到最底层的所有行
      return {
        ...header,
        titleColspan: header.titleColspan || 1,
        titleRowspan: titleRowspan,
      };
    }
  });

  return spans;
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
  setup(props) {
    const sortInfo = ref<SortOption>({
      key: '',
      order: '',
    });
    const allowSelectCount = calcAllowSelectCount(); // 允许选择的数量
    const sourceData = ref(props.data);
    const parsedColumns = calculateSpan(props.columns, 0);
    const selectedValues = new Set();
    /** 复选的半选、全选状态 */
    const isIndeterminate = ref(false);
    const checkedAll = ref(false);

    watch(
      () => props.data,
      () => {
        sourceData.value = props.data;
      },
    );

    function calcAllowSelectCount() {
      let c = 0;
      if (props.columns[0].type === 'checkbox') {
        for (const d in props.data) {
          let isDisabled = false;
          if (props.columns[0].disabled != null) {
            isDisabled = props.columns[0].disabled(d);
          }
          if (!isDisabled) {
            c++;
          }
        }
      }
      return c;
    }

    function handleSelectionChange(value: any) {
      const selectType = props.columns[0].type;
      if (selectType === 'radio') {
        selectedValues.clear();
      }
      if (selectedValues.has(value)) {
        selectedValues.delete(value);
      } else {
        selectedValues.add(value);
      }
      if (selectedValues.size === 0) {
        isIndeterminate.value = false;
        checkedAll.value = false;
      } else if (selectedValues.size === allowSelectCount) {
        checkedAll.value = true;
        isIndeterminate.value = false;
      } else {
        checkedAll.value = false;
        isIndeterminate.value = true;
      }
      console.log(selectedValues);
    }

    function dataSort(
      data: any[],
      sortInfo: SortOption,
      sorterFn?: (data: any[]) => any[],
    ) {
      let oriData = [...data];
      if (sorterFn) {
        return sorterFn(oriData);
      }
      if (sortInfo.key === '') {
        return oriData;
      }
      return oriData.sort((a, b) => {
        if (sortInfo.order === 'asc') {
          return a[sortInfo.key] - b[sortInfo.key];
        }
        return b[sortInfo.key] - a[sortInfo.key];
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

    function renderHeadCol(
      column: ColumnOption,
      index: number,
      left: string[],
      right: string[],
    ) {
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
        style: {},
        colspan: column.titleColspan,
        rowspan: column.titleRowspan,
      };

      if (column.fixed) {
        if (column.fixed === 'left') {
          thAttrs.style.left =
            left.length === 0 ? '0' : `calc(${left.join('+')})`;
        } else {
          thAttrs.style.right =
            right.length === 0 ? '0' : `calc(${right.join('+')})`;
        }
      }

      if (column.type != null && column.width == null) {
        column.width = 40;
      }

      if (column.width) {
        let colWidth: string = column.width as string;
        if (typeof column.width === 'number') {
          colWidth = `${column.width}px`;
        }
        thAttrs.style.width = colWidth;
        if (column.fixed != null) {
          if (column.fixed === 'left') {
            left.push(colWidth);
          } else {
            right.push(colWidth);
          }
        }
      }
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
      if (column.type != null) {
        if (column.type === 'checkbox') {
          colChildren.push(
            h(
              'div',
              {
                class: 'nt-table-selection-cell',
              },
              h(Checkbox, {
                indeterminate: isIndeterminate.value,
                checked: checkedAll.value,
                onChange: handleSelectionChange,
              }),
            ),
          );
        }
      } else {
        colChildren.push(h('span', column.title));
        if (column.sorter === true) {
          colChildren.push(
            h('span', { class: 'caret-wrapper' }, [
              h('span', { class: 'sort-caret ascending' }),
              h('span', { class: 'sort-caret descending' }),
            ]),
          );
        }
      }
      return h('th', thAttrs, colChildren);
    }

    function renderHeadRow(
      columns: ColumnOption[],
      left: string[],
      right: string[],
      rowChildren: VNode[],
      children: VNode[],
    ) {
      for (let i = 0, len = columns.length; i < len; i++) {
        const column = columns[i];
        rowChildren.push(renderHeadCol(column, i, left, right));

        if (column.children != null) {
          let rChildren: VNode[] = [];
          renderHeadRow(column.children, left, right, rChildren, children);
          children.push(h('tr', rChildren));
        }
      }
    }

    function renderHead() {
      const headTrs: VNode[] = [];
      const rootChildren: VNode[] = [];
      renderHeadRow(parsedColumns, [], [], rootChildren, headTrs);
      headTrs.unshift(h('tr', rootChildren));
      return headTrs;
    }

    function renderBodyRow(
      columns: ColumnOption[],
      rowIndex: number,
      rowData: any,
      left: string[],
      right: string[],
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
              style: {},
              class: {
                'nt-fixed': column.fixed,
              },
              colspan,
              rowspan,
            };

            if (column.fixed) {
              if (column.fixed === 'left') {
                tdAttr.style.left =
                  left.length === 0 ? '0' : `${left.join('+')}`;
              } else {
                tdAttr.style.right =
                  right.length === 0 ? '0' : `${left.join('+')}`;
              }
            }

            if (column.width) {
              let colWidth: string = column.width as string;
              if (typeof column.width === 'number') {
                colWidth = `${column.width}px`;
              }
              tdAttr.style.width = colWidth;
              if (column.fixed != null) {
                if (column.fixed === 'left') {
                  left.push(colWidth);
                } else {
                  right.push(colWidth);
                }
              }
            }

            if (column.render != null) {
              rowChildren.push(
                h('td', tdAttr, column.render(rowData, rowIndex)),
              );
            } else if (column.key != null) {
              rowChildren.push(h('td', tdAttr, rowData[column.key]));
            } else if (column.type != null) {
              const selectionValue =
                props.rowKey != null ? props.rowKey(rowData) : '';
              rowChildren.push(
                h(
                  'td',
                  tdAttr,
                  h(
                    'div',
                    { class: 'nt-table-selection-cell' },
                    h(column.type === 'radio' ? Radio : Checkbox, {
                      name: selectionName,
                      value: selectionValue,
                      checked: selectedValues.has(selectionValue),
                      disabled: column.disabled
                        ? column.disabled(rowData)
                        : false,
                      onChange: handleSelectionChange,
                    }),
                  ),
                ),
              );
            } else {
              rowChildren.push(h('td', tdAttr, ''));
            }
          }
        } else {
          renderBodyRow(
            column.children,
            rowIndex,
            rowData,
            left,
            right,
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
        renderBodyRow(parsedColumns, i, dataItem, [], [], $tds, selectionName);
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
              props.tableLayout === 'fixed' ? 'nt-table-fixed' : '',
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
