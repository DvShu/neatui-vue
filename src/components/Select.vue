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
import LoadingIcon from './icon/Loading.vue';
import MaskClose from './icon/MaskClose.vue';
import Tag from './Tag.vue';
import { elem } from 'ph-utils/dom';
import useDebounce from '../hooks/useDebounce';

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
    /** 是否启用远程搜索 */
    remote: {
      type: Boolean,
      default: false,
    },
    /** 是否为加载状态, 通常为远程搜索时使用 */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'search'],
  setup(props, { attrs, emit }) {
    const id = useId();
    const popoverComp = ref();
    const expand = ref(false);
    const showClear = ref(false);
    /** 选择的标签列表 */
    const selectedLabels = ref<string[]>([]);
    const searchInput = ref<HTMLInputElement>();
    const options = ref(filterOption(''));

    const { run: handleSearchInput, cancel } = useDebounce((match: string) => {
      if (props.remote === true) {
        emit('search', match);
      } else {
        const newValue = filterOption(match);
        options.value = newValue;
        if (newValue.length !== options.value.length) {
          nextTick(() => {
            updatePopoverPosition();
          });
        }
      }
    }, 300);

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
          toggleSearchFocus(false);
        }
      }
    }

    function handleSelectClick() {
      if (props.disabled === false && popoverComp.value != null) {
        if (expand.value === true) {
          popoverComp.value.hide();
          expand.value = false;
          unvislbleClear();
          toggleSearchFocus(false);
        } else {
          expand.value = true;
          popoverComp.value.show();
          toggleSearchFocus(true);
        }
      }
    }

    function toggleSearchFocus(focus = true) {
      if (searchInput.value != null) {
        if (focus) {
          searchInput.value.focus();
          options.value = filterOption('');
        } else {
          searchInput.value.blur();
        }
      }
    }

    function setSearchValue(val: string = '') {
      if (searchInput.value != null) {
        searchInput.value.value = val;
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

    watch(
      () => props.options,
      (v) => {
        const oldLen = options.value.length;
        options.value = v;
        if (v.length !== oldLen) {
          nextTick(() => {
            updatePopoverPosition();
          });
        }
      },
    );

    onMounted(() => {
      if (resizeObserver == null) {
        resizeObserver = new ResizeObserver(() => {
          updatePopoverPosition();
        });
        resizeObserver.observe(elem(`#${id}`)[0]);
      }
    });

    onUnmounted(() => {
      if (resizeObserver != null) {
        resizeObserver.disconnect();
        resizeObserver = undefined;
      }
      cancel();
    });

    function updatePopoverPosition() {
      if (popoverComp.value != null) {
        popoverComp.value.updatePosition();
      }
    }

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

    function filterOption(match: string) {
      const opts = [];
      for (let i = 0, len = props.options.length; i < len; i++) {
        const thisOption = props.options[i];
        let isFil = true;
        if (match) {
          if (props.filter != null) {
            isFil = props.filter(match, thisOption.value);
          } else {
            isFil = thisOption[props.labelField].includes(match);
          }
        }
        if (isFil) {
          opts.push(thisOption);
        }
      }
      return opts;
    }

    function handleOptionClick(e: Event, option: SelectOption) {
      e.stopPropagation();
      const value = option[props.valueField];
      const label = option[props.labelField];
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
      setSearchValue(!props.multiple ? label : '');
      if (searchInput.value != null) {
        searchInput.value.placeholder = '';
        searchInput.value.focus();
      }
      emit('update:modelValue', oldValue);
    }

    function optionNodes() {
      let children = options.value.map((option: SelectOption) => {
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
      if (children == null || children.length === 0) {
        children.push(
          h('li', { class: 'nt-select-option nt-select-option--empty' }, [
            h('span', '无数据'),
          ]),
        );
      }
      return children;
    }

    function handleDeleteSelect(index: number) {
      let oldValue = [...props.modelValue];
      oldValue.splice(index, 1);
      emit('update:modelValue', oldValue);
      if (oldValue.length === 0 && searchInput.value != null) {
        searchInput.value.placeholder = props.placeholder;
      }
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
          class: 'nt-select-item',
        },
        { default: () => value },
      );
    }

    function onSearchFocus(e: Event) {
      const $input = e.target as HTMLInputElement;
      if ($input.value !== '') {
        $input.placeholder = $input.value;
        $input.value = '';
      }
      if (selectedLabels.value.length > 0) {
        $input.placeholder = '';
      }
    }

    function onSearchBlur() {
      if (selectedLabels.value.length > 0 && !props.multiple) {
        setSearchValue(selectedLabels.value[0]);
      } else {
        setSearchValue('');
      }
    }

    function onSearchInput(e: Event) {
      const $target = e.target as HTMLInputElement;
      handleSearchInput($target.value);
    }

    function onSearchKeydown(e: KeyboardEvent) {
      let len = selectedLabels.value.length;
      if (e.key === 'Backspace' && len > 0) {
        handleDeleteSelect(len - 1);
      }
    }

    function renderSelectedLabels() {
      const chidren = [];
      let selectLen = selectedLabels.value.length;
      if (selectLen > 0) {
        if (!props.multiple) {
          if (!props.filterable) {
            chidren.push(
              h('span', { class: 'nt-select-item' }, selectedLabels.value[0]),
            );
          }
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
            h(
              'span',
              { class: 'nt-select-item nt-select-placeholder' },
              props.placeholder,
            ),
          );
        }
      }
      if (props.filterable) {
        chidren.push(
          h(
            'div',
            { class: 'nt-select-item nt-select-search' },
            h('input', {
              class: 'nt-select--input',
              placeholder: props.placeholder,
              ref: searchInput,
              onFocus: onSearchFocus,
              onBlur: onSearchBlur,
              onInput: onSearchInput,
              onKeydown: onSearchKeydown,
            }),
          ),
        );
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
            h('div', { class: 'nt-select-main' }, renderSelectedLabels()),
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
            props.loading
              ? h(LoadingIcon, {
                  class: 'nt-select--loading nt-rotate-anim',
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
