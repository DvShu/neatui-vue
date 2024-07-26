<template>
  <input
    :type="type === 'datetime' ? 'datetime-local' : type"
    :class="['nt-input', `nt-${type}-picker`]"
    :value="modelValue"
    :min="min"
    :max="max"
    @change="change"
  />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { isBlank } from 'ph-utils';
import { format } from 'ph-utils/date';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    type?: 'date' | 'time' | 'datetime';
    nullDefault?: string;
    min?: string;
    max?: string;
  }>(),
  {
    type: 'date',
    modelValue: '',
  },
);

function defaultValue(defaultValue: string, type: string) {
  // 要更新默认值
  if (defaultValue === 'current') {
    let pattern = 'yyyy-mm-dd';
    if (type === 'time') {
      pattern = 'HH:MM';
    } else if (type === 'datetime') {
      pattern = 'yyyy-mm-dd HH:MM';
    }
    return format(new Date(), pattern);
  }
  return defaultValue;
}

function change(e: Event) {
  const $target = e.target as HTMLInputElement;
  let value = $target.value;
  if (isBlank(value)) {
    if (!isBlank(props.nullDefault)) {
      value = defaultValue(props.nullDefault as string, props.type);
      $target.value = value;
    }
  }
  value = value.replace('T', ' ');
  emits('update:modelValue', value);
}

const emits = defineEmits(['update:modelValue']);

onMounted(() => {
  if (isBlank(props.modelValue) && !isBlank(props.nullDefault)) {
    emits(
      'update:modelValue',
      defaultValue(props.nullDefault as string, props.type),
    );
  }
});
</script>
