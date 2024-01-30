<template>
  <div style="width: 650px; height: 300px; overflow: auto">
    <Table
      :columns="columns"
      :data="data"
      fixed-head
      @sort-change="handleSort"
    ></Table>
  </div>
</template>

<script setup lang="ts">
import Table from '../components/Table.vue';
import type { DataSortState, ColumnOption } from '../components/Table.vue';
import { h } from 'vue';

const columns: ColumnOption[] = [
  {
    key: 'id',
    title: 'ID',
    sorter: true,
    fixed: 'left',
    width: 50,
  },
  {
    key: 'age',
    title: '年龄',
    sorter: true,
    render: (row: any) => {
      return h('span', { style: { color: 'red' } }, row.age);
    },
  },
];

const data: { [index: string]: number }[] = [
  {
    id: 1,
    age: 18,
  },
  {
    id: 2,
    age: 2,
  },
];

function handleSort(p: DataSortState) {
  return data.sort((a, b) => a[p.key] - b[p.key]);
}
</script>

<style lang="less">
.demo-table {
  table-layout: fixed;

  thead tr {
    position: sticky;
    top: 0;
  }
}
</style>
