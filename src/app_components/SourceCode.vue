<template>
  <div class="source-code">
    <pre
      :class="['nt-scrollbar', 'nt-scrollbar-x', 'language-' + lang]"
    ><code :class="'language-' + lang" v-html="highlightCode"></code></pre>
    <Button
      v-if="showCopy"
      type="text"
      class="code-bopy-btn"
      @click="handleCopy"
    >
      <CopyIcon></CopyIcon>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import CopyIcon from './CopyIcon.vue';
import { copy } from 'ph-utils/copy';
import { Message } from '../index';

const props = withDefaults(
  defineProps<{
    lang?: string;
    code: string;
    showCopy?: boolean;
  }>(),
  {
    lang: 'typescript',
    showCopy: true,
  },
);

async function handleCopy() {
  await copy(props.code.trim());
  Message.success('复制成功');
}

const highlightCode = ref('');

onMounted(() => {
  highlightCode.value = window.Prism.highlight(
    props.code.trim(),
    window.Prism.languages[props.lang],
    props.lang,
  );
});
</script>

<style>
.source-code {
  position: relative;

  .code-bopy-btn {
    position: absolute;
    z-index: 1;
    top: 5px;
    right: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0;
    color: #999;
    &:hover {
      color: var(--nt-primary-color);
    }
  }
}
</style>
