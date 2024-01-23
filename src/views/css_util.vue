<template>
  <div class="nt-scrollbar doc-main css-util">
    <h2>1. Vue3 Transition 渐变</h2>
    <h3>引入</h3>
    <SourceCode
      code="import 'neatui-vue/style/util/transition.css'"
    ></SourceCode>
    <h3>使用</h3>
    <p>所有的渐变都支持传递 --nt-transition-times 控制时长, 默认为 0.3s</p>
    <ul class="ul-list">
      <li>
        <p>1. opacity</p>
        <PcCodePreview lang="html" :code="code1">
          <Button @click="toggle1 = !toggle1">Toggle</Button>
          <Transition name="nt-opacity" appear>
            <p v-if="toggle1" style="--nt-transition-times: 0.2s">
              Hello world
            </p>
          </Transition>
        </PcCodePreview>
      </li>
      <li>
        <p>2. fadein</p>
        <p>支持通过 --nt-fadein-offset 控制距离, 默认为 20px</p>
        <PcCodePreview lang="html" :code="code3">
          <Button @click="toggle2 = !toggle2">Toggle</Button>
          <Transition name="nt-fadein" appear>
            <p v-if="toggle2" style="--nt-fadein-offset: -30px">Hello world</p>
          </Transition>
        </PcCodePreview>
      </li>
    </ul>
    <ThemeTable :rows="vars0" :title="null" subtitle="样式变量"></ThemeTable>
    <h2>2. 滚动条样式</h2>
    <p>如果觉得默认滚动条不好看，想修改滚动条样式</p>
    <h3>引入</h3>
    <SourceCode
      code="import 'neatui-vue/style/util/scrollbar.css'"
    ></SourceCode>
    <h3>使用</h3>
    <SourceCode lang="html" :code="code2"></SourceCode>
    <p>实际效果就跟文档的滚动条一样</p>
    <ThemeTable
      :rows="vars"
      :title="null"
      subtitle="主题定制 - 样式变量"
    ></ThemeTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SourceCode from '../app_components/SourceCode.vue';
import ThemeTable from '../app_components/ThemeTable.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Button from '../components/Button.vue';

const toggle1 = ref(true);
const toggle2 = ref(true);

const code1 = `
<Transition name="nt-opacity">
  <p v-if="show">hello</p>
</Transition>
`;

const code3 = `
<Transition name="nt-fadein">
  <p v-if="show">hello</p>
</Transition>
`;

const code2 = `
<div class="nt-scrollbar">
  <p v-if="show">hello</p>
</div>
`;

const vars0 = [
  {
    name: '--nt-transition-times',
    description: '渐变时长, 所有渐变都支持',
    default: '0.3s',
  },
  {
    name: '--nt-fadein-offset',
    description: '渐变距离, 支持的渐变有: fadein',
    default: '20px',
  },
];

const vars = [
  {
    name: '--nt-scrollbar-bg',
    description: '滑块背景色',
    default: '#ccc',
  },
  {
    name: '--nt-scrollbar-hover',
    description: '鼠标悬浮时滑块颜色',
    default: 'var(--nt-scrollbar-bg)',
  },
  {
    name: ' --nt-scrollbar-size',
    description: '滑块尺寸, 水平滚动条时为高度，垂直时为宽度',
    default: '10px',
  },
];
</script>
