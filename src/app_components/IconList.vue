<template>
  <div class="icon-list">
    <div
      v-for="item in components"
      :key="item.name"
      class="icon-item center"
      @click="handleCopyIcon(item.name)"
    >
      <component
        :is="item.component"
        :class="{
          'nt-rotate-anim': item.name.includes('loading'),
        }"
      ></component>
      <span class="icon-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';
import { snakeCaseStyle } from 'ph-utils';
import { copy } from 'ph-utils/copy';
import Message from '../components/message/index';

const modules = import.meta.glob('../components/icon/*.vue');
const components: { name: string; component: Component }[] = [];
for (const path in modules) {
  if (Object.hasOwn(modules, path)) {
    let name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    if (name !== 'IconFont' && name !== 'Base') {
      name = snakeCaseStyle(name);
      if (name !== '' && name !== '') {
        components.push({
          name,
          component: defineAsyncComponent(modules[path] as any),
        });
      }
    }
  }
}

async function handleCopyIcon(name: string) {
  await copy(`<nt-${name}-icon />`);
  Message.success('复制成功');
}
</script>

<style lang="less"></style>
../components/message/index
