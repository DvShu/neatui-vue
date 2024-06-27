<template>
  <div
    class="nt-tabbar"
    :class="[
      'nt-tabbar--' + type,
      typePlacement != null ? 'nt-tabbar--' + typePlacement : '',
    ]"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { tabbarContext } from './constant';

const model = defineModel<string | number>();

const props = withDefaults(
  defineProps<{
    /**
     * 标签类型:
     *  1. nav - 每一项等分排列, 类似于移动端底部的标签栏
     */
    type?: 'nav';
    placement?: 'top' | 'bottom';
  }>(),
  {
    type: 'nav',
  },
);

const typePlacement = computed(() => {
  let placement = props.placement;
  if (props.type === 'nav') {
    placement = undefined;
  }
  return placement;
});

function change(name: string | number) {
  model.value = name;
}

provide(tabbarContext, {
  active: model,
  change,
});
</script>
