<template>
  <Switch v-model="isDark" class="nt-theme-switch">
    <template #action="slotProp">
      <MoonIcon v-if="slotProp.checked"></MoonIcon>
      <SunIcon v-else></SunIcon>
    </template>
  </Switch>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Switch from '../Switch.vue';
import MoonIcon from '../icon/Moon.vue';
import SunIcon from '../icon/Sun.vue';
import { getTheme, applyTheme } from 'ph-utils/theme';

const isDark = ref(getTheme() === 'dark');

watch(isDark, (val) => {
  applyTheme(val ? 'dark' : 'auto').then();
});
</script>
