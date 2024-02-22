<template>
  <DocMain>
    <h1>Button 按钮</h1>
    <p>常用于响应用户点击行为，触发相应的业务逻辑。</p>
    <CodeExample>
      <PcCodePreview lang="html" title="按钮类型" :code="code1">
        <template v-slot:description>
          <p>使用 type 控制按钮类型, 提供三种类型: default, primary, text。</p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" title="禁用状态" :code="code2">
        <template v-slot:description>
          <p>
            使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean
            类型的值。
          </p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" title="Block按钮" :code="code3">
        <template v-slot:description>
          <p>block 属性使按钮适合其父宽度。[100%]</p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" title="按钮形状" :code="code4">
        <template v-slot:description>
          <p>按钮可以设置为圆形或者弧形</p>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" title="图标按钮" :code="code5">
        <template v-slot:description>
          <p>直接在 Button 内使用 Icon 组件。</p>
        </template>
        <template v-slot:preview>
          <Button circle>
            <SearchIcon />
          </Button>
          <Button type="primary" round class="ml-10">
            <template v-slot:default>
              <SearchIcon />
              <span>Search</span>
            </template>
          </Button>
        </template>
      </PcCodePreview>
      <PcCodePreview lang="html" title="加载中状态" :code="code6">
        <template v-slot:description>
          <p>添加 loading 属性即可让按钮处于加载状态</p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Card Props"></PropTable>
    <SlotTable :data="slotData" title="Card Slots"></SlotTable>
    <ThemeTable :rows="varsData"></ThemeTable>
  </DocMain>
</template>

<script setup lang="ts">
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Button from '../components/Button.vue';
import SearchIcon from '../components/SearchIcon.vue';
import PropTable from '../app_components/PropTable.vue';
import SlotTable from '../app_components/SlotTable.vue';
import ThemeTable from '../app_components/ThemeTable.vue';

const code1 = `
<nt-button>Default</nt-button>
<nt-button type="primary" class="ml-10">Primary</nt-button>
<nt-button type="text" class="ml-10">Text</nt-button>
`;

const code2 = `
<nt-button disabled>Default</nt-button>
<nt-button type="text" class="ml-10" disabled>Text</nt-button>
`;
const code3 = `
<nt-button block>Default</nt-button>
<nt-button type="primary" block class="mt-10">Text</nt-button>
`;
const code4 = `
<nt-button circle>D</nt-button>
<nt-button type="primary" round class="ml-10">Text</nt-button>
`;

const code5 = `
<nt-button circle>
  <nt-search-icon />
</nt-button>
<nt-button type="primary" round class="ml-10">
  <template v-slot:default>
    <nt-search-icon />
    <span>Search</span>
  </template>
</nt-button>
`;

const code6 = `
<nt-button loading>Default</nt-button>
<nt-button type="primary" loading class="ml-10">Primary</nt-button>
`;

const propData = [
  {
    name: 'type',
    description: '按钮类型, primary、text、normal',
    default: 'normal',
    type: 'string',
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'htmlType',
    description: '原生的 type 属性; button、submit、reset',
    default: 'button',
    type: 'string',
  },
  {
    name: 'block',
    description: '按钮是否适合其父宽度(宽度100%)',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'circle',
    description: '是否是圆形按钮',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'round',
    description: '是否是弧形按钮',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'loading',
    description: '是否处于加载状态',
    default: 'false',
    type: 'boolean',
  },
  {
    name: 'loadingText',
    description: '加载状态时显示的文字',
    default: '加载中……',
    type: 'string',
  },
];

const slotData = [
  {
    name: 'default',
    param: '()',
    description: '内容区域',
  },
];

const varsData = [
  {
    name: '--nt-btn-color',
    description: '按钮的文字颜色',
    default: 'rgba(0, 0, 0, 0.65)',
  },
  {
    name: '--nt-btn-bg-color',
    description: '按钮的背景颜色',
    default: '#fff',
  },
  {
    name: '--nt-btn-border-color',
    description: '按钮的边框颜色',
    default: '#d9d9d9',
  },
  {
    name: '--nt-form-edit-height',
    description: '按钮的高度',
    default: '32px',
  },
  {
    name: '--nt-btn-hover-color',
    description: '鼠标悬浮时按钮的文字颜色',
    default: '#79b3f7',
  },
  {
    name: '--nt-btn-hover-border-color',
    description: '鼠标悬浮时按钮的边框颜色',
    default: 'var(--nt-btn-hover-color)',
  },
  {
    name: '--nt-btn-hover-bg-color',
    description: '鼠标悬浮时按钮的背景颜色',
    default: 'var(--nt-btn-bg-color)',
  },
  {
    name: '--nt-btn-active-color',
    description: '点击时按钮的颜色',
    default: '#197df1',
  },
  {
    name: '--nt-btn-active-bg-color',
    description: '点击时按钮的背景颜色',
    default: 'var(--nt-btn-bg-color)',
  },

  {
    name: '--nt-btn-active-border-color',
    description: '点击时按钮的边框颜色',
    default: 'var(--nt-btn-active-color)',
  },
  {
    name: '--nt-btn-disabled-color',
    description: '禁用时按钮的文字颜色',
    default: '#c9c9c9',
  },
  {
    name: '--nt-btn-disabled-bg-color',
    description: '禁用时按钮的背景颜色',
    default: '#fbfbfb',
  },
  {
    name: '--nt-btn-disabled-border-color',
    description: '禁用时按钮的边框颜色',
    default: '#e6e6e6',
  },
];
</script>

<style lang="less"></style>
