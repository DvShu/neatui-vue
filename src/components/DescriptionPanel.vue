<template>
  <div
    class="nt-desc-panel"
    :class="{
      collapse: collapse,
    }"
    :style="styles"
  >
    <div ref="$content"><slot></slot></div>
    <div class="nt-desc-panel-operator" v-if="showMore">
      <Button
        type="primary"
        class="nt-desc-panel-btnmore"
        text
        @click="collapse = !collapse"
      >
        <span>{{ collapse ? '查看更多' : '收起' }}</span>
        <ArrowDown class="nt-desc-panel-arrow"></ArrowDown>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Button from './Button.vue';
import ArrowDown from './icon/ArrowDown.vue';

const $content = ref<HTMLDivElement>();
const panelMaxHeight = ref<number>();

const props = withDefaults(
  defineProps<{
    /** 内容折叠后的高度, 默认: 100px */
    collapseHeight?: number;
    /** 字体大小, 默认: 12px */
    fontSize?: string;
  }>(),
  {
    collapseHeight: 100,
  },
);

const styles = computed(() => {
  const res: { [index: string]: string } = {};
  res['--nt-desc-panel-min-height'] = `${props.collapseHeight}px`;
  if (props.fontSize != null) {
    res['--nt-desc-panel-font-size'] = props.fontSize;
  }
  if (panelMaxHeight != null) {
    res['--nt-desc-panel-max-height'] = `${panelMaxHeight.value}px`;
  }
  return res;
});

/** 是否处于折叠状态 */
const collapse = ref(true);
/** 是否显示更多按钮 */
const showMore = ref(true);

onMounted(() => {
  if ($content.value != null) {
    let contentHeight = $content.value.getBoundingClientRect().height;
    if (contentHeight <= props.collapseHeight) {
      showMore.value = false;
    }
    let offsetHeight = 0;
    const $operator = $content.value.nextElementSibling as HTMLDivElement;
    if ($operator != null) {
      const optHeight = $operator.getBoundingClientRect().height;
      const paddingTop =
        getComputedStyle($operator).getPropertyValue('padding-top');
      offsetHeight = optHeight - parseInt(paddingTop);
    }
    panelMaxHeight.value = contentHeight + offsetHeight;
  }
});
</script>
