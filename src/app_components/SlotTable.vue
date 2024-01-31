<template>
  <h3 v-if="title != null && title !== ''">{{ title }}</h3>
  <Table :columns="columns" :data="data"></Table>
</template>

<script setup lang="ts">
import Table from '../components/Table.vue';

const columns = [
  {
    key: 'name',
    title: '名称',
  },
  {
    key: 'param',
    title: '参数',
  },
  {
    key: 'description',
    title: '说明',
  },
];

withDefaults(
  defineProps<{
    title?: string;
    data: any[];
  }>(),
  {
    title: 'Props',
  },
);
</script>

<style lang="less"></style>
