<template>
  <DocMain>
    <h1>Image</h1>
    <p></p>
    <Image
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      width="100"
      height="100"
      fit="contain"
    ></Image>
    <CodeExample>
      <PcCodePreview lang="html" code="" title="基础用法">
        <template v-slot:description>
          <p></p>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Image Props"></PropTable>
    <SlotTable :data="slotData" title="Image Slots"></SlotTable>
    <MethodTable :data="methodData" title="Image Methods"></MethodTable>
    <ThemeTable :rows="vars"></ThemeTable>
  </DocMain>
</template>

<script lang="ts" setup>
import ThemeTable from '../app_components/ThemeTable.vue';
import Image from '../components/Image.vue';
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
