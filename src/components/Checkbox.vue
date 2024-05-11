<template>
  <label
    :class="['nt-checkbox', indeterminate ? 'nt-checkbox--indeterminate' : '']"
  >
    <input type="checkbox" class="nt-checkbox__input" :name="name" />
    <span class="nt-checkbox__inner"></span>
    <span class="nt-checkbox__label">复选框</span>
  </label>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    /** 设置不确定状态，仅负责样式控制 */
    indeterminate?: boolean;
    /** 原生 name 属性 */
    name?: string;
  }>(),
  {
    indeterminate: false,
  },
);
</script>
