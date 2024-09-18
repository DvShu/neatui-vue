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

const checkList = defineModel({ default: () => [] as any[] });
const emits = defineEmits(['change', 'update:modelValue']);

function updateCheck(val: any) {
  const oldValues = checkList.value;
  let index = oldValues.indexOf(val);
  if (index === -1) {
    oldValues.push(val);
  } else {
    oldValues.splice(index, 1);
  }
  checkList.value = [...oldValues];
  emits('change', [...oldValues]);
}

provide('nt-checkbox-group-check', {
  checkList: checkList,
  updateCheck,
});
</script>
