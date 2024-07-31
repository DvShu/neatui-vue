<template>
  <table
    :class="[
      'nt-table',
      props.stripe ? 'nt-table-stripe' : '',
      props.tableLayout === 'fixed' ? 'nt-table-fixed' : '',
      props.border ? 'nt-table-border' : '',
    ]"
  >
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th v-for="header in headerGroup.headers" :key="header.id">
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
        <td v-for="cell in row.getVisibleCells()" :key="cell.id">
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts" generic="T">
import {
  createColumnHelper,
  useVueTable,
  getCoreRowModel,
  FlexRender,
} from '@tanstack/vue-table';
import type { CellContext, ColumnDef } from '@tanstack/vue-table';
import type { VNode } from 'vue';
import { computed } from 'vue';

const columnHelper = createColumnHelper<T>();

type ColumnDict = {
  id?: string;
  /** 标题 */
  title?: string;
  /** 标题 */
  header?: string;
  key?: string;
  accessorKey?: string;
  cell?: (info: CellContext<T, unknown>) => VNode | VNode[] | string;
};

const cols = computed<Array<ColumnDef<T, any>>>(() => {
  const resCols: Array<ColumnDef<T, any>> = [];
  for (const column of props.columns) {
    if (column.header) {
    }
  }
  return resCols;
});

const props = withDefaults(
  defineProps<{
    stripe?: boolean;
    border?: boolean;
    tableLayout?: 'auto' | 'fixed';
    columns: Array<ColumnDict | ColumnDef<T, any>>;
    data: Array<T>;
  }>(),
  {
    stripe: true,
    border: false,
    tableLayout: 'auto',
  },
);

const table = useVueTable<T>({
  get data() {
    return props.data;
  },
  columns: cols.value,
  getCoreRowModel: getCoreRowModel(),
});
</script>
