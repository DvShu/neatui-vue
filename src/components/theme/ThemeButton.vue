<template>
  <Button class="nt-theme-btn" @click="toggleTheme">
    <SunIcon v-if="theme === 'auto'"></SunIcon>
    <MoonIcon v-else></MoonIcon>
  </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../Button.vue';
import MoonIcon from '../icon/Moon.vue';
import SunIcon from '../icon/Sun.vue';
import { getTheme, applyTheme } from 'ph-utils/theme';

const theme = ref(getTheme() === 'dark' ? 'dark' : 'auto');

const toggleTheme = async () => {
  const newTheme = theme.value === 'dark' ? 'auto' : 'dark';
  theme.value = newTheme;
  await applyTheme(newTheme);
};
</script>

<style lang="less"></style>
