<template>
  <div class="nt-tabbar" :class="['nt-tabbar--' + type]"><slot></slot></div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * 标签类型:
     *  1. bar - 每一项等分排列, 类似于移动端底部的标签栏
     */
    type?: 'bar';
  }>(),
  {
    type: 'bar',
  },
);
</script>
