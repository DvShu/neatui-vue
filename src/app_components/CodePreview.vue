<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import SourceCode from './SourceCode.vue';
import { Button, CaretTopIcon, CaretBottomIcon } from '../';
import CodeRender from './CodeRender.vue';

export default defineComponent({
  setup(_props, { slots }: any) {
    const showCode = ref(false);

    return () => {
      console.log(slots.preview());
      return h('div', { class: 'code-preview' }, [
        h(
          'div',
          { class: 'preview-container' },
          slots.preview
            ? slots.preview()
            : h(CodeRender, null, {
                default: () => slots.default(),
              }),
        ),
        h('div', { class: 'operate-container' }, [
          h(
            Button,
            {
              type: 'primary',
              text: true,
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
          h(SourceCode, null, { default: () => slots.default() }),
        ],
      ]);
    };
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
  }

  .source-code {
    border-top: 1px solid #e2e2e3;
  }
}

#app .vp-doc .code-preview div[class*='language-'] {
  margin: 0;
  border-radius: 0;
}
</style>
