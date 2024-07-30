<template>
  <ul
    :class="['nt-pagination', `nt-pagination-${align}`]"
    v-if="!hideOnSinglePage || totalPage > 1"
  >
    <!-- 上一页切换按钮 -->
    <li class="nt-pagination-item">
      <Button
        title="上一页"
        :disabled="currentPage === 1"
        @click="handleTo(currentPage - 1)"
      >
        <ArrowLeft></ArrowLeft>
      </Button>
    </li>
    <template v-if="simple">
      <li class="nt-pagination-item nt-pagination-simple-layout">
        <input
          class="nt-input nt-pagination-simple-input"
          :value="currentPage"
          type="text"
          inputmode="numeric"
          @input="handlePageInput"
          @keyup.enter="handlePageSure"
          @blur="handlePageSure"
        />
        <span class="nt-pagination-simple-divide">/</span>
        <span>{{ totalPage }}</span>
      </li>
    </template>
    <template v-else>
      <!-- 首页按钮 -->
      <li :class="['nt-pagination-item', currentPage === 1 ? 'is-active' : '']">
        <a href="javascript:void" title="1" @click="handleTo(1)">1</a>
      </li>
      <!-- 向前5页 -->
      <li class="nt-pagination-item" v-if="currentPage > 4">
        <a
          href="javascript:void"
          @mouseenter="handleMoreHover(1)"
          @mouseleave="handleMoreHover(0)"
          title="向前5页"
          @click="handleTo(currentPage - 5)"
        >
          <More v-if="moreFocus !== 1"></More>
          <DArrowLeft v-else-if="moreFocus === 1"></DArrowLeft>
        </a>
      </li>
      <!-- 中间部分，显示包括当前页在内的最多5页 -->
      <li
        v-for="n in centerRange"
        :key="n"
        :class="['nt-pagination-item', currentPage === n ? 'is-active' : '']"
      >
        <a href="javascript:void" :title="String(n)" @click="handleTo(n)">{{
          n
        }}</a>
      </li>
      <!-- 向后5页 -->
      <li class="nt-pagination-item" v-if="currentPage < totalPage - 3">
        <a
          href="javascript:void"
          @mouseenter="handleMoreHover(2)"
          @mouseleave="handleMoreHover(0)"
          title="向前5页"
          @click="handleTo(currentPage + 5)"
        >
          <More v-if="moreFocus !== 2"></More>
          <DArrowRight v-else-if="moreFocus === 2"></DArrowRight>
        </a>
      </li>
      <!-- 末尾页按钮 -->
      <li
        v-if="totalPage > 1"
        @click="handleTo(totalPage)"
        :class="[
          'nt-pagination-item',
          currentPage === totalPage ? 'is-active' : '',
        ]"
      >
        <a href="javascript:void" :title="totalPage + ''">{{ totalPage }}</a>
      </li>
    </template>

    <!-- 下一页切换按钮 -->
    <li class="nt-pagination-item">
      <Button
        title="下一页"
        :disabled="currentPage === totalPage"
        @click="handleTo(currentPage + 1)"
      >
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
    /** 对齐方式 */
    align?: 'start' | 'center' | 'end';
    /** 只有一页时是否隐藏分页器 */
    hideOnSinglePage?: boolean;
    /** 是否为简单分页 */
    simple?: boolean;
  }>(),
  {
    pageSize: 10,
    defaultCurrentPage: 1,
    align: 'start',
    hideOnSinglePage: false,
    simple: false,
  },
);

const emits = defineEmits(['update:page', 'change']);

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

const centerRange = computed(() => {
  let start = currentPage.value - 2;
  const end = currentPage.value + 5;
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i > 1 && i < totalPage.value) {
      range.push(i);
    }
    if (range.length === 5) break;
  }
  while (range.length < 5 && start > 1) {
    const n = start--;
    if (!range.includes(n)) {
      range.unshift(n);
    }
  }
  return range;
});

if (props.page == null) {
  emits('update:page', currentPage.value);
}

watch(
  () => props.page,
  (page) => {
    const val = page || props.defaultCurrentPage;
    if (val !== currentPage.value) {
      currentPage.value = val;
    }
  },
);

function handleMoreHover(n: number) {
  moreFocus.value = n;
}

function handleTo(p: number) {
  if (p < 1) {
    p = 1;
  } else if (p > totalPage.value) {
    p = totalPage.value;
  }
  if (p !== currentPage.value) {
    currentPage.value = p;
    emits('update:page', p);
    emits('change', p);
  }
}

function handlePageInput(e: Event) {
  const $target = e.target as HTMLInputElement;
  const value = $target.value;
  let val: string | number = parseInt(value, 10);
  if (Number.isNaN(val)) {
    val = '';
  } else {
    val = Math.abs(val);
    if (val < 1) {
      val = 1;
    } else if (val > totalPage.value) {
      val = totalPage.value;
    }
  }
  val = String(val);
  if (val !== value) {
    $target.value = val;
  }
}

function handlePageSure(e: Event) {
  const $target = e.target as HTMLInputElement;
  const value = $target.value;
  const pageValue = parseInt(value, 10);
  if (!Number.isNaN(pageValue)) {
    handleTo(pageValue);
  }
}
</script>
