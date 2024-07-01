<template>
  <div
    ref="Rel"
    class="nt-tabbar"
    :class="[
      'nt-tabbar--' + type,
      gap != null && gap > 0 ? 'nt-tabbar-gap' : '',
    ]"
  >
    <div class="nt-tabbar-wrapper" :style="styles">
      <slot></slot>
    </div>
    <div v-if="type === 'card'" class="nt-tabbar-card-border"></div>
    <div
      v-if="type !== 'nav' && model != null"
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
const emits = defineEmits(['change']);

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
     *  3. card - 卡片
     */
    type?: 'nav' | 'bar' | 'card';
    justifyContent?: string;
    gap?: number;
  }>(),
  {
    type: 'nav',
    justifyContent: undefined,
    gap: undefined,
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
  if (props.gap != null) {
    res['--nt-tabbar-item-gap'] = `${props.gap}px`;
  }
  return res;
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
  emits('change', name);
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
