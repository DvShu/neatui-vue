<template>
  <div :class="['nt-polygon', shape ? `nt-polygon-${shape}` : '']"></div>
</template>

<script setup lang="ts">
defineProps<{
  /** 形状 */
  shape?:
    | 'triangle-top'
    | 'triangle-bottom'
    | 'triangle-left'
    | 'triangle-right'
    | 'triangle-top-right'
    | 'triangle-top-left'
    | 'triangle-bottom-right'
    | 'triangle-bottom-left';
}>();
</script>
