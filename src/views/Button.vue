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
  </DocMain>
</template>

<script setup lang="ts">
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Button from '../components/Button.vue';
import SearchIcon from '../components/SearchIcon.vue';

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
</script>

<style lang="less"></style>
