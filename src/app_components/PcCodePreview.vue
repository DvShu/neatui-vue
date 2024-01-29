<script lang="ts">
import { ref, defineComponent, h } from 'vue';
import SourceCode from './SourceCode.vue';
import CodeRender from './CodeRender.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import ExpandIcon from './ExpandIcon.vue';
import CopyIcon from './CopyIcon.vue';
import Tooltip from '../components/Tooltip.vue';
import { copy } from 'ph-utils/copy';
import Message from '../components/Message/index';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: 'js',
    },
  },
  setup(props, { slots, attrs }) {
    const showCode = ref(false);

    async function handleCopy() {
      await copy(props.code);
      Message.success('复制成功');
    }
    console.log(attrs);
    return () =>
      h(
        Card,
        {
          ...attrs,
          class: 'pc-code-preview',
          bodyClass: 'preview-body',
        },
        {
          header: () => h('h3', null, { default: () => props.title }),
          'header-extra': () => [
            h(
              Tooltip,
              {
                text: '复制代码',
                position: 'bottom',
                onclick: handleCopy,
              },
              () =>
                h(Button, { type: 'text', class: 'expand-btn' }, () =>
                  h(CopyIcon),
                ),
            ),
            h(
              Tooltip,
              {
                text: '查看源代码',
                position: 'bottom',
                align: 'right',
                onclick: () => {
                  showCode.value = !showCode.value;
                },
              },
              () =>
                h(Button, { type: 'text', class: 'expand-btn' }, () =>
                  h(ExpandIcon),
                ),
            ),
          ],
          default: () => [
            slots.description
              ? h('div', { class: 'code-description' }, slots.description())
              : null,
            h(
              'div',
              {
                class: 'code-preview',
              },
              slots.preview
                ? h(
                    CodeRender,
                    { code: props.code },
                    {
                      default: () => (slots as any).preview(),
                    },
                  )
                : h(CodeRender, { code: props.code }),
            ),
            showCode.value
              ? h(SourceCode, {
                  code: props.code,
                  lang: props.lang,
                  showCopy: false,
                })
              : null,
          ],
        },
      );
  },
});
</script>

<style lang="less">
.pc-code-preview {
  margin: 10px 0;
  h3 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  .preview-body {
    padding: 0;
  }

  .code-description {
    font-size: 15px;
    padding: 15px;
    border-bottom: 1px solid #dedede;
  }

  .code-preview {
    padding: 15px;
  }

  .source-code {
    border-top: 1px solid #dedede;

    pre {
      margin: 0;
    }
  }

  .nt-header,
  .nt-footer {
    background-color: #c5e2ff;
  }
  .nt-main {
    background-color: #ecf5ff;
  }
  .nt-aside {
    background-color: #d9ecff;
  }
}
.expand-btn {
  color: #333;
}

.pc-doc,
.pc-previewer {
  width: calc((100% - 30px) / 2);
}
.pc-previewer {
  margin-left: 30px;
  .nt-container {
    border: 1px solid #dedede;
    height: 100%;
  }
}
</style>
