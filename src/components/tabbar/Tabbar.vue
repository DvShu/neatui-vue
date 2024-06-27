<template>
  <div
    ref="Rel"
    class="nt-tabbar"
    :class="[
      'nt-tabbar--' + type,
      typePlacement != null ? 'nt-tabbar--' + typePlacement : '',
    ]"
  >
    <slot></slot>
    <div
      v-if="type === 'bar' && model != null"
      :style="lineStyles"
      class="nt-tabbar--bar-line"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue';
import { tabbarContext } from './constant';

const model = defineModel<string | number>();
const Rel = ref<HTMLElement>();

/* bar-line style */
const lineStyles = ref<{ width: string; left: string }>({
  left: '0',
  width: '0',
});

const props = withDefaults(
  defineProps<{
    /**
     * 标签类型:
     *  1. nav - 每一项等分排列, 类似于移动端底部的标签栏
     *  2. bar - 选项卡
     */
    type?: 'nav' | 'bar';
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

function calcItemPos(name: string) {
  const $target = document.querySelector(
    '.nt-tabbar-item[data-name="' + name + '"]',
  ) as HTMLDivElement;
  if ($target != null) {
    const offsetLeft = $target.offsetLeft;
    lineStyles.value = {
      width: $target.offsetWidth + 'px',
      left: `${offsetLeft}px`,
    };
    if (Rel.value != null) {
      Rel.value.scrollTo({
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  }
}

function change(name: string | number) {
  model.value = name;
  calcItemPos(String(name));
}

provide(tabbarContext, {
  active: model,
  change,
});

onMounted(() => {
  if (model.value != null) {
    calcItemPos(String(model.value));
  }
});
</script>
