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
    </CodeExample>
  </DocMain>
</template>

<script lang="ts" setup>
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';

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
</script>
