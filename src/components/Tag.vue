<template>
  <Transition appear name="nt-scale">
    <div :class="['nt-tag', `nt-tag--${type}`]" :style="styleObj">
      <div class="nt-tag--content"><slot></slot></div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { computed, Transition } from 'vue';
import { adjust } from 'ph-utils/color';
import { isBlank } from 'ph-utils';
const props = withDefaults(
  defineProps<{
    type?: 'primary';
    color?: string;
  }>(),
  {
    type: 'primary',
  },
);

const styleObj = computed(() => {
  let obj: any = {};
  if (!isBlank(props.color)) {
    obj = {
      '--nt-tag-color': props.color,
      '--nt-tag-border-color': adjust(props.color, 3, true),
      '--nt-tag-bg': adjust(props.color, 5, true),
    };
  }
  return obj;
});
</script>
