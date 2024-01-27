<template>
  <div
    :class="[
      'nt-tooltip',
      `nt-tooltip--${position}`,
      align ? `nt-tooltip-align-${align}` : '',
    ]"
  >
    <slot></slot>
    <div v-if="text" class="nt-tooltip-text">
      <span v-if="text">{{ text }}</span>
      <template v-else> <slot name="text"></slot></template>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    /** 提示框的边框位置是否和内容边框位置对齐, 默认为 false */
    align?: 'left' | 'right';
    /** 提示框的边框位置, 默认为 'top' */
    position?: 'top' | 'bottom';
  }>(),
  {
    position: 'top',
  },
);
</script>
