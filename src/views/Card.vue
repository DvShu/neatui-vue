<template>
  <DocMain>
    <h1>Card 卡片</h1>
    <p>通用卡片应用，常用于后台概览页面。</p>
    <CodeExample>
      <PcCodePreview lang="html" :code="code1" title="典型卡片">
        <template v-slot:preview>
          <Card header-text="卡片标题">
            <template v-slot:default>
              <p>卡片内容</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
          </Card>
        </template>
        <template v-slot:description>
          <p>包含标题、内容、操作区域。</p>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="html" :code="code2" title="简洁卡片">
        <template v-slot:preview>
          <Card header-text="卡片标题" :show-header="false">
            <template v-slot:default>
              <p>卡片内容</p>
            </template>
          </Card>
        </template>
        <template v-slot:description>
          <p>只包含内容区域</p>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="html" :code="code3" title="完整卡片">
        <template v-slot:preview>
          <Card
            header-text="卡片标题"
            :show-footer="true"
            footer-text="底部区域"
          >
            <template v-slot:default>
              <p>卡片内容</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
          </Card>
        </template>
        <template v-slot:description>
          <p>卡片包含标题，内容、操作区域以及底部区域。</p>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="html" :code="code4" title="自定义标题">
        <template v-slot:preview>
          <Card :show-footer="true">
            <template v-slot:header>
              <span style="color: red">卡片标题</span>
            </template>
            <template v-slot:default>
              <p>卡片内容</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
            <template v-slot:footer>
              <span style="color: orange">卡片标题</span>
            </template>
          </Card>
        </template>
        <template v-slot:description>
          <p>
            标题和底部区域除了可以通过 header-text 和 footer-text
            传递以外，也可以通过 header 和 footer slot 自定义 。
          </p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <PcCodePreview lang="html" :code="code5" title="栅格卡片">
      <template v-slot:preview>
        <div class="grid grid-cols-3 gap-4">
          <Card header-text="卡片标题1">
            <template v-slot:default>
              <p>卡片内容1</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
          </Card>
          <Card header-text="卡片标题2">
            <template v-slot:default>
              <p>卡片内容2</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
          </Card>
          <Card header-text="卡片标题3">
            <template v-slot:default>
              <p>卡片内容3</p>
            </template>
            <template v-slot:header-extra>
              <Button type="text">按钮</Button>
            </template>
          </Card>
        </div>
      </template>
      <template v-slot:description>
        <p>
          在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。
        </p>
        <p>
          关于栅格布局，框架不提供，推荐使用
          <a href="https://unocss.dev/interactive/?s=grid">unocss</a>
          或者
          <a href="https://www.tailwindcss.cn/docs/display#grid">tailwindcss</a>
          的 grid 实现
        </p>
      </template>
    </PcCodePreview>
    <h2>API</h2>
    <PropTable :data="propData" title="Card Props"></PropTable>
    <SlotTable :data="slotData" title="Card Slots"></SlotTable>
  </DocMain>
</template>

<script lang="ts" setup>
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';
import PropTable from '../app_components/PropTable.vue';
import SlotTable from '../app_components/SlotTable.vue';

const propData = [
  {
    name: 'header-text',
    description: '标题内容',
    default: '',
    type: 'string',
  },
  {
    name: 'footer-text',
    description: '底部区域文本',
    default: '',
    type: 'string',
  },
  {
    name: 'show-header',
    description: '是否显示标题区域',
    default: 'true',
    type: 'boolean',
  },
  {
    name: 'show-footer',
    description: '是否显示底部区域',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'body-class',
    description: '内容区域样式',
    default: '',
    type: 'string',
  },
];

const slotData = [
  {
    name: 'default',
    param: '()',
    description: '内容区域',
  },
  {
    name: 'header-extra',
    param: '()',
    description: '标题操作区域',
  },
  {
    name: 'footer',
    param: '()',
    description: '底部区域内容',
  },
  {
    name: 'header',
    param: '()',
    description: '标题区域内容',
  },
];

const code1 = `
<nt-card header-text="card title" >
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <nt-button type="text">按钮</nt-button>
  </template>
</nt-card>
`;

const code2 = `
<nt-card header-text="card title" :show-header="false">
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
</nt-card>
`;

const code3 = `
<nt-card header-text="card title" show-footer footer-text="底部区域">
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <nt-button type="text">按钮</nt-button>
  </template>
</nt-card>
`;

const code4 = `
<nt-card :show-footer="true">
  <template v-slot:header>
    <span style="color: red">卡片标题</span>
  </template>
  <template v-slot:default>
    <p>卡片内容</p>
  </template>
  <template v-slot:header-extra>
    <Button type="text">按钮</Button>
  </template>
  <template v-slot:footer>
    <span style="color: orange">卡片标题</span>
  </template>
</nt-card>
`;

const code5 = `
<div class="grid grid-cols-3 gap-4">
  <Card header-text="卡片标题1">
    <template v-slot:default>
      <p>卡片内容1</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
  <Card header-text="卡片标题2">
    <template v-slot:default>
      <p>卡片内容2</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
  <Card header-text="卡片标题3">
    <template v-slot:default>
      <p>卡片内容3</p>
    </template>
    <template v-slot:header-extra>
      <Button type="text">按钮</Button>
    </template>
  </Card>
</div>
`;
</script>
