<template>
  <div
    class="source-code language-ts vp-adaptive-theme line-numbers-mode"
    ref="vpCode"
  >
    <button v-if="showCopy" title="Copy Code" class="copy"></button>
    <span class="lang">{{ lang }}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useSlots } from 'vue';
import type { VNode } from 'vue';
import { codeToHtml } from 'shiki';
import { isBlank } from 'ph-utils';

const slots = useSlots() as {
  default: () => VNode[];
};

const lang = ref('ts');

withDefaults(
  defineProps<{
    showCopy?: boolean;
  }>(),
  {
    showCopy: true,
  },
);

const vpCode = ref<HTMLDivElement>();

onMounted(async () => {
  if (vpCode.value != null) {
    const $codeArea = vpCode.value.querySelector('textarea');
    if ($codeArea != null) {
      if ($codeArea.hasAttribute('lang')) {
        lang.value = $codeArea.getAttribute('lang') as string;
      }
      let sourceCode = $codeArea.value;
      console.log(sourceCode);
      sourceCode = sourceCode.trim().replaceAll('\n  ', '\n');
      if (typeof sourceCode === 'string' && !isBlank(sourceCode)) {
        let preCode = await codeToHtml(sourceCode.trim(), {
          lang: lang.value,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
          defaultColor: false,
        });
        preCode = preCode.replace('github-dark', 'github-dark vp-code');
        const lineMatch = preCode.match(/class="line"/g);
        const lineNumber = lineMatch ? lineMatch.length : 0;
        const fragment = new DocumentFragment();
        const parser = new DOMParser();
        const doc = parser.parseFromString(preCode, 'text/html');
        const children = doc.body.children;

        for (let i = 0, len = children.length; i < len; i++) {
          if (children[i] != null) {
            fragment.appendChild(children[i]);
          }
        }
        const $lineNumber = document.createElement('div');
        $lineNumber.className = 'line-numbers-wrapper';
        $lineNumber.setAttribute('aria-hidden', 'true');
        let $lineTmp = '';
        for (let i = 1; i <= lineNumber; i++) {
          $lineTmp += `<span class="line-number">${i}</span><br>`;
        }
        $lineNumber.innerHTML = $lineTmp;
        fragment.appendChild($lineNumber);
        $codeArea.replaceWith(fragment);
      }
    }
  }
});
</script>

<style>
.source-code {
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

  textarea {
    display: none;
  }
}
</style>
