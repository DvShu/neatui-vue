<template>
  <div
    :class="[
      'nt-tooltip',
      `nt-tooltip--${placement}`,
      align ? `nt-tooltip-align-${align}` : '',
    ]"
  >
    <slot></slot>
    <div v-if="title" class="nt-tooltip-text">
      <span v-if="title">{{ title }}</span>
      <template v-else> <slot name="text"></slot></template>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    /** 提示框的边框位置, 默认为 'top' */
    placement?:
      | 'topStart'
      | 'top'
      | 'topEnd'
      | 'bottomStart'
      | 'bottom'
      | 'bottomEnd';
  }>(),
  {
    placement: 'top',
  },
);
</script>
