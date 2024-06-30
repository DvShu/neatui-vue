# Tabs 标签页

选项卡切换组件；其实这个模块的内容就是 [Tabbar 标签栏](/components/tabbar) + 内容区域；所以就没有单独抽取为组件，转而提供 `css` 样式表，通过手动引入样式就能达到效果。

## 引入

```js
import '@asteres/neatui-vue/style/util/tabs.css';
```

## 演示

<script setup>
import { ref } from 'vue';
import { Tabbar, TabbarItem } from '../../src'

const active = ref('1');
</script>

### 基础用法

基础的、简洁的标签页。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    const active = ref('1');
  </script>
  <template>
  <div class="nt-tabs">
    <nt-tabbar v-model="active" type="bar">
      <nt-tabbar-item name="1">标签一</nt-tabbar-item>
      <nt-tabbar-item name="2">标签二</nt-tabbar-item>
    </nt-tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </textarea>
  <template #preview>
  <div class="nt-tabs">
    <Tabbar v-model="active" type="bar">
      <TabbarItem name="1">标签一</TabbarItem>
      <TabbarItem name="2">标签二</TabbarItem>
    </Tabbar>
    <div class="nt-tabs-content">
      <div v-if="active === '1'">标签一</div>
      <div v-if="active === '2'">标签二</div>
    </div>
  </div>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
