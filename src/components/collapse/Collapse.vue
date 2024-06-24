<template>
  <div
    class="nt-collapse"
    :class="{
      'nt-collapse--background': props.background,
      'nt-collapse--space': props.itemSpace > 0,
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue';
import { collapseContext } from './constant';

/** 当前展开的面板 */
const actives = ref<(string | number)[]>(['1']);

/**
 * 更新活动面板
 * @param name 面板名称
 */
function updateActive(name: string | number) {
  const index = actives.value.indexOf(name);
  if (index === -1) {
    actives.value.push(name);
  } else {
    actives.value.splice(index, 1);
  }
}

const props = withDefaults(
  defineProps<{
    /** 是否手风琴模式 */
    accordion?: boolean;
    /** 箭头位置 */
    arrowPlacement?: 'left' | 'right';
    /** 面板头部, 水平对齐方式 */
    headerJustify?: 'space-between' | 'flex-start';
    /** 是否带有边框和背景 */
    background?: boolean;
    /** 面板之间的间隔 */
    itemSpace?: number;
  }>(),
  {
    accordion: true,
    arrowPlacement: 'left',
    headerJustify: undefined,
    background: false,
    itemSpace: 0,
  },
);

provide(collapseContext, {
  arrowPlacement: props.arrowPlacement,
  headerJustify: props.headerJustify,
  actives,
  toggle: updateActive,
});
</script>
