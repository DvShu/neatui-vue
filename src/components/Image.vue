<template>
  <img
    :loading="loading"
    :src="actualSrc"
    :class="['nt-image', previewDisable ? '' : 'nt-image--preview']"
    :style="computedStyle"
    :alt="alt"
    @error="handleLoadError"
    @click="handleClick"
  />
  <ImagePreview
    v-model:show="showPreview"
    :url-list="previewSrcList || [src]"
    :initial-index="initialIndex"
  ></ImagePreview>
</template>
<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue';
import ImagePreview from './ImagePreview.vue';

const showPreview = ref(false);

const props = withDefaults(
  defineProps<{
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    /** 原生属性, eager - 立即加载图像, lazy - 懒加载 */
    loading?: 'lazy' | 'eager';
    /** object-fit */
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    /** 图片加载失败时显示的地址 */
    fallback?: string;
    /** 图片占位, 用于加载大图时的占位 */
    placeholder?: string;
    /** 禁用图片预览 */
    previewDisable?: boolean;
    /** 预览图片地址列表, 多图预览时使用 */
    previewSrcList?: string[];
    initialIndex?: number;
  }>(),
  {
    loading: 'eager',
    previewDisable: false,
    initialIndex: 0,
  },
);
let img: HTMLImageElement | null;

const actualSrc = ref(props.placeholder || props.src);
loadActualImage();

watch(
  () => props.src,
  () => {
    actualSrc.value = props.placeholder || props.src;
    loadActualImage();
  },
);

onUnmounted(() => {
  clearImg();
});

function loadActualImage() {
  if (props.placeholder != null) {
    img = new Image();
    img.src = props.src;
    img.onload = () => {
      actualSrc.value = props.src;
      clearImg();
    };
  }
}

function handleClick() {
  if (!props.previewDisable) {
    showPreview.value = true;
  }
}

const computedStyle = computed(() => {
  return {
    width: props.width
      ? props.width.endsWith('px')
        ? props.width
        : `${props.width}px`
      : undefined,
    height: props.height
      ? props.height.endsWith('px')
        ? props.height
        : `${props.height}px`
      : undefined,
    objectFit: props.fit != null ? props.fit : undefined,
  };
});

function handleLoadError(e: Event) {
  if (props.fallback != null) {
    (e.target as HTMLImageElement).src = props.fallback;
  }
}

function clearImg() {
  if (img) {
    img.onload = null;
    img.onerror = null;
    img = null;
  }
}
</script>
