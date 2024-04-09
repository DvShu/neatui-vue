<template>
  <div class="code-preview">
    <div class="preview-container">sdfggfdsgf</div>
    <div class="operate-container">
      <Tooltip title="查看源代码" placement="topEnd">
        <Button type="text" @click="showCode = !showCode">
          <ExpandIcon></ExpandIcon>
        </Button>
      </Tooltip>

      <Tooltip title="复制代码" placement="topEnd">
        <Button type="text">
          <CopyIcon></CopyIcon>
        </Button>
      </Tooltip>
    </div>

    <SourceCode v-if="showCode">
      <pre>
        const a = 1;
      </pre>
    </SourceCode>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SourceCode from './SourceCode.vue';
import ExpandIcon from './ExpandIcon.vue';
import CopyIcon from './CopyIcon.vue';
import Button from '../components/Button.vue';
import Tooltip from '../components/Tooltip.vue';

const showCode = ref(false);
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
    flex-direction: row-reverse;
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
