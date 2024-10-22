<template>
  <input
    :value="modelValue"
    :type="htmlType"
    :class="{
      'nt-input': true,
      'is-autosize': autosize,
    }"
    :placeholder="placeholder"
    @input="handleInput"
    ref="el"
    :disabled="isDisabled"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useDisabled from '../../hooks/useFormDisabled.js';

const el = ref<HTMLInputElement>();

const props = withDefaults(
  defineProps<{
    htmlType?: string;
    placeholder?: string;
    autosize?: boolean;
    parser?: (value: string) => string;
    modelValue?: string | number;
    disabled?: boolean;
    /** number, integer */
    allowInput?: string;
  }>(),
  {
    htmlType: 'text',
    placeholder: '',
    autosize: false,
    disabled: undefined,
    allowInput: undefined,
  },
);

const emits = defineEmits(['update:modelValue', 'input']);

const isDisabled = useDisabled(() => props.disabled);

function focus() {
  if (el.value != null) {
    el.value.focus();
  }
}

function numberInputParse(
  value: string,
  config: { integer: boolean; negative: boolean; precition: number },
) {
  let val = value;
  let negative = config.negative ? '-?' : '';
  if (config.integer) {
    const match = val.match(new RegExp(`^(${negative}\\d*)`));
    if (match != null) {
      return match[1];
    }
    return val.substring(0, val.length - 1);
  }
  const match = val.match(
    new RegExp(
      `^(${negative}\\d+\\.\\d{0,${config.precition}})|(${negative}\\d*)`,
    ),
  );
  if (match != null) {
    val = match[1] || match[2];
  } else {
    val = '';
  }
  return match != null ? match[1] || match[2] : '';
}

function handleInput(e: Event) {
  const $target = e.target as HTMLInputElement;
  let value = $target.value;
  emits('input', e);
  if (props.allowInput != null) {
    let dotIndex = props.allowInput.indexOf('.');
    let precition =
      dotIndex === -1
        ? dotIndex
        : parseInt(props.allowInput.substring(dotIndex + 1));
    value = numberInputParse(value, {
      integer: props.allowInput.includes('integer'),
      negative: props.allowInput.startsWith('-'),
      precition: precition,
    });
    $target.value = String(value);
  }
  if (props.parser != null) {
    value = props.parser(value) as string;
    $target.value = String(value);
  }
  if (typeof props.modelValue === 'number') {
    value = Number(value) as any;
  }
  emits('update:modelValue', value);
}

defineExpose({
  focus,
});
</script>
