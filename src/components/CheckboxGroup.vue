<template>
  <div
    :class="{
      'nt-checkbox-group': true,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const checkList = defineModel({ default: [] as any[] });
const emits = defineEmits(['change']);

function updateCheck(val: any) {
  let index = checkList.value.indexOf(val);
  if (index === -1) {
    checkList.value.push(val);
  } else {
    checkList.value.splice(index, 1);
  }
  emits('change', [...checkList.value]);
}

provide('nt-checkbox-group-check', {
  checkList,
  updateCheck,
});
</script>
