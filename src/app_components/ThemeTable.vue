<template>
  <h2 v-if="title != null">{{ title }}</h2>
  <h3 v-if="subtitle != null">{{ subtitle }}</h3>
  <p v-if="description != null">{{ description }}</p>
  <Table :columns="columns" :data="rows"></Table>
</template>

<script setup lang="ts">
import Table from '../components/Table.vue';

const columns = [
  {
    key: 'name',
    title: '名称',
  },
  {
    key: 'description',
    title: '描述',
  },
  {
    key: 'default',
    title: '默认值',
  },
];

interface ThemeTableItem {
  name: string;
  description?: string;
  default?: string;
}

withDefaults(
  defineProps<{
    title?: string | null;
    subtitle?: string | null;
    description?: string;
    rows: ThemeTableItem[];
  }>(),
  {
    title: '主题定制',
    subtitle: '样式变量',
    description: '组件提供了下列 CSS 变量，可用于自定义样式，',
  },
);
</script>
