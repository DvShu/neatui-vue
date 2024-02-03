<template>
  <DocMain>
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    <CodeExample>
      <PcCodePreview :code="code1" lang="html" title="基本用法">
        <template v-slot:description>基本用法</template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Input Props"></PropTable>
  </DocMain>
</template>

<script setup lang="ts">
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import PropTable from '../app_components/PropTable.vue';

const propData = [
  {
    name: 'html-type',
    description: '原生 input 的 type',
    default: 'text',
    type: 'string',
  },
  {
    name: 'placeholder',
    description: '占位文本',
    default: '',
    type: 'string',
  },
];
const code1 = '<nt-input placeholder="请输入内容"></nt-input>';
</script>

<style lang="less"></style>
