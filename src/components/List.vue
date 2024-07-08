<template>
  <div class="nt-list">
    <slot></slot>
    <div ref="Rloadmore" class="nt-list-loadmore" v-if="infinite">
      <LoadingIcon v-if="!finish" class="nt-list-icon nt-rotate-anim" />
      <span class="nt-list-loadmore-text">
        {{ finish ? '已经到底啦！' : '加载中……' }}</span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import LoadingIcon from './icon/Loading.vue';

const props = withDefaults(
  defineProps<{
    /**
     * 是否已经全部加载完成
     */
    finish?: boolean;
    /** 是否显示无限加载模式 */
    infinite?: boolean;
  }>(),
  {
    finish: false,
    infinite: true,
  },
);

const emits = defineEmits(['loadMore']);

const Rloadmore = ref<HTMLDivElement>();

let observer: IntersectionObserver;
if (props.infinite) {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !props.finish) {
      emits('loadMore');
    }
  });
}

watch(
  () => props.finish,
  (val) => {
    if (Rloadmore.value != null && observer != null) {
      if (val === true) {
        observer.unobserve(Rloadmore.value);
      } else {
        observer.observe(Rloadmore.value);
      }
    }
  },
);

onMounted(() => {
  if (Rloadmore.value != null && !props.finish && observer != null) {
    observer.observe(Rloadmore.value);
  }
});

onUnmounted(() => {
  if (observer != null) {
    if (Rloadmore.value != null) {
      observer.unobserve(Rloadmore.value);
    }
    observer.disconnect();
    observer = undefined as any;
  }
});
</script>
