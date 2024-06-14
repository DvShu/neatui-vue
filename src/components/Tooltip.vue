<template>
  <div
    :class="{
      'nt-tooltip': true,
      'nt-tooltip-visible': visible,
    }"
  >
    <slot></slot>
    <div
      :class="[
        'nt-tooltip-content',
        `nt-tooltip--${styleName}`,
        placement.startsWith('top') ? 'nt-tooltip-top' : '',
        placement.startsWith('bottom') ? 'nt-tooltip-bottom' : '',
        placement.endsWith('Start') ? 'nt-tooltip-start' : '',
        placement.endsWith('End') ? 'nt-tooltip-end' : '',
        contentClass,
      ]"
    >
      <slot name="title">{{ title }}</slot>
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
    /** 组件可见性, 受控模式 */
    visible?: boolean;
    /** Tooltip Content 样式 */
    contentClass?: string;
    styleName?: string;
  }>(),
  {
    placement: 'top',
    visible: false,
    styleName: 'default',
  },
);
</script>
