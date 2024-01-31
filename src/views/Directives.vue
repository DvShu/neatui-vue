<template>
  <DocMain>
    <h1>Directives</h1>
    <p>提供了一些常用的自定义指令</p>
    <CodeExample>
      <PcCodePreview lang="html" :code="code" title="vClickoutside">
        <template v-slot:description>
          <p>
            点击元素外事件, 常用于需要点击元素外，关闭某个弹窗; 例如:
            Select、Tooltip
          </p>
        </template>
        <template v-slot:preview>
          <div style="width: 200px; height: 50px">
            <Input
              placeholder="输入过滤"
              v-clickoutside="handleOutside"
            ></Input>
          </div>
        </template>
      </PcCodePreview>
    </CodeExample>
  </DocMain>
</template>

<script lang="ts" setup>
import DocMain from '../app_components/DocMain.vue';
import Input from '../components/Input.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import vClickoutside from '../directives/clickoutside';

const code = `
<div style="width: 200px; height: 50px;">
  <nt-input placeholder="输入过滤" v-clickoutside="handleOutside"></nt-input>
</div>
`;

function handleOutside() {
  console.log('outside click');
}
</script>
