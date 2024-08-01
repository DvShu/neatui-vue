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
            :style="getCommonPinningStyles(header.column)"
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
            :style="getCommonPinningStyles(cell.column)"
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
import type { CellContext, ColumnDef, Column } from '@tanstack/vue-table';
import type { VNode, CSSProperties } from 'vue';
import { computed, shallowRef } from 'vue';

export type ColumnDict<T> = {
  id?: string;
  /** 标题 */
  title?: string;
  /** 标题 */
  header?: string;
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
};
export type ColumnOption<T> = ColumnDict<T> & ColumnDef<T>;

const cols = shallowRef<Array<ColumnDef<T, any>>>([]);
let leftFixed: string[] = [];
let rightFixed: string[] = [];

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
  const styl: CSSProperties = {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
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
  }>(),
  {
    stripe: true,
    border: false,
    tableLayout: 'auto',
    fixedHead: false,
  },
);

const ccols = createColumns(props.columns);
cols.value = ccols.columns;
leftFixed = ccols.leftFixed;
rightFixed = ccols.rightFixed;

const isFixedLayout = computed(() => {
  if (leftFixed.length > 0 || rightFixed.length > 0) {
    return true;
  }
  return props.tableLayout === 'fixed';
});

const table = useVueTable<T>({
  get data() {
    return props.data;
  },
  columns: cols.value,
  getCoreRowModel: getCoreRowModel(),
  initialState: {
    columnPinning: {
      left: leftFixed,
      right: rightFixed,
    },
  },
});
</script>
