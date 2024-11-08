<template>
  <Transition appear name="nt-scale">
    <div :class="['nt-tag', `nt-tag--${type}`]" :style="styleObj">
      <div class="nt-tag--content"><slot></slot></div>
      <i v-if="closable" class="nt-tag--close" @click="handleClose">
        <Close></Close>
      </i>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { adjust } from 'ph-utils/color';
import { isBlank } from 'ph-utils';
import Close from './icon/Close.vue';

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'error' | 'success';
    color?: string;
    /** 是否可关闭 */
    closable?: boolean;
  }>(),
  {
    type: 'primary',
    closable: false,
  },
);

const emits = defineEmits(['close']);

function handleClose() {
  emits('close');
}

const styleObj = computed(() => {
  let obj: any = {};
  if (!isBlank(props.color)) {
    obj = {
      '--nt-tag-color': props.color,
      '--nt-tag-border-color': props.color,
      '--nt-tag-bg': adjust(props.color, 5, true),
    };
  }
  return obj;
});
</script>
