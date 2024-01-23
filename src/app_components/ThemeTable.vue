<template>
  <h2 v-if="title != null">{{ title }}</h2>
  <h3 v-if="subtitle != null">{{ subtitle }}</h3>
  <p v-if="description != null">{{ description }}</p>
  <table class="nt-table">
    <thead>
      <tr>
        <th>名称</th>
        <th>描述</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td>{{ row.name }}</td>
        <td>{{ row.description == null ? '' : row.description }}</td>
        <td>{{ row.default == null ? '' : row.default }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
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
