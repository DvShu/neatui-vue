<template>
  <Button class="nt-theme-btn">
    <SunIcon></SunIcon>
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../Button.vue';
import MoonIcon from '../icon/Moon.vue';
import SunIcon from '../icon/Sun.vue';

const theme = ref('light');
</script>

<style lang="less"></style>
