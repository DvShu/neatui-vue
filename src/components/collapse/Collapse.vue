<template>
  <div
    class="nt-collapse"
    :class="{
      'nt-collapse--background': props.background,
      'nt-collapse--space': props.gap != null,
    }"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';
import { collapseContext } from './constant';

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
    gap?: string;
    /** 默认展开的面板 */
    defaultExpandedNames?: (string | number)[];
    /** 边框圆角 */
    borderRadius?: string;
    modelValue?: (string | number)[];
  }>(),
  {
    accordion: false,
    arrowPlacement: 'left',
    headerJustify: undefined,
    background: false,
    gap: undefined,
    defaultExpandedNames: () => [],
    modelValue: () => [],
  },
);

const emits = defineEmits(['change', 'update:modelValue']);

/** 当前展开的面板 */

const actives = ref<(string | number)[]>(props.modelValue);

const styles = computed(() => {
  const styleRes: { [index: string]: string } = {};
  if (props.gap != null) {
    styleRes['--nt-collapse-gap'] = props.gap;
  }
  if (props.borderRadius != null) {
    styleRes['--nt-collapse-border-radius'] = props.borderRadius;
  }
  return styleRes;
});

/**
 * 更新活动面板
 * @param name 面板名称
 */
function updateActive(name: string | number) {
  const index = actives.value.indexOf(name);
  if (index === -1) {
    if (props.accordion) {
      actives.value = [name];
    } else {
      actives.value.push(name);
    }
  } else {
    actives.value.splice(index, 1);
  }
  emits('update:modelValue', actives.value);
  emits('change', actives.value);
}

watch(
  () => props.modelValue,
  (v) => {
    if (v != null) {
      actives.value = v;
    }
  },
);

provide(collapseContext, {
  arrowPlacement: props.arrowPlacement,
  headerJustify: props.headerJustify,
  actives,
  toggle: updateActive,
});
</script>
