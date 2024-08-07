<script lang="ts">
import { inject, Ref, ref, computed, defineComponent, PropType, h } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Boolean, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
    type: {
      type: String as PropType<'button'>,
      default: undefined,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    checked: { type: Boolean, default: undefined },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const radio = ref<HTMLInputElement>();

    const { checkedValue, updateCheck } = inject<{
      checkedValue: Ref<any> | null;
      updateCheck: null | ((value: any) => void);
    }>('nt-radio-group-check', {
      checkedValue: null,
      updateCheck: null,
    });

    const isChecked = computed(() => {
      if (checkedValue != null) {
        return checkedValue.value === props.value;
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

    return () => {
      return h(
        'label',
        {
          class: {
            'nt-radio': true,
            'nt-radio--disabled': props.disabled,
            'nt-radio--button': props.type === 'button',
            'is-checked': isChecked.value,
          },
        },
        [
          h('input', {
            ref: radio,
            type: 'radio',
            name: props.name,
            class: 'nt-radio__input',
            value: props.value,
            disabled: props.disabled,
            checked: isChecked.value,
            onChange: handleChange,
          }),
          props.type !== 'button'
            ? h('span', { class: 'nt-radio__inner' })
            : null,
          slots.default != null || props.label != null
            ? h('span', { class: 'nt-radio__label' }, [
                slots.default != null ? slots.default() : props.label,
              ])
            : null,
        ],
      );
    };
  },
});
</script>
