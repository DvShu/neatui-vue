<template>
  <DocMain>
    <h1>Qrcode</h1>
    <p>生成二维码</p>
    <CodeExample>
      <PcCodePreview lang="html" :code="code1" title="基础用法">
        <template v-slot:description>
          <p>text 属性为二维码内容</p>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="html" :code="code2" title="颜色大小">
        <template v-slot:description>
          <p>
            可以通过 fill 属性更改二维码颜色, size 属性更改大小; 注意:
            实际的二维码的大小不一定跟传递的 size
            一样大，因为会调整每一个二维码小单元格尺寸,
            所以最终大小只能是小于等于传递的 size
          </p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Qrcode Props"></PropTable>
  </DocMain>
</template>

<script lang="ts" setup>
import DocMain from '../app_components/DocMain.vue';

import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import PropTable from '../app_components/PropTable.vue';
const propData = [
  { name: 'text', description: '二维码内容', default: '-', type: 'string' },
  {
    name: 'fill',
    description: '二维码颜色',
    default: '#000000',
    type: 'string',
  },
  { name: 'size', description: '二维码大小', default: '100', type: 'number' },
  {
    name: 'level',
    description: '二维码容错率, L、M、Q、H',
    default: 'L',
    type: 'string',
  },
  {
    name: 'margin',
    description: '二维码边距',
    default: '0',
    type: 'number',
  },
];

const code1 = `
<nt-qrcode text="Hello World"></nt-qrcode>
`;

const code2 = `
<nt-qrcode text="Hello World" fill="#4998f4" size="120"></nt-qrcode>
`;
</script>
