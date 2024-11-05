<script lang="ts">
import {
  useId,
  ref,
  defineComponent,
  h,
  withDirectives,
  defineModel,
} from 'vue';
import type { PropType, VNode } from 'vue';
import ArrowDown from './icon/ArrowDown.vue';
import Popover from './popover/Popover.vue';
import Clickoutside from '../directives/clickoutside';

type SelectOption = {
  class?: string;
  render?: () => VNode[] | VNode;
  label?: string | (() => VNode[] | VNode);
  value?: string | number | (() => VNode[] | VNode);
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
  },
  setup(props, { attrs }) {
    const id = useId();
    const popoverComp = ref();
    const expand = ref(false);
    const model = defineModel({
      type: [String, Number, Array] as PropType<any | any[]>,
    });

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

    function optionNodes() {
      return props.options.map((option: SelectOption) => {
        return h(
          'li',
          {
            class: ['nt-select-option', option.class],
          },
          option[props.labelField],
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
