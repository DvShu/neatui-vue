<template>
  <div
    :class="{
      'nt-switch': true,
      'nt-switch--disabled': disabled,
      'nt-switch--checked': checked,
    }"
    @click="handleChange"
  >
    <div class="nt-switch-action">
      <slot name="action" :checked="checked"></slot>
    </div>
    <span v-if="checked || uncheckedText" class="nt-switch-text">
      {{ checked ? checkedText || '' : uncheckedText || '' }}
    </span>
  </div>
</template>
<script setup lang="ts">
const checked = defineModel({ default: false });

const emits = defineEmits(['change']);

withDefaults(
  defineProps<{
    disabled?: boolean;
    checkedText?: string;
    uncheckedText?: string;
  }>(),
  {
    disabled: false,
  },
);

function handleChange() {
  checked.value = !checked.value;
  emits('change', checked.value);
}
</script>
