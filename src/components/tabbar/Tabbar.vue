<template>
  <div
    ref="Rel"
    class="nt-tabbar"
    :class="[
      'nt-tabbar--' + type,
      typePlacement != null ? 'nt-tabbar--' + typePlacement : '',
    ]"
    :style="styles"
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
import { isVisible, elem } from 'ph-utils/dom';

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
    justifyContent?: string;
  }>(),
  {
    type: 'nav',
    justifyContent: undefined,
  },
);

const styles = computed(() => {
  const res: { [index: string]: string } = {};
  if (props.justifyContent != null) {
    if (props.justifyContent.startsWith('space-')) {
      res['--nt-tabbar-bar-gap'] = '0';
    }
    res['justify-content'] = props.justifyContent;
  }
  return res;
});

const typePlacement = computed(() => {
  let placement = props.placement;
  if (props.type === 'nav') {
    placement = undefined;
  }
  return placement;
});

function calcItemPos(name: string) {
  if (Rel.value != null) {
    const $target = elem(
      '.nt-tabbar-item[data-name="' + name + '"]',
      Rel.value,
    )[0];
    const offsetLeft = $target.offsetLeft;
    lineStyles.value = {
      width: $target.offsetWidth + 'px',
      left: `${offsetLeft}px`,
    };
    if (Rel.value != null) {
      if (!isVisible($target, Rel.value)) {
        Rel.value.scrollTo({
          left: offsetLeft,
          behavior: 'smooth',
        });
      }
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
