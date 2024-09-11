<template>
  <div class="nt-virtual-list" ref="$list" @scroll.passive="handleScroll">
    <div :style="{ height: `${totalSize}px` }">
      <div :style="{ transform: `translate3d(0px, ${startOffset}px, 0px)` }">
        <slot name="render" :data="visibleData">
          <!-- 列表项 -->
          <div
            v-for="(item, index) in visibleData"
            :style="{ height: props.itemSize + 'px' }"
            :key="keyField != null ? (item as any)[keyField] : index"
            :class="['nt-virtual-item', itemClass]"
          >
            <slot :item="item"></slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" generic="T">
import { onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    /** 需要展示的数据 */
    items: T[];
    /** 列表项的高度，用于计算滚动大小和位置 */
    itemSize: number;
    itemClass?: string;
    /** 选项 key 的字段名, 用于 v-for 的 key */
    keyField?: string;
    /** 缓冲区数量，列表会在上下多渲染额外的项 */
    buffer?: number;
  }>(),
  {
    itemClass: '',
    buffer: 2,
  },
);

const $list = ref<HTMLDivElement>();

/** 实际显示的数据列表 */
const visibleData = ref<T[]>([]);
/** 容器总高度 */
const totalSize = ref(0);
/** 滑动便宜 */
const startOffset = ref(0);

/** 可视区域能够展示的最大元素个数 */
let numVisible = 0;

/** 滑动延迟处理，滑动完成后，延迟处理更新数据，避免频繁触发数据更新 */
let _t = -1;

function updateVisibleItems() {
  if ($list.value != null) {
    // 当前滚动位置
    const scrollTop = $list.value.scrollTop;
    /** 可视区域开始索引 */
    let startIndex = Math.floor(scrollTop / props.itemSize);
    /** 上缓冲区起始索引 */
    let topStartIndex = Math.max(0, startIndex - props.buffer);
    /** 下缓冲区结束索引 */
    const endIndex = Math.min(
      props.items.length,
      startIndex + numVisible + props.buffer,
    );
    // 偏移量, 当滑动位置是某一项的一部分的时候,计算已经滚动的那一部分距离
    let offset = scrollTop - (scrollTop % props.itemSize);
    // 生成可视区域数据
    visibleData.value = props.items.slice(topStartIndex, endIndex) as any[];
    /** 当前显示index-缓冲区的index就是缓冲区数量 */
    startOffset.value = offset - (startIndex - topStartIndex) * props.itemSize;
  }
}

function handleScroll() {
  cancelAnimationFrame(_t);
  _t = requestAnimationFrame(() => {
    updateVisibleItems(); // 重新渲染数据
  });
}

onMounted(() => {
  totalSize.value = props.itemSize * props.items.length;
  if ($list.value != null) {
    let rect = $list.value.getBoundingClientRect();
    numVisible = Math.ceil(rect.height / props.itemSize);
    updateVisibleItems(); // 初始化渲染数据
  }
});
</script>
