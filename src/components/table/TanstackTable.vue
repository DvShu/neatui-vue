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
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :style="
              isFixedLayout ? getCommonPinningStyles(header.column) : undefined
            "
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            :style="
              isFixedLayout ? getCommonPinningStyles(cell.column) : undefined
            "
          >
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts" generic="T">
import { useVueTable, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import type {
  CellContext,
  ColumnDef,
  Column,
  Table,
} from '@tanstack/vue-table';
import type { VNode, CSSProperties } from 'vue';
import { computed, shallowRef, h } from 'vue';
import Radio from '../radio/Radio.vue';
import Checkbox from '../checkbox/Checkbox.vue';

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
  type?: 'radio' | 'checkbox';
};
export type ColumnOption<T> = ColumnDict<T> & ColumnDef<T>;

const cols = shallowRef<Array<ColumnDef<T, any>>>([]);
let leftFixed = shallowRef<string[]>([]);
let rightFixed = shallowRef<string[]>([]);

/** 缓存固定列时的列样式, 避免每次遍历列都重新计算 */
const fixedColStyles: Record<string, CSSProperties> = {};

function createColumns(columns: Array<ColumnOption<T>>) {
  const resCols: Array<ColumnDef<T, any>> = [];
  const leftFixed: string[] = [];
  const rightFixed: string[] = [];
  for (const column of columns) {
    const colOpts = {
      header: column['title' as 'header'],
      accessorKey: (column as ColumnDict<T>)['key'],
      ...column,
    };
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
      } else if (colOpts.header != null && typeof colOpts.header === 'string') {
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
      if (colOpts.type === 'checkbox') {
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
    delete colOpts.title;
    delete colOpts.key;
    delete colOpts.fixed;
    resCols.push(colOpts as any);
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
  enableMultiRowSelection: props.multiSelection === true,
  getCoreRowModel: getCoreRowModel(),
  initialState: {
    columnPinning: {
      left: leftFixed.value,
      right: rightFixed.value,
    },
  },
});
</script>
