<template>
  <DocMain>
    <h1>Tooltip 文字提示</h1>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <p>
      可用来代替系统默认的 title
      提示，通常用于针对一个图标按钮的鼠标悬浮显示简单说明
    </p>
    <p>该提示使用纯 CSS 实现，所以气泡框位置通常需要手动设置</p>
    <CodeExample>
      <PcCodePreview
        lang="html"
        :code="code1"
        title="基础用法"
        class="tooltip-demo"
      >
        <template v-slot:description>
          <p>
            使用 title 属性来决定 hover 时的提示信息。 由 placement
            属性决定展示位置:
            topStart、top[默认]、topEnd、bottomStart、bottom、bottomEnd
          </p>
        </template>
      </PcCodePreview>

      <PcCodePreview
        lang="html"
        :code="code2"
        title="自定义提示"
        class="tooltip-demo"
      >
        <template v-slot:description>
          <p>
            通过使用 title 插槽来渲染自定义的提示; 如果同时传递 title 和
            插槽，则 title 属性为准
          </p>
        </template>
        <template v-slot:preview>
          <Tooltip placement="topStart">
            <Button>自定义提示</Button>
            <template v-slot:title>
              <span style="color: red">custome propmt text</span>
            </template>
          </Tooltip>
        </template>
      </PcCodePreview>
    </CodeExample>
    <ThemeTable :rows="vars"></ThemeTable>
  </DocMain>
</template>

<script lang="ts" setup>
import ThemeTable from '../app_components/ThemeTable.vue';
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Tooltip from '../components/Tooltip.vue';
import Button from '../components/Button.vue';

const code1 = `
<div class="demo-row">
  <nt-tooltip placement="topStart" title="prompt text"><nt-button>topStart</nt-button></nt-tooltip>
  <nt-tooltip placement="top" title="prompt text"><nt-button>top</nt-button></nt-tooltip>
  <nt-tooltip placement="topEnd" title="prompt text"><nt-button>topEnd</nt-button></nt-tooltip>
</div>
<div class="demo-row mt-10">
  <nt-tooltip placement="bottomStart" title="prompt text"><nt-button>bottomStart</nt-button></nt-tooltip>
  <nt-tooltip placement="bottom" title="prompt text"><nt-button>bottom</nt-button></nt-tooltip>
  <nt-tooltip placement="bottomEnd" title="prompt text"><nt-button>bottomEnd</nt-button></nt-tooltip>
</div>
`;

const code2 = `
<nt-tooltip>
  <nt-button>自定义提示</nt-button>
  <template v-slot:title>
    <span style="color: red;">custome propmt text</span>
  </template>
</nt-tooltip>
`;

const vars = [
  {
    name: '',
    description: '',
    default: '',
  },
];
</script>

<style lang="less">
.tooltip-demo {
  .demo-row {
    display: flex;
    justify-content: space-between;
  }
}
</style>
