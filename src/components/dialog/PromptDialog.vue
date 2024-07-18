<template>
  <Dialog
    :model-value="show"
    :title="title"
    :to="to"
    :before-close="handleClose"
    main-class="nt-dialog-box-main"
    container-class="nt-prompt-dialog-container"
  >
    <p class="nt-prompt-tip">{{ tip }}</p>
    <Input ref="$input" class="a-input" v-model="value" />
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import Dialog from './Dialog.vue';
import Input from '../Input.vue';

const value = ref('');

const $input = ref();

const props = withDefaults(
  defineProps<{
    show?: boolean;
    title?: string;
    tip: string;
    to: HTMLElement;
  }>(),
  {
    title: '提示',
    show: false,
  },
);

const emits = defineEmits(['close']);

const handleClose = (action: 'cancel' | 'ok' | 'close') => {
  emits('close', action === 'ok' ? value.value : null);
};

onMounted(() => {
  nextTick(() => {
    $input.value.focus();
  });
});
</script>

<style lang="less"></style>
