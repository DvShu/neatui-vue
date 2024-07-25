<template>
  <div
    :class="{
      'nt-checkbox-group': true
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: (string | number)[]
  }>(),
  {
    modelValue: () => []
  }
)

// const checkList = defineModel({ default: () => [] as any[] })
const emits = defineEmits(['change', 'update:modelValue'])

function updateCheck(val: any) {
  const oldValues = props.modelValue
  let index = oldValues.indexOf(val)
  if (index === -1) {
    oldValues.push(val)
  } else {
    oldValues.splice(index, 1)
  }
  emits('update:modelValue', [...oldValues])
  emits('change', [...oldValues])
}

provide('nt-checkbox-group-check', {
  checkList: props.modelValue,
  updateCheck
})
</script>
