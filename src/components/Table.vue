<script lang="ts">
import { defineComponent, h, PropType, ref } from 'vue';
import type { VNode } from 'vue';

export interface ColumnOption {
  /** 排序时，如果传递了 key，则会将此 key 回传，便于排序, 如果不传此 key，则排序无效 */
  key?: string;
  /** 文本 */
  title: string;
  /** 是否启用排序 */
  sorter?: boolean;
  /** 默认的排序方式 */
  defaultSortOrder?: 'asc' | 'desc';
  /** 是否固定列 */
  fixed?: 'left' | 'right';
  /** 列宽 */
  width?: string | number;
  render?: (row: any, index: number) => VNode;
}

export interface DataSortState {
  key: string;
  index: number;
  order: 'asc' | 'desc';
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
    columnKey: {
      type: String,
      required: false,
    },
  },
  emits: ['sort-change'],
  setup(props, { emit }) {
    const sortInfo = ref({
      key: '',
      order: '',
    });

    function isFixed() {
      const len = props.columns.length;
      if (props.columns[0].fixed) return true;
      if (props.columns[len - 1].fixed) return true;
      let isFixed = false;
      for (let i = 0; i < len; i++) {
        if (props.columns[i].fixed) {
          isFixed = true;
          break;
        }
      }
      return isFixed;
    }

    /** 是否使用 fixed[table-layout:fixed] 布局 */
    let fixed = isFixed();

    function handleHeadClick({ sorter, key, index }: any) {
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
        emit('sort-change', {
          key: sortKey,
          order: sortOrder,
          index,
        });
      }
    }

    function renderHead() {
      const columnsRender: VNode[] = [];
      let left: string[] = [];
      let right: string[] = [];

      for (let i = 0, len = props.columns.length; i < len; i++) {
        const column = props.columns[i];
        if (column.defaultSortOrder != null && sortInfo.value.key === '') {
          sortInfo.value = {
            key: column.key || '',
            order: column.defaultSortOrder,
          };
        }

        const thAttrs: any = {
          class: {
            'sort-column': column.sorter === true,
            'sort-asc':
              sortInfo.value.key === column.key &&
              sortInfo.value.order === 'asc',
            'sort-desc':
              sortInfo.value.key === column.key &&
              sortInfo.value.order === 'desc',
            'nt-fixed': props.fixedHead || column.fixed,
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

        if (props.fixedHead) {
          thAttrs.style.top = '0';
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

        columnsRender.push(
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
      }
      return columnsRender;
    }

    function renderBody() {
      const bodies: VNode[] = [];
      for (let i = 0, len = props.data.length; i < len; i++) {
        const column = props.columns[i];
        const dataItem = props.data[i];

        let left: string[] = [];
        let right: string[] = [];

        const tdAttr: any = {
          style: {},
          class: {
            'nt-fixed': column.fixed,
          },
        };

        if (column.fixed) {
          if (column.fixed === 'left') {
            tdAttr.style.left =
              left.length === 0 ? '0' : `calc(${left.join('+')})`;
          } else {
            tdAttr.style.right =
              right.length === 0 ? '0' : `calc(${right.join('+')})`;
          }
        }

        if (column.render != null) {
          bodies.push(h('td', tdAttr, column.render(dataItem, i)));
        } else if (column.key != null) {
          bodies.push(h('td', tdAttr, dataItem[column.key]));
        } else {
          bodies.push(h('td', tdAttr, ''));
        }
      }
      return bodies;
    }

    return () =>
      h(
        'table',
        {
          class: [
            'nt-table',
            props.stripe ? 'nt-table-stripe' : '',
            fixed ? 'nt-table-fixed' : '',
          ],
        },
        [
          h('thead', h('tr', renderHead())),
          h(
            'tbody',
            props.data.length === 0
              ? h(
                  'td',
                  {
                    class: 'ph-table__none-col',
                    colspan: props.columns.length,
                  },
                  '暂无数据记录!',
                )
              : renderBody(),
          ),
        ],
      );
  },
});
</script>
