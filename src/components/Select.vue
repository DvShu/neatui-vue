<template>
  <div class="nt-select">
    <div>
      <span class="nt-select-placeholder">{{ placeholder }}</span>
    </div>
    <ArrowDown class="nt-select--arrow"></ArrowDown>
  </div>
</template>
<script setup lang="ts">
import ArrowDown from './icon/ArrowDown.vue';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: '请选择',
  },
);
</script>
