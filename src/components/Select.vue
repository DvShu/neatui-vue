<script lang="ts">
import { useId, ref, defineComponent, h, withDirectives, watch } from 'vue';
import type { PropType, VNode } from 'vue';
import ArrowDown from './icon/ArrowDown.vue';
import Popover from './popover/Popover.vue';
import Clickoutside from '../directives/clickoutside';
import SelectIcon from './icon/Select.vue';
import Tag from './Tag.vue';

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
  setup(props, { attrs, emit }) {
    const id = useId();
    const popoverComp = ref();
    const expand = ref(false);
    /** 选择的标签列表 */
    const selectedLabels = ref<string[]>([]);

    function handleOutside(e: Event) {
      let $target = e.target as HTMLElement;
      let needClose = true;
      if (props.multiple) {
        // 多选且点击的是下拉框则不关闭下拉框
        do {
          if ($target.classList.contains('nt-select-popover')) {
            needClose = false;
            break;
          }
          if ($target.tagName === 'BODY') {
            break;
          }
          $target = $target.parentElement as HTMLElement;
        } while ($target != null);
      }
      if (needClose) {
        if (popoverComp.value != null) {
          popoverComp.value.hide();
          expand.value = false;
        }
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

    function updateSelectedLabels(v?: any | any[]) {
      if (v != null) {
        let tmpLabels = [];
        const option = props.options.filter((option: SelectOption) => {
          const optionValue = option[props.valueField];
          return (
            optionValue === v || (Array.isArray(v) && v.includes(optionValue))
          );
        });
        if (option != null) {
          tmpLabels = option.map((option: SelectOption) => {
            return option[props.labelField];
          });
        }
        selectedLabels.value = tmpLabels;
      }
    }

    updateSelectedLabels(props.modelValue);

    watch(
      () => props.modelValue,
      (v) => {
        updateSelectedLabels(v);
      },
    );

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

    function handleOptionClick(e: Event, option: SelectOption) {
      e.stopPropagation();
      const label = option[props.labelField];
      const value = option[props.valueField];
      let oldValue = props.modelValue;
      let oldLabels = [...selectedLabels.value];
      if (props.multiple === true) {
        if (oldValue == null) {
          oldValue = [value];
          oldLabels = [label];
        } else {
          if (Array.isArray(oldValue)) {
            oldValue = [...oldValue];
            let i = oldValue.indexOf(value);
            if (i === -1) {
              oldValue.push(value);
              oldLabels.push('label');
            } else {
              oldValue.splice(i, 1);
              oldLabels.splice(i, 1);
            }
          } else {
            if (oldValue !== value) {
              oldValue = [oldValue, value];
              oldLabels.push(label);
            }
          }
        }
      } else {
        oldValue = value;
        oldLabels = [label];
      }
      // selectedLabels.value = oldLabels;
      emit('update:modelValue', oldValue);
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
            onClick: (e: Event) => handleOptionClick(e, option),
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

    function renderSelectedLabels() {
      if (selectedLabels.value.length === 0) {
        return h('span', { class: 'nt-select-placeholder' }, props.placeholder);
      }
      if (!props.multiple) {
        return h('span', selectedLabels.value[0]);
      }
      return selectedLabels.value.map((label) => {
        return h(Tag, null, { default: () => label });
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
              { class: 'nt-select-inner' },
              h('div', { class: 'nt-select-main' }, renderSelectedLabels()),
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
