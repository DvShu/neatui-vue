<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import SourceCode from './SourceCode.vue';
import ExpandIcon from './ExpandIcon.vue';
import CopyIcon from './CopyIcon.vue';
import Button from '../components/Button.vue';
import Tooltip from '../components/Tooltip.vue';
import CaretTopIcon from '../components/icon/CaretTop.vue';
import CaretBottomIcon from '../components/icon/CaretBottom.vue';
import CodeRender from './CodeRender.vue';

export default defineComponent({
  props: {
    lang: {
      type: String,
      default: 'ts',
    },
  },
  setup(props, { slots }: any) {
    const showCode = ref(true);

    return () =>
      h('div', { class: 'code-preview' }, [
        h(
          'div',
          { class: 'preview-container' },
          slots.preview
            ? h(CodeRender, null, {
                preview: () => slots.preview(),
              })
            : h(CodeRender, null, {
                default: () => slots.default(),
              }),
        ),
        h('div', { class: 'operate-container' }, [
          h(
            Button,
            {
              type: 'text',
              onclick: function () {
                showCode.value = !showCode.value;
              },
            },
            () => [
              showCode.value ? h(CaretTopIcon) : h(CaretBottomIcon),
              h('span', (showCode.value ? '隐藏' : '查看') + '源代码'),
            ],
          ),
        ]),
        showCode.value && [
          h(
            SourceCode,
            { lang: props.lang },
            { default: () => h('pre', 'const a = 1;') },
          ),
        ],
      ]);
  },
});
</script>

<style lang="less">
.code-preview {
  border: 1px solid #e2e2e3;
  border-radius: 5px;

  .preview-container {
    padding: 15px;
  }

  .operate-container {
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e2e2e3;
    border-bottom: 1px solid #e2e2e3;
  }

  div[class*='language-'] {
    margin: 0;
    border-radius: 0;
  }
}
</style>
