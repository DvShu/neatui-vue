<template>
  <div
    class="nt-collapse-item"
    :class="{
      'nt-collapse-item--active': collapseCtx.actives.value.includes(props.name)
    }"
  >
    <div :class="['nt-collapse-item__header', headerClass]" :style="headerStyleObj" @click="toggle">
      <nt-arrow-right-icon
        class="nt-collapse-arrow-icon"
        v-if="collapseCtx.arrowPlacement === 'left'"
        :class="['nt-collapse-arrow__' + collapseCtx.arrowPlacement]"
      />
      <slot name="title">
        <span class="nt-collapse-item__title">{{ title }}</span>
      </slot>
      <nt-arrow-right-icon
        class="nt-collapse-arrow-icon"
        v-if="collapseCtx.arrowPlacement === 'right'"
        :class="['nt-collapse-arrow__' + collapseCtx.arrowPlacement]"
      />
    </div>
    <Transition
      name="collapse"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div class="nt-collapse-item--content" v-if="collapseCtx.actives.value.includes(props.name)">
        <div class="nt-collapse-content--box">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import { collapseContext } from './constant'
import { queryHideNodeSize } from 'ph-utils/dom'

function onBeforeEnter(el: Element) {
  ;(el as HTMLDivElement).style.height = '0px'
}

function onEnter(el: Element) {
  let height = queryHideNodeSize(el.innerHTML).height
  ;(el as HTMLDivElement).style.height = `${height}px`
}

function onAfterEnter(el: Element) {
  ;(el as HTMLDivElement).style.removeProperty('height')
}

function onBeforeLeave(el: Element) {
  const height = el.getBoundingClientRect().height
  ;(el as HTMLDivElement).style.height = `${height}px`
}

function onLeave(el: Element) {
  ;(el as HTMLDivElement).style.height = '0px'
}

const props = withDefaults(
  defineProps<{
    /** 面板标题 */
    title?: string
    /** 唯一标志符 */
    name: string | number
    /** 是否禁用 */
    disabled?: boolean
    headerClass?: string
  }>(),
  {
    disabled: false,
    headerClass: ''
  }
)

const collapseCtx = inject(collapseContext)
if (collapseCtx == null) {
  throw new Error('CollapseItem must be used within Collapse')
}

const headerStyleObj = computed(() => {
  const res: { [index: string]: string } = {}
  if (collapseCtx.headerJustify != null) {
    res['justify-content'] = collapseCtx.headerJustify
  }
  return res
})

function toggle() {
  if (collapseCtx != null) {
    collapseCtx.toggle(props.name)
  }
}
</script>
