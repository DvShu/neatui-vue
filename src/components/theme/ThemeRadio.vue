<template>
  <RadioGroup v-model="theme">
    <Radio label="跟随系统" value="auto" type="button" />
    <Radio label="浅色主题" value="light" type="button" />
    <Radio label="深色主题" value="dark" type="button" />
  </RadioGroup>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Radio from '../radio/Radio.vue';
import RadioGroup from '../radio/RadioGroup.vue';
import { applyTheme, getTheme } from 'ph-utils/theme';

const theme = ref(getTheme());

watch(theme, (val) => {
  applyTheme(val as 'auto').then();
});
</script>

<style lang="less"></style>
