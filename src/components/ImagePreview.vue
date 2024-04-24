<template>
  <Teleport to="body">
    <Transition name="nt-opacity">
      <div class="nt-image-preview" v-if="show">
        <div class="nt-image-preview__mask"></div>
        <span
          class="nt-image-preview__btn nt-image-preview__close"
          aria-label="close"
          @click="handleClose"
        >
          <CloseIcon></CloseIcon>
        </span>
        <template v-if="urlList.length > 1">
          <span
            class="nt-image-preview__btn nt-image-preview__prev"
            @click="toggleImage('prev')"
          >
            <ArrowLeft></ArrowLeft>
          </span>
          <span
            class="nt-image-preview__btn nt-image-preview__next"
            @click="toggleImage('next')"
          >
            <ArrowRight></ArrowRight>
          </span>
        </template>
        <div class="nt-image-preview__btn nt-image-preview__actions">
          <span
            class="nt-image-preview__btn"
            aria-label="zoom-out"
            @click="transformScale('out')"
          >
            <ZoomOut></ZoomOut>
          </span>
          <span
            class="nt-image-preview__btn"
            aria-label="zoom-int"
            @click="transformScale('in')"
          >
            <ZoomIn></ZoomIn>
          </span>
          <span
            class="nt-image-preview__btn"
            aria-label="reset-transform"
            @click="resetTransform"
          >
            <Reduction></Reduction>
          </span>
          <span
            class="nt-image-preview__btn"
            aria-label="refresh-left"
            @click="transformRotate('left')"
          >
            <RefreshLeft></RefreshLeft>
          </span>
          <span
            class="nt-image-preview__btn"
            aria-label="refresh-right"
            @click="transformRotate('right')"
          >
            <RefreshRight></RefreshRight>
          </span>
        </div>
        <div class="nt-image-preview-container">
          <img
            class="nt-image-preview-img"
            :src="urlList[currIndex]"
            :style="{
              transform: transformStyleValue,
            }"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CloseIcon from './icon/Close.vue';
import ArrowLeft from './icon/ArrowLeft.vue';
import ArrowRight from './icon/ArrowRight.vue';
import ZoomIn from './icon/ZoomIn.vue';
import ZoomOut from './icon/ZoomOut.vue';
import RefreshLeft from './icon/RefreshLeft.vue';
import RefreshRight from './icon/RefreshRight.vue';
import Reduction from './icon/Reduction.vue';

const show = defineModel<boolean>('show', { required: true });

const props = withDefaults(
  defineProps<{
    /** 预览的图片列表 */
    urlList: string[];
    /** 初始预览图像索引，小于 url-list 的长度 */
    initialIndex?: number;
  }>(),
  {
    initialIndex: 0,
  },
);

const emits = defineEmits(['close']);

/** 当前预览的图片索引 */
const currIndex = ref(props.initialIndex);
/** 操作 */
const transform = ref({
  /** 缩放 */
  scale: 1,
  /** 旋转 */
  rotate: 0,
});

const transformStyleValue = computed(() => {
  return `scale3d(${transform.value.scale}, ${transform.value.scale}, 1) rotate3d(0, 0, 1, ${transform.value.rotate}deg)`;
});

/**
 * 图片切换
 * @param dir next - 下一张, prev - 上一张
 */
function toggleImage(dir: 'prev' | 'next') {
  if (dir === 'prev') {
    if (currIndex.value === 0) {
      currIndex.value = props.urlList.length - 1;
    } else {
      currIndex.value--;
    }
  } else {
    if (currIndex.value === props.urlList.length - 1) currIndex.value = 0;
    else currIndex.value++;
  }
}

/**
 * 缩放, in - 放大, out - 缩小
 * @param type
 */
function transformScale(type: 'out' | 'in') {
  if (type === 'in') {
    if (transform.value.scale >= 3) return;
    transform.value.scale += 0.5;
  } else {
    if (transform.value.scale <= 0.5) return;
    transform.value.scale -= 0.5;
  }
}

/**
 * 旋转
 * @param dir left - 逆时针, right - 顺时针
 */
function transformRotate(dir: 'left' | 'right') {
  if (dir === 'left') {
    transform.value.rotate -= 90;
  } else {
    transform.value.rotate += 90;
  }
}

function resetTransform() {
  transform.value = {
    scale: 1,
    rotate: 0,
  };
}

function handleClose() {
  show.value = false;
}
</script>
