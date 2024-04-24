<template>
  <div
    class="nt-shadow"
    :class="{ 'nt-shadow_transparent': transparent }"
    :style="{ zIndex: 100 + id }"
    nt-shadow
    @click="clickHandler"
  >
    <div class="nt-shadow-main" :class="shadowClass" nt-shadow>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
let index = 0;
</script>

<script setup lang="ts">
let id = index;
index += 1;
const emits = defineEmits(['shadowClose']);

withDefaults(
  defineProps<{
    /** 传递给 shadow 主体的样式，而不是顶层样式 */
    shadowClass?: string;
    /** shadow 的背景是否是透明 */
    transparent?: boolean;
  }>(),
  {
    shadowClass: '',
    transparent: false,
  },
);

function clickHandler(e: Event) {
  let $target = e.target as HTMLElement;
  if ($target.hasAttribute('nt-shadow')) {
    // 点击的是遮罩层
    emits('shadowClose', e);
  }
}
</script>
