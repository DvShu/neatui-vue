<template>
  <Card class="pc-code-preview" body-class="preview-body">
    <template v-slot:header>
      <h3>{{ title }}</h3>
    </template>
    <template v-slot:header-extra>
      <Tooltip text="复制代码" position="bottom" @click="handleCopy">
        <Button type="text" class="expand-btn">
          <CopyIcon />
        </Button>
      </Tooltip>
      <Tooltip text="查看源代码" position="bottom" align="right">
        <Button type="text" class="expand-btn" @click="showCode = !showCode">
          <ExpandIcon />
        </Button>
      </Tooltip>
    </template>
    <template v-slot:default>
      <div class="code-description"><slot name="description"></slot></div>
      <div class="code-preview">
        <CodeRender :code="code">
          <slot name="preview"></slot>
        </CodeRender>
      </div>
      <SourceCode
        v-if="showCode"
        :code="code"
        :lang="lang"
        :show-copy="false"
      ></SourceCode>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SourceCode from './SourceCode.vue';
import CodeRender from './CodeRender.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import ExpandIcon from './ExpandIcon.vue';
import CopyIcon from './CopyIcon.vue';
import Tooltip from '../components/Tooltip.vue';
import { copy } from 'ph-utils/copy';
import Message from '../components/Message/index';

const props = withDefaults(
  defineProps<{
    title: string;
    code: string;
    lang?: string;
  }>(),
  {
    lang: 'js',
  },
);

const showCode = ref(false);

async function handleCopy() {
  await copy(props.code);
  Message.success('复制成功');
}
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
