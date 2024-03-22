<template>
  <DocMain>
    <h1>ImagePreview</h1>
    <p></p>
    <h2>演示</h2>
    <ImagePreview></ImagePreview>
    <CodeExample>
      <PcCodePreview lang="html" code="" title="基础用法">
        <template v-slot:description>
          <p></p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="ImagePreview Props"></PropTable>
    <SlotTable :data="slotData" title="ImagePreview Slots"></SlotTable>
    <MethodTable :data="methodData" title="ImagePreview Methods"></MethodTable>
    <ThemeTable :rows="vars"></ThemeTable>
  </DocMain>
</template>

<script lang="ts" setup>
import ThemeTable from '../app_components/ThemeTable.vue';
import ImagePreview from '../components/ImagePreview.vue';
import DocMain from '../app_components/DocMain.vue';

import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import PropTable from '../app_components/PropTable.vue';
import SlotTable from '../app_components/SlotTable.vue';
import MethodTable from '../app_components/MethodTable.vue';
const vars = [{ name: '', description: '', default: '' }];
const propData = [{ name: '', description: '', default: '', type: '' }];
const slotData = [{ name: 'default', param: '()', description: '' }];
const methodData = [{ name: '', param: '', description: '', return: '' }];
</script>
