<template>
  <div class="nt-virtual-list" ref="$list" @scroll="handleListScroll">
    <!-- 占位元素, 用于撑开滚动条，达到滚动效果 -->
    <div class="nt-virtual-placeholder" ref="$placeholder"></div>
    <!-- 内容元素, 用于显示列表项 -->
    <div class="nt-virtual-content" ref="$itemContent">
      <!-- 列表项 -->
      <div
        v-for="(item, index) in visibleData"
        :style="{ height: props.itemSize + 'px' }"
        :key="keyField != null ? (item as any)[keyField] : index"
        :class="['nt-virtual-item', itemClass]"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" generic="T">
import { onMounted, ref } from 'vue';
import { debounce } from 'ph-utils/web';

const props = withDefaults(
  defineProps<{
    /** 需要展示的数据 */
    items: T[];
    /** 列表项的高度，用于计算滚动大小和位置 */
    itemSize: number;
    itemClass?: string;
    /** 选项 key 的字段名, 用于 v-for 的 key */
    keyField?: string;
  }>(),
  {
    itemClass: '',
  },
);

/** 可视区域内能显示的数据总数 */
let visibleCount = 0;
/** 是否正在处理数据 */
let loading = false;
const $list = ref<HTMLDivElement>();
const $itemContent = ref<HTMLDivElement>();
const $placeholder = ref<HTMLDivElement>();
/** 实际显示的数据列表 */
const visibleData = ref<T[]>([]);

function renderData() {
  if ($list.value != null) {
    // 计算可视区域数据的开始索引
    const startIndex = Math.floor($list.value.scrollTop / props.itemSize);
    if ($itemContent.value != null) {
      // 开始项距离容器顶部的距离, 保证在滚动时数据一直在可视区域内
      const top = `${startIndex * props.itemSize}px`;
      $itemContent.value.style.top = top;
    }
    // 生成可视区域数据
    visibleData.value = props.items.slice(
      startIndex,
      startIndex + visibleCount,
    ) as any[];
  }
}

function handleListScroll() {
  debounce(() => {
    if (loading) return;
    loading = true;
    renderData(); // 重新渲染数据
    loading = false;
  }, 150)();
}

onMounted(() => {
  if ($list.value != null) {
    visibleCount = Math.ceil($list.value.clientHeight / props.itemSize);

    if ($placeholder.value != null) {
      const height = props.itemSize * props.items.length;
      $placeholder.value.style.height = `${height}px`;
    }

    renderData(); // 初始化渲染数据
  }
});
</script>
