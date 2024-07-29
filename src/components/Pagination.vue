<template>
  <ul class="nt-pagination">
    <!-- 上一页切换按钮 -->
    <li class="nt-pagination-item">
      <Button title="上一页" :disabled="currentPage === 1">
        <ArrowLeft></ArrowLeft>
      </Button>
    </li>
    <!-- 首页按钮 -->
    <li class="nt-pagination-item">
      <a href="javascript:void" title="1">1</a>
    </li>
    <!-- 上一页更多按钮 -->
    <li class="nt-pagination-item">
      <a
        href="javascript:void"
        title="more"
        @mouseenter="handleMoreHover(1)"
        @mouseleave="handleMoreHover(0)"
      >
        <More v-if="moreFocus === 0"></More>
        <DArrowLeft v-else-if="moreFocus === 1"></DArrowLeft>
      </a>
    </li>
    <!-- 末尾页按钮 -->
    <li class="nt-pagination-item" v-if="totalPage > 1">
      <a href="javascript:void" :title="totalPage + ''">{{ totalPage }}</a>
    </li>
    <!-- 下一页切换按钮 -->
    <li class="nt-pagination-item">
      <Button title="下一页" :disabled="currentPage === totalPage">
        <ArrowRight></ArrowRight>
      </Button>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Button from './Button.vue';
import ArrowLeft from './icon/ArrowLeft.vue';
import ArrowRight from './icon/ArrowRight.vue';
import More from './icon/More.vue';
import DArrowLeft from './icon/DArrowLeft.vue';
import DArrowRight from './icon/DArrowRight.vue';

const moreFocus = ref(0);

function handleMoreHover(n: number) {
  moreFocus.value = n;
}

const props = withDefaults(
  defineProps<{
    /** 数据总数 */
    total?: number;
    /** 总页数 */
    pageCount?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 页码 */
    page?: number;
    /** 默认当前页码 */
    defaultCurrentPage?: number;
  }>(),
  {
    pageSize: 10,
    defaultCurrentPage: 1,
  },
);

const emits = defineEmits(['update:page']);

const totalPage = computed(() => {
  let pageCount = props.pageCount;
  if (pageCount == null && props.total != null) {
    pageCount = Math.ceil(props.total / props.pageSize);
  }
  if (pageCount == null || pageCount <= 0) {
    pageCount = 1;
  }
  return pageCount;
});
const currentPage = ref(props.page || props.defaultCurrentPage);

if (props.page == null) {
  emits('update:page', currentPage.value);
}

watch(
  () => props.page,
  (page) => {
    currentPage.value = page || props.defaultCurrentPage;
  },
);
</script>
