<template>
  <Card class="pc-code-preview" body-class="preview-body">
    <template v-slot:header>
      <h3>{{ title }}</h3>
    </template>
    <template v-slot:header-extra>
      <Button type="text" class="expand-btn">
        <CopyIcon />
      </Button>
      <Button type="text" class="expand-btn">
        <ExpandIcon />
      </Button>
    </template>
    <template v-slot:default>
      <div class="code-description"><slot name="description"></slot></div>
      <div class="code-preview">
        <CodeRender :code="code">
          <slot name="preview"></slot>
        </CodeRender>
      </div>
      <SourceCode :code="code" :lang="lang" :show-copy="false"></SourceCode>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { defineComponent, h } from 'vue';
import SourceCode from './SourceCode.vue';
import CodeRender from './CodeRender.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import ExpandIcon from './ExpandIcon.vue';
import CopyIcon from './CopyIcon.vue';

withDefaults(
  defineProps<{
    title: string;
    code: string;
    lang?: string;
  }>(),
  {
    lang: 'js',
  },
);
// defineOptions(
//   defineComponent({
//     name: 'PcCodePreview',
//     props: {
//       code: {
//         type: String,
//         required: true,
//       },
//       lang: {
//         type: String,
//         required: false,
//         default: 'js',
//       },
//     },
//     setup(props, { slots }) {
//       const renderChildren =
//         slots.default == null ? undefined : (slots as any).default();
//       return () =>
//         h('div', { class: 'pc-doc-previewer' }, [
//           h(
//             'div',
//             { class: 'pc-doc' },
//             h(SourceCode, {
//               lang: props.lang,
//               code: props.code,
//             }),
//           ),
//           h(
//             'div',
//             {
//               class: 'pc-previewer',
//             },
//             h(
//               CodeRender,
//               {
//                 code: props.code,
//               },
//               renderChildren,
//             ),
//           ),
//         ]);
//     },
//   }),
// );
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
  }

  .code-preview {
    padding: 0 15px 15px 15px;
  }

  .source-code {
    border-top: 1px solid #dedede;

    pre {
      margin: 0;
    }
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
