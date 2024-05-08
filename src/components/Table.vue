<script lang="ts">
import { defineComponent, h, PropType, ref } from 'vue';
import type { VNode } from 'vue';

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
  render?: (row: any, index: number) => VNode | VNode[];
  children?: ColumnOption[];
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

type RenderColumnOption = ColumnOption & {
  colspan: number;
  rowspan: number;
  children?: RenderColumnOption[];
};

/** 通过配置的 columns 计算表头跨行，跨列 */
function calculateSpan(
  headers: ColumnOption[],
  level = 0,
): RenderColumnOption[] {
  if (!Array.isArray(headers)) {
    return [];
  }

  const spans = headers.map((header) => {
    // 如果有子级元素，递归计算
    if (header.children != null) {
      const childrenSpans = calculateSpan(header.children, level + 1);
      const colspan = childrenSpans.reduce(
        (sum, childSpan) => sum + childSpan.colspan,
        0,
      );
      return {
        ...header,
        colspan,
        rowspan: 1,
        children: childrenSpans,
      };
    } else {
      // 如果元素没有子级，意味着它占满从当前层级到最底层的所有行
      return {
        ...header,
        colspan: 1,
        rowspan: getMaxDepth(headers),
      };
    }
  }) as RenderColumnOption[];

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
      default: 'fixed',
    },
  },
  setup(props) {
    const sortInfo = ref<SortOption>({
      key: '',
      order: '',
    });
    const sourceData = ref(props.data);
    const parsedColumns = calculateSpan(props.columns, 0);

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

    function renderHeadRow(
      columns: RenderColumnOption[],
      left: string[],
      right: string[],
      nodes: VNode[],
    ) {
      for (let i = 0, len = columns.length; i < len; i++) {
        const column = columns[i];
        if (column.children == null) {
          const thAttrs: any = {
            class: {
              'sort-column': column.sorter === true,
              'sort-asc':
                sortInfo.value.key === column.key &&
                sortInfo.value.order === 'asc',
              'sort-desc':
                sortInfo.value.key === column.key &&
                sortInfo.value.order === 'desc',
              'nt-fixed': column.fixed,
            },
            style: {},
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
                index: i,
                order: 'asc',
                sorter: column.sorter,
              });
            };
          }

          nodes.push(
            h('th', thAttrs, [
              h('span', column.title),
              column.sorter === true
                ? h('span', { class: 'caret-wrapper' }, [
                    h('span', { class: 'sort-caret ascending' }),
                    h('span', { class: 'sort-caret descending' }),
                  ])
                : null,
            ]),
          );
        } else {
          let children: VNode[] = [];
          renderHeadRow(
            column.children as RenderColumnOption[],
            left,
            right,
            children,
          );
          nodes.push(h('tr', children));
        }
      }
    }

    function renderHead() {
        const headTrs:VNode[] = []
        renderHeadRow(parsedColumns, [], [], headTrs)
        return headTrs
      }

    function renderBody() {
      const bodies: VNode[] = [];
      for (let i = 0, len = sourceData.value.length; i < len; i++) {
        const dataItem = sourceData.value[i];

        let left: string[] = [];
        let right: string[] = [];

        const $tds: VNode[] = [];
        for (const column of props.columns) {
          const tdAttr: any = {
            style: {},
            class: {
              'nt-fixed': column.fixed,
            },
          };

          if (column.fixed) {
            if (column.fixed === 'left') {
              tdAttr.style.left = left.length === 0 ? '0' : `${left.join('+')}`;
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
            $tds.push(h('td', tdAttr, column.render(dataItem, i)));
          } else if (column.key != null) {
            $tds.push(h('td', tdAttr, dataItem[column.key]));
          } else {
            $tds.push(h('td', tdAttr, ''));
          }
        }

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
              h('tr', renderHead()),
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
