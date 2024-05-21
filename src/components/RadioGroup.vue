<template>
  <div class="nt-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const checkedValue = defineModel<any>();
const emits = defineEmits(['change']);

function updateCheck(val: any) {
  checkedValue.value = val;
  emits('change', checkedValue.value);
}

provide('nt-radio-group-check', {
  checkedValue,
  updateCheck,
});
</script>
