# Tabbar 标签栏

使用场景如下:

1. 底部导航栏，用于在不同页面之间进行切换
2. 标签切换

## 演示

<script setup>
  import { Tabbar, TabbarItem } from '../../src'
  console.log(TabbarItem)
</script>

### 导航栏模式

将 `type` 设置为 `bar`[默认]

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <Tabbar>
      <TabbarItem>1</TabbarItem>
      <TabbarItem>2</TabbarItem>
      <TabbarItem>3</TabbarItem>
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

## API

### -- Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
