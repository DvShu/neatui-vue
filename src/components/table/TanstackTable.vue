<template>
  <div class="nt-table-wrapper nt-scrollbar">
    <table
      :class="[
        'nt-table',
        props.stripe ? 'nt-table-stripe' : '',
        isFixedLayout ? 'nt-table-fixed' : '',
        props.border ? 'nt-table-border' : '',
      ]"
    >
      <thead
        :class="{
          'nt-fixed': props.fixedHead,
        }"
        :style="{
          top: props.fixedHead ? '0' : undefined,
        }"
      >
        <tr
          v-for="headerGroup in mergeTanHeaderGroups(table.getHeaderGroups())"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :style="getCommonPinningStyles(header.column)"
            :class="[
              header.column.getCanSort() ? `sort-column` : '',
              header.column.getIsSorted()
                ? `sort-${header.column.getIsSorted()}`
                : '',
            ]"
            @click="header.column.getToggleSortingHandler()?.($event)"
            :rowspan="header.rowSpan ? header.rowSpan : 1"
            :colspan="header.colSpan"
          >
            <template v-if="!header.isPlaceholder">
              <FlexRender
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
              <span v-if="header.column.getCanSort()" class="caret-wrapper">
                <span class="sort-caret ascending"></span>
                <span class="sort-caret descending"></span>
              </span>
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in table.getRowModel().rows" :key="row.id">
          <tr>
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              :style="getCommonPinningStyles(cell.column)"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </td>
          </tr>
          <tr v-if="expandable != null && row.getIsExpanded()">
            <td :colspan="row.getAllCells().length">
              <FlexRender
                :render="expandable.expandedRowRender(row.original)"
                :props="null"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts" generic="T">
import {
  useVueTable,
  getCoreRowModel,
  FlexRender,
  getSortedRowModel,
  getExpandedRowModel,
} from '@tanstack/vue-table';
import type {
  CellContext,
  ColumnDef,
  Column,
  Table,
  ColumnSort,
  HeaderGroup,
} from '@tanstack/vue-table';
import type { VNode, CSSProperties } from 'vue';
import { computed, shallowRef, h } from 'vue';
import Radio from '../radio/Radio.vue';
import Checkbox from '../checkbox/Checkbox.vue';
import Button from '../Button.vue';
import ArrowRight from '../icon/ArrowRight.vue';

export type ColumnDict<T> = {
  id?: string;
  /** 标题 */
  title?: string;
  /** 标题 */
  header?: string | ((opts: { table: Table<T> }) => VNode | string);
  key?: string;
  accessorKey?: string;
  cell?: (
    row: T,
    index: number,
    info: CellContext<T, unknown>,
  ) => VNode | VNode[] | string;
  /** 列宽 */
  size?: number;
  fixed?: 'left' | 'right';
  /** 设置列为可选择 */
  type?: 'selection';
  /** 排序 */
  sorter?: boolean | ((rowA: T, rowB: T) => number);
  columns?: ColumnDict<T>[];
};
export type ColumnOption<T> = ColumnDict<T> & ColumnDef<T>;

const cols = shallowRef<Array<ColumnDef<T, any>>>([]);
let leftFixed = shallowRef<string[]>([]);
let rightFixed = shallowRef<string[]>([]);

/** 缓存固定列时的列样式, 避免每次遍历列都重新计算 */
const fixedColStyles: Record<string, CSSProperties> = {};

/**
 * 转换 TanStackTable 标题以移除不必要的空格
 *
 * TanStack Table 本身现在是不支持 rowspan，这里采用了 `issue` 里面的方案：[mergeHeaderGroups]{@link https://github.com/TanStack/table/issues/5202#issuecomment-2027529717}
 *
 * @param headerGroups
 * @returns
 */
function mergeTanHeaderGroups<T>(
  headerGroups: HeaderGroup<T>[],
): HeaderGroup<T>[] {
  if (headerGroups.length === 1) return headerGroups;
  const columnsIds = new Set();
  return headerGroups.map((group, depth, { length: fullDepth }) => ({
    ...group,
    headers: group.headers
      .filter((header) => !columnsIds.has(header.column.id)) // Ignore already merged columns
      .map((header) => {
        columnsIds.add(header.column.id);
        return header.isPlaceholder
          ? {
              ...header,
              // If the cell is placeholder(empty), then there will be no subgroup below it,
              // and this means that you can merge it with all lower cells in the column header
              isPlaceholder: false,
              rowSpan: fullDepth - depth,
            }
          : { ...header, rowSpan: 1 };
      }),
  })) as any;
}

function createColumns(
  columns: Array<ColumnOption<T>>,
  isCreateExpand = false,
) {
  const resCols: Array<ColumnDef<T, any>> = [];
  const leftFixed: string[] = [];
  const rightFixed: string[] = [];
  for (const column of columns) {
    const colOpts = {
      ...column,
    };
    if (colOpts.header == null && colOpts.title != null) {
      colOpts.header = colOpts.title;
    }
    if (column.columns == null) {
      if (colOpts.accessorKey == null && colOpts.key != null) {
        colOpts.accessorKey = colOpts.key;
      }
      colOpts.enableSorting = false;
      colOpts.sortDescFirst = false;

      if (column.cell != null) {
        colOpts.cell = ((info: CellContext<T, unknown>) => {
          return (column as any).cell(info.row.original, info.row.index, info);
        }) as any;
      }
      if (colOpts.header == null && colOpts.accessorKey != null) {
        colOpts.header = colOpts.accessorKey;
      }
      if (colOpts.id == null) {
        if (colOpts.accessorKey != null) {
          colOpts.id = colOpts.accessorKey;
        } else if (
          colOpts.header != null &&
          typeof colOpts.header === 'string'
        ) {
          colOpts.id = colOpts.header;
        }
      }
      if (colOpts.fixed === 'left') {
        leftFixed.push(colOpts.id as string);
      } else if (colOpts.fixed === 'right') {
        rightFixed.push(colOpts.id as string);
      }
      if (colOpts.type != null) {
        colOpts.id = colOpts.type;
        if (colOpts.type === 'selection') {
          colOpts.size = 40;
          if (props.multiSelection === false) {
            colOpts.cell = (({ row }: CellContext<T, unknown>) => {
              return h(Radio, {
                disabled: !row.getCanSelect(),
                checked: row.getIsSelected(),
                onChange: (v) => row.toggleSelected(v),
              });
            }) as any;
          } else {
            colOpts.header = ({ table }: { table: Table<T> }) => {
              return h(Checkbox, {
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: (v) => table.toggleAllRowsSelected(v),
              });
            };
            colOpts.cell = (({ row }: CellContext<T, unknown>) => {
              return h(Checkbox, {
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: (v) => row.toggleSelected(v),
              });
            }) as any;
          }
        }
      } else if (!isCreateExpand) {
        isCreateExpand = true;
        colOpts.cell = ((cellContext: CellContext<T, unknown>) => {
          let content = null;
          if (column.cell != null) {
            content = column.cell(
              cellContext.row.original,
              cellContext.row.index,
              cellContext,
            );
          }
          if (content == null) {
            content = cellContext.getValue();
          }
          if (typeof content !== 'object') {
            content = h('span', content);
          }
          const cellNode: VNode[] = [];
          if (cellContext.row.depth > 0) {
            cellNode.push(
              h(
                'div',
                {
                  style: {
                    display: 'inline-block',
                    width: cellContext.row.depth * 20 + 'px',
                  },
                },
                '',
              ),
            );
          }
          if (cellContext.table.getCanSomeRowsExpand()) {
            cellNode.push(
              h(
                Button,
                {
                  class: {
                    'nt-table-expand-icon': true,
                    'nt-table-expand-icon--expanded':
                      cellContext.row.getIsExpanded(),
                    'nt-table-expand-placeholder':
                      !cellContext.row.getCanExpand(),
                  },
                  onClick: cellContext.row.getToggleExpandedHandler(),
                },
                {
                  default: () => h(ArrowRight),
                },
              ),
            );
          }
          cellNode.push(content as VNode);
          return cellNode;
        }) as any;
      }
      if (colOpts.sorter != null && colOpts.sorter !== false) {
        colOpts.enableSorting = true;
        if (typeof colOpts.sorter === 'function') {
          colOpts.sortingFn = (rowA, rowB) =>
            (colOpts as any).sorter(rowA.original, rowB.original);
        }
      }
      delete colOpts.title;
      delete colOpts.key;
      delete colOpts.fixed;
    } else {
      // group
      if (
        colOpts.id == null &&
        colOpts.header != null &&
        typeof colOpts.header === 'string'
      ) {
        colOpts.id = colOpts.header;
      }
      colOpts.columns = createColumns(colOpts.columns as any, isCreateExpand)
        .columns as any;
    }
    resCols.push(colOpts as any);
  }
  if (!isCreateExpand && props.expandable != null) {
    let insertIndex = 0;
    if ((resCols[0] as any).type === 'selection') {
      insertIndex = 1;
    }
    resCols.splice(insertIndex, 0, {
      id: 'expandable',
      cell: (cellContext: CellContext<T, unknown>) => {
        return h(
          Button,
          {
            class: {
              'nt-table-expand-icon': true,
              'nt-table-expand-icon--expanded': cellContext.row.getIsExpanded(),
              'nt-table-expand-placeholder': !cellContext.row.getCanExpand(),
            },
            onClick: cellContext.row.getToggleExpandedHandler(),
          },
          {
            default: () => h(ArrowRight),
          },
        );
      },
    });
  }
  return { columns: resCols, leftFixed, rightFixed };
}

const getCommonPinningStyles = (column: Column<T>): CSSProperties => {
  const id = column.id;
  if (id in fixedColStyles) {
    return fixedColStyles[id];
  }
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right');
  const styl: CSSProperties = {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px #d9d9d9 inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px #d9d9d9 inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: `${column.getSize()}px`,
    zIndex: isPinned ? 1 : 0,
  };
  fixedColStyles[id] = styl;
  return styl;
};

const props = withDefaults(
  defineProps<{
    stripe?: boolean;
    border?: boolean;
    tableLayout?: 'auto' | 'fixed';
    columns: Array<ColumnOption<T>>;
    data: Array<T>;
    fixedHead?: boolean;
    multiSelection?: boolean;
    /** 默认排序 */
    defaultSorter?: ColumnSort;
    /** 配置展开属性  */
    expandable?: {
      /** 设置是否允许行展开 */
      rowExpandable: (row: T) => boolean;
      /** 展开行渲染内容 */
      expandedRowRender: (row: T) => VNode | VNode[];
    };
  }>(),
  {
    stripe: true,
    border: false,
    tableLayout: 'auto',
    fixedHead: false,
    multiSelection: true,
  },
);

const ccols = createColumns(props.columns);

cols.value = ccols.columns;
leftFixed.value = ccols.leftFixed;
rightFixed.value = ccols.rightFixed;

const isFixedLayout = computed(() => {
  if (leftFixed.value.length > 0 || rightFixed.value.length > 0) {
    return true;
  }
  return props.tableLayout === 'fixed';
});

const table = useVueTable<T>({
  get data() {
    return props.data;
  },
  columns: cols.value,
  getSubRows: (row) => (row as any).children,
  enableMultiRowSelection: props.multiSelection === true,
  getCoreRowModel: getCoreRowModel(),
  getRowCanExpand: (row) => {
    return (row.original as any).children != null
      ? true
      : props.expandable != null
        ? props.expandable.rowExpandable(row.original)
        : false;
  },
  initialState: {
    columnPinning: {
      left: leftFixed.value,
      right: rightFixed.value,
    },
    sorting: props.defaultSorter ? [props.defaultSorter] : undefined,
  },
  getSortedRowModel: getSortedRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
});
</script>
