<template>
  <div
    :class="{
      'nt-md-input': true,
      'nt-focused': focused,
      'nt-has-value': hasValue,
      'nt-md-input-outline': outline,
    }"
  >
    <input
      class="nt-md-input__inner"
      :id="elId"
      ref="el"
      :type="htmlType"
      :inputmode="inputmode"
      :name="name"
      :placeholder="!focused ? '' : placeholder"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      v-model="modelValue"
    />
    <label v-if="label != null" class="nt-md-input__label" :for="elId">
      <span class="nt-md-label-text">{{ label }}</span>
    </label>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { random, isBlank } from 'ph-utils';

const el = ref<HTMLInputElement>();

const modelValue = defineModel<string | number>();
const emits = defineEmits(['focus', 'blur']);

const focused = ref(false);

const props = withDefaults(
  defineProps<{
    id?: string;
    /** 是否显示四周边框 */
    outline?: boolean;
    label?: string;
    placeholder?: string;
    htmlType?: 'text' | 'number' | 'password' | 'tel';
    name?: string;
    inputmode?: 'text' | 'numeric' | 'decimal' | 'tel';
  }>(),
  {
    outline: false,
    htmlType: 'text',
  },
);

const elId = ref(
  props.id || `nt-md-input-${random({ length: 8, hasLetter: true })}`,
);

function focus() {
  if (el.value != null) {
    el.value.focus();
  }
}

function handleInputFocus() {
  focused.value = true;
  emits('focus');
}

function handleInputBlur() {
  focused.value = false;
  emits('blur');
}

const hasValue = computed(() => {
  return isBlank(modelValue.value as string) ? false : true;
});

defineExpose({
  focus,
});
</script>
