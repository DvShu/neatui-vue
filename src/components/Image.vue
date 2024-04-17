<template>
  <img
    :loading="loading"
    :src="src"
    class="nt-image"
    :style="computedStyle"
    :alt="alt"
    @error="handleLoadError"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue';

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
  }>(),
  {
    loading: 'eager',
  },
);

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
</script>
