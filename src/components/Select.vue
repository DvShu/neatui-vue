<script lang="ts">
import {
  useId,
  ref,
  defineComponent,
  h,
  withDirectives,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
} from 'vue';
import type { PropType, VNode } from 'vue';
import ArrowDown from './icon/ArrowDown.vue';
import Popover from './popover/Popover.vue';
import Clickoutside from '../directives/clickoutside';
import SelectIcon from './icon/Select.vue';
import MaskClose from './icon/MaskClose.vue';
import Tag from './Tag.vue';
import { elem } from 'ph-utils/dom';

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
    /** 多选时是否将选中值按文字的形式展示 */
    collapseTags: {
      type: Boolean,
      default: false,
    },
    /** 是否可清空 */
    clearable: {
      type: Boolean,
      default: false,
    },
    /** 是否启用过滤 */
    filterable: {
      type: Boolean,
      default: false,
    },
    /** 自定义过滤函数 */
    filter: {
      type: Function as PropType<
        (match: string, option: SelectOption) => boolean
      >,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const id = useId();
    const popoverComp = ref();
    const expand = ref(false);
    const showClear = ref(false);
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
          unvislbleClear();
        }
      }
    }

    function handleSelectClick() {
      if (props.disabled === false && popoverComp.value != null) {
        if (expand.value === true) {
          popoverComp.value.hide();
          expand.value = false;
          unvislbleClear();
        } else {
          expand.value = true;
          popoverComp.value.show();
        }
      }
    }

    function updateSelectedLabels(v?: any | any[]) {
      let tmpLabels: string[] = [];
      if (v != null) {
        let newV = Array.isArray(v) ? v : [v];
        for (let i = 0, len = newV.length; i < len; i++) {
          const value = newV[i];
          const valueOption = props.options.find(
            (option) => option[props.valueField] === value,
          );
          if (valueOption != null) {
            tmpLabels.push(valueOption[props.labelField]);
          }
        }
      }
      selectedLabels.value = tmpLabels;
      nextTick(() => {
        if (props.multiple && expand.value) {
          if (selectedLabels.value.length > 0) {
            visibleClear();
          } else {
            unvislbleClear();
          }
        }
      });
    }

    updateSelectedLabels(props.modelValue);

    let resizeObserver: ResizeObserver | undefined;

    watch(
      () => props.modelValue,
      (v) => {
        updateSelectedLabels(v);
      },
    );

    onMounted(() => {
      if (resizeObserver == null) {
        resizeObserver = new ResizeObserver(() => {
          if (popoverComp.value != null) {
            popoverComp.value.updatePosition();
          }
        });
        resizeObserver.observe(elem(`#${id}`)[0]);
      }
    });

    onUnmounted(() => {
      if (resizeObserver != null) {
        resizeObserver.disconnect();
        resizeObserver = undefined;
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

    function handleOptionClick(e: Event, option: SelectOption) {
      e.stopPropagation();
      const value = option[props.valueField];
      let oldValue = props.modelValue;
      if (props.multiple === true) {
        if (oldValue == null) {
          oldValue = [value];
        } else {
          if (Array.isArray(oldValue)) {
            oldValue = [...oldValue];
            let i = oldValue.indexOf(value);
            if (i === -1) {
              oldValue.push(value);
            } else {
              oldValue.splice(i, 1);
            }
          } else {
            if (oldValue !== value) {
              oldValue = [oldValue, value];
            }
          }
        }
      } else {
        oldValue = value;
      }
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

    function handleDeleteSelect(index: number) {
      let oldValue = [...props.modelValue];
      oldValue.splice(index, 1);
      emit('update:modelValue', oldValue);
    }

    function handleClearSelect(e: Event) {
      if (props.multiple) {
        emit('update:modelValue', []);
      } else {
        emit('update:modelValue', undefined);
      }
      unvislbleClear();
      e.stopPropagation();
    }

    function visibleClear() {
      if (selectedLabels.value.length > 0 && props.clearable) {
        showClear.value = true;
      }
    }

    function unvislbleClear() {
      if (props.clearable && showClear.value) {
        showClear.value = false;
      }
    }

    function renderTag(value: any, index: number = 0, closable = true) {
      return h(
        Tag,
        {
          closable,
          type: 'info',
          onClose: (e: Event) => {
            handleDeleteSelect(index);
            e.stopPropagation();
          },
        },
        { default: () => value },
      );
    }

    function renderSelectedLabels() {
      const chidren = [];
      let selectLen = selectedLabels.value.length;
      if (selectLen > 0) {
        if (!props.multiple) {
          chidren.push(h('span', selectedLabels.value[0]));
        } else {
          if (props.collapseTags) {
            chidren.push(renderTag(selectedLabels.value[0]));
            if (selectLen > 1) {
              chidren.push(renderTag(`+${selectLen - 1}`, 0, false));
            }
          } else {
            for (let i = 0; i < selectLen; i++) {
              const item = selectedLabels.value[i];
              chidren.push(renderTag(item, i));
            }
          }
        }
      } else {
        if (!props.filterable) {
          chidren.push(
            h('span', { class: 'nt-select-placeholder' }, props.placeholder),
          );
        }
      }
      if (props.filterable) {
        chidren.push(h('input', { placeholder: props.placeholder }));
      }

      return chidren;
    }

    return () => [
      withDirectives(
        h(
          'div',
          {
            ...attrs,
            class: [
              'nt-select',
              expand.value ? 'nt-select--active' : undefined,
              attrs.class,
            ],
            id: id,
            onClick: handleSelectClick,
            onMouseenter: visibleClear,
            onMouseleave: unvislbleClear,
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
            showClear.value
              ? h(MaskClose, {
                  class: 'nt-select--clear',
                  onClick: handleClearSelect,
                })
              : undefined,
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
