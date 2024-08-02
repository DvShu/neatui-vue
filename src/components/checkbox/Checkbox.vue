<template></template>
<script lang="ts">
import { inject, computed, defineComponent, h } from 'vue';
import type { ModelRef, PropType } from 'vue';

export default defineComponent({
  props: {
    /** 设置不确定状态，仅负责样式控制 */
    indeterminate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 显示的 label 文本 */
    label: String,
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    type: String as PropType<'button'>,
    checked: { type: Boolean, default: undefined },
    /** 原生 name 属性 */
    name: String,
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const { checkList, updateCheck } = inject<{
      checkList: null | ModelRef<(string | number)[], string>;
      updateCheck: null | ((value: any) => void);
    }>('nt-checkbox-group-check', {
      checkList: null,
      updateCheck: null,
    });

    const isChecked = computed(() => {
      if (checkList != null) {
        return checkList.value.includes(props.value as string);
      }
      if (props.value != null) {
        return props.modelValue === props.value;
      }
      if (props.checked != null) {
        return props.checked;
      }
      return props.modelValue as boolean;
    });

    function handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      if (updateCheck != null) {
        updateCheck(props.value);
      }
      const value = props.value == null ? checked : props.value;
      emit('update:modelValue', value);
      emit('change', value);
    }
    return () =>
      h(
        'label',
        {
          class: [
            'nt-checkbox',
            props.indeterminate ? 'nt-checkbox--indeterminate' : '',
            props.disabled ? 'nt-checkbox--disabled' : '',
            props.type === 'button' ? 'nt-checkbox--button' : '',
          ],
        },
        [
          h('input', {
            type: 'checkbox',
            class: 'nt-checkbox__input',
            name: props.name,
            checked: isChecked.value,
            onChange: handleChange,
            disabled: props.disabled,
            value: props.value,
          }),
          props.type !== 'button'
            ? h('span', { class: 'nt-checkbox__inner' })
            : null,
          slots.default != null || props.label != null
            ? h(
                'span',
                { class: 'nt-checkbox__label' },
                slots.default != null ? slots.default() : props.label,
              )
            : null,
        ],
      );
  },
});
</script>
