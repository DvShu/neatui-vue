<template>
  <div>Vue3 Composition Component <CloseIcon></CloseIcon></div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const CloseIcon = defineAsyncComponent(() => import('../icon/Close.vue'));
const ErrorIcon = defineAsyncComponent(() => import('../icon/Success.vue'));
</script>

<style></style>
