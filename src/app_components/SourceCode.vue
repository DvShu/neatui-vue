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
import { onMounted, ref } from 'vue';
import { codeToHtml } from 'shiki';
import { isBlank } from 'ph-utils';

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

/**
 * 格式化匹配的代码, 只是去除多余的空格, 使对齐
 *
 * @param {string} sourceStr 源代码字符串
 *
 * @returns {string} 对齐后的源代码
 */
function formatCode(sourceStr: string) {
  const rows = sourceStr.split('\n');
  let startTrimCount = -1;
  const res = [];
  for (let row of rows) {
    if (row === '' && startTrimCount === -1) continue;
    // 计算开头的空格数量
    if (startTrimCount === -1) {
      startTrimCount = 0;
      const startTrimMatch = row.match(/^\s*/);
      if (startTrimMatch != null) {
        startTrimCount = startTrimMatch[0].length;
      }
    }
    row = row.replace(new RegExp(`^(\\s{${startTrimCount}})`), '');
    row = row.replace('<!---->', '').replace('//-', '');
    res.push(row);
  }
  return res.join('\n');
}

onMounted(async () => {
  if (vpCode.value != null) {
    const $codeArea = vpCode.value.querySelector('textarea');
    if ($codeArea != null) {
      if ($codeArea.hasAttribute('lang')) {
        lang.value = $codeArea.getAttribute('lang') as string;
      }
      let sourceCode = formatCode($codeArea.value);
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
