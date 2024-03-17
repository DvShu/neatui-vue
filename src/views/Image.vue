<template>
  <DocMain>
    <h1>Image</h1>
    <p>可预览的图片，支持懒加载、加载失败处理等</p>
    <h2>演示</h2>
    <CodeExample>
      <PcCodePreview lang="html" :code="code1" title="基础用法">
        <template v-slot:description>
          <p>
            可通过fit确定图片如何适应到容器框，同原生
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit"
              target="_blank"
              >object-fit</a
            >。
          </p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" :code="code2" title="加载失败">
        <template v-slot:description>
          <p>
            使用 fallback 设定失败时的图像。
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit"
              target="_blank"
              >object-fit</a
            >。
          </p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" :code="code3" title="懒加载">
        <template v-slot:description>
          <p>
            通过使用 loading="lazy"
            开启懒加载，如果浏览器不支持该属性，可以通过手动引入
            <a href="https://github.com/mfranzke/loading-attribute-polyfill"
              >loading-attribute-polyfill</a
            >
          </p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Image Props"></PropTable>
  </DocMain>
</template>

<script lang="ts" setup>
import DocMain from '../app_components/DocMain.vue';

import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import PropTable from '../app_components/PropTable.vue';
const propData = [
  {
    name: 'src',
    description: '图片地址，同原生属性一致',
    default: '-',
    type: 'string',
  },
  {
    name: 'width',
    description: '图片宽度, 如果我字符串可以带上单位，也可以不带',
    default: '-',
    type: 'string、number',
  },
  {
    name: 'height',
    description: '图片高度, 如果我字符串可以带上单位，也可以不带',
    default: '-',
    type: 'string、number',
  },
  {
    name: 'alt',
    description: '原生属性',
    type: 'string',
    default: '-',
  },
  {
    name: 'loading',
    description:
      '原生属性，图片加载状态, eager - 立即加载图像, lazy - 懒加载; 对于不支持懒加载的浏览器，可以通过手动引入 polyfill',
    type: 'string',
    default: 'eager',
  },
  {
    name: 'fit',
    description: '确定图片如何适应容器框，同原生 object-fit',
    default: '-',
    type: 'string',
  },
  {
    name: 'fallback',
    description: '图片加载失败时显示的地址',
    default: '-',
    type: 'string',
  },
];

const code1 = `
<nt-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="100"></nt-image>
`;

const code2 = `
<nt-image src="" fallback="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="100" />
`;

const code3 = `
<nt-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="100" loading="lazy"></nt-image>
`;
</script>
