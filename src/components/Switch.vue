<template>
  <div
    :class="{
      'nt-switch': true,
      'nt-switch--disabled': disabled,
      'nt-switch--checked': checked,
    }"
    @click="handleChange"
  >
    <span class="nt-switch-action"></span>
    <span v-if="checked || uncheckedText" class="nt-switch-text">
      {{ checked ? checkedText || '' : uncheckedText || '' }}
    </span>
  </div>
</template>
<script setup lang="ts">
const checked = defineModel({ default: false });

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
}
</script>
