<template>
  <div class="doc-wrapper">
    <div ref="scollEl" class="nt-scrollbar doc-main">
      <slot></slot>
    </div>
    <ul v-if="hasAside && asides.length > 0">
      <li v-for="item in asides" :key="item.text">
        <a
          :class="{
            'aside-item--active': currAside === item.text,
            'sub-aside-link': true,
          }"
          :href="'#' + item.text"
          >{{ item.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'ph-utils/web';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

const props = withDefaults(
  defineProps<{
    /** 是否需要右边侧边栏 */
    hasAside?: boolean;
  }>(),
  {
    hasAside: true,
  },
);

const scollEl = ref<HTMLDivElement>();

interface HElOffsetIntf {
  text: string;
  offset: [number, number];
}

/** 右边子菜单的侧边栏列表 */
const asides = ref<HElOffsetIntf[]>([]);
/** 当前侧边栏 */
const currAside = ref('');

function updateElEndOffset(
  els: HElOffsetIntf[],
  index: number,
  offset: number,
) {
  const oldOffset = els[index].offset;
  els[index].offset = [oldOffset[0], offset];
}

const handleScroll = debounce(() => {
  checkAside();
}, 200);

function checkAside() {
  let offset = 0;
  if (scollEl.value != null) {
    offset = scollEl.value.scrollTop;
  }

  let text = '';
  let index = -1;
  for (let i = 0, len = asides.value.length; i < len; i++) {
    const aside = asides.value[i];
    if (offset >= aside.offset[0] && offset < aside.offset[1]) {
      text = aside.text;
      index = i;
    }
  }
  if (index <= 0) {
    text = '';
  }
  currAside.value = text;
}

onMounted(() => {
  if (props.hasAside) {
    nextTick(() => {
      if (scollEl.value != null) {
        const startTop = scollEl.value.offsetTop;
        const scrollHeight = scollEl.value.scrollHeight;
        const $h = scollEl.value.querySelectorAll(
          'h2,h3',
        ) as NodeListOf<HTMLDivElement>;
        const titleEls: HElOffsetIntf[] = [];
        let lastIndex = -1;
        for (const $hitem of $h) {
          const text = $hitem.textContent;
          if (text != null) {
            $hitem.id = text;
            const itemTop = $hitem.offsetTop - startTop;
            titleEls.push({
              text,
              offset: [itemTop, -1],
            });
            if (lastIndex !== -1) {
              updateElEndOffset(titleEls, lastIndex, itemTop);
            }
            lastIndex++;
          }
        }
        if (lastIndex !== -1) {
          updateElEndOffset(titleEls, lastIndex, scrollHeight);
        }
        titleEls.sort((a, b) => a.offset[0] - b.offset[0]);
        asides.value = titleEls;
        checkAside();
        if (asides.value.length > 0) {
          scollEl.value.addEventListener('scroll', handleScroll);
        }
      }
    });
  }
});

onUnmounted(() => {
  if (scollEl.value != null) {
    scollEl.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style>
.sub-aside-link {
  font-size: 13px;
  color: #333;
  transition: color 0.3s;
  display: inline-block;
  width: 100%;
  padding: 3px 5px;
  &:hover {
    color: var(--nt-primary-color);
  }
}
</style>
