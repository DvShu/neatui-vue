<template>
  <select v-model="value" class="nt-input">
    <slot>
      <option v-for="n in options" :key="n.value" :value="n.value">
        {{ n.label }}
      </option>
    </slot>
  </select>
</template>
<script setup lang="ts">
const value = defineModel<string | number>();

defineProps<{
  options?: { label: string; value: string | number }[];
}>();
</script>
