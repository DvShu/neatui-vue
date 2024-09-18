<template>
  <input v-model="value" type="color" class="nt-input nt-color-picker" />
</template>
<script setup lang="ts">
const value = defineModel<string>();
</script>
