<template>
  <div
    style="width: 550px; height: 300px; overflow: auto"
    class="nt-scrollbar nt-scrollbar-x"
  >
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
import Button from '../components/Button.vue';

const columns: ColumnOption[] = [
  {
    key: 'id',
    title: 'ID',
    sorter: true,
    fixed: 'left',
    width: 50,
  },
  {
    key: 'name',
    title: '姓名',
    width: 100,
    fixed: 'left',
  },
  {
    key: 'age',
    title: '年龄',
    sorter: true,
    width: 60,
    render: (row: any) => {
      return h('span', { style: { color: 'orange' } }, row.age);
    },
  },
  {
    key: 'address',
    title: '地址',
    width: 200,
  },
  {
    key: 'score',
    title: '分数',
    width: 60,
  },
  {
    title: '操作',
    fixed: 'right',
    width: 150,
    render: () => {
      return [
        h(Button, { type: 'text' }, '新增'),
        h(Button, { type: 'text' }, '编辑'),
        h(Button, { type: 'text' }, '删除'),
      ];
    },
  },
];

const data: { [index: string]: any }[] = [
  {
    id: 1,
    name: '查娜',
    age: 18,
    address: '四川成都',
    score: 100,
  },
  {
    id: 2,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 3,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 4,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 5,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 2,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 6,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
  },
  {
    id: 7,
    name: '查娜',
    age: 2,
    address: '四川成都',
    score: 100,
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
