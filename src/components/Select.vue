<script lang="ts">
import { useId, ref, defineComponent, h, withDirectives, onMounted } from 'vue';
import type { PropType, VNode } from 'vue';
import ArrowDown from './icon/ArrowDown.vue';
import Popover from './popover/Popover.vue';
import Clickoutside from '../directives/clickoutside';
import SelectIcon from './icon/Select.vue';

type SelectOption = {
  class?: string;
  render?: (
    option: SelectOption,
    isSelect: boolean,
    selectedValues?: any | any[],
  ) => VNode[] | VNode;
  label?: string;
  value?: any;
  [index: string]: any;
};

export default defineComponent({
  name: 'NtSelect',
  props: {
    /** 提示信息 */
    placeholder: {
      type: String,
      default: '请选择',
    },
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 选项 label 的字段名 */
    labelField: {
      type: String,
      default: 'label',
    },
    /** 选项 value 的字段名 */
    valueField: {
      type: String,
      default: 'value',
    },
    /** 配置选项内容 */
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
    /** 是否多选 */
    multiple: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Array] as PropType<any | any[]>,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs }) {
    const id = useId();
    const popoverComp = ref();
    const expand = ref(false);
    /** 选择的标签列表 */
    const selectedLabels = ref<string[]>([]);

    function handleOutside() {
      if (popoverComp.value != null) {
        popoverComp.value.hide();
        expand.value = false;
      }
    }

    function handleSelectClick() {
      if (props.disabled === false && popoverComp.value != null) {
        if (expand.value === true) {
          popoverComp.value.hide();
          expand.value = false;
        } else {
          expand.value = true;
          popoverComp.value.show();
        }
      }
    }

    onMounted(() => {
      const modelValue = props.modelValue;
      if (modelValue != null) {
        const tmpLabels = [];
        const option = props.options.find((option: SelectOption) => {
          const optionValue = option[props.valueField];
          return optionValue === modelValue || modelValue.includes(optionValue);
        });
        if (option != null) {
          tmpLabels.push(option[props.labelField]);
        }
        selectedLabels.value = tmpLabels;
        console.log(tmpLabels);
      }
    });

    function isOptionSelect(value: any) {
      let isSelect = false;
      let modelValue = props.modelValue;
      if (value != null && modelValue != null) {
        if (props.multiple === true) {
          isSelect = (modelValue as any[]).includes(value);
        } else {
          isSelect = value === modelValue;
        }
      }
      return isSelect;
    }

    function optionNodes() {
      return props.options.map((option: SelectOption) => {
        const isSelect = isOptionSelect(option[props.valueField]);
        return h(
          'li',
          {
            class: [
              'nt-select-option',
              option.class,
              isSelect ? 'nt-select-option--selected' : undefined,
            ],
          },
          [
            option.render == null
              ? h('span', option[props.labelField])
              : option.render(option, isSelect, props.modelValue),
            isSelect ? h(SelectIcon) : undefined,
          ],
        );
      });
    }

    return () => [
      withDirectives(
        h(
          'div',
          {
            class: 'nt-select',
            id: id,
            onClick: handleSelectClick,
            ...attrs,
          },
          [
            h(
              'div',
              h('span', { class: 'nt-select-placeholder' }, props.placeholder),
            ),
            h(ArrowDown, {
              class: [
                'nt-select--arrow',
                expand.value ? 'nt-expanded' : undefined,
              ],
            }),
          ],
        ),
        [[Clickoutside, handleOutside]],
      ),
      h(
        Popover,
        {
          ref: popoverComp,
          trigger: 'manual',
          reference: `#${id}`,
          width: 'trigger',
          placement: 'bottom',
          showArrow: false,
          offset: 2,
          class: 'nt-select-popover',
        },
        {
          default: () =>
            h(
              'div',
              { class: 'nt-select-list nt-scrollbar' },
              h('ul', optionNodes()),
            ),
        },
      ),
    ];
  },
});
</script>
