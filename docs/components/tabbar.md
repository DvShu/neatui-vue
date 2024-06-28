# Tabbar 标签栏

使用场景如下:

1. 底部导航栏，用于在不同页面之间进行切换
2. 标签切换

## 演示

<script setup>
  import { ref } from 'vue'
  import {
    Tabbar,
    TabbarItem,
    SearchIcon,
    ReductionIcon,
    RefreshRightIcon,
    RefreshLeftIcon,
    SortIcon
  } from '../../src'

  const active2 = ref('2')
</script>

### 导航栏模式

将 `type` 设置为 `nav`[默认]

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tabbar style="border: 1px solid #dedede">
    <nt-tabbar-item name="Reduction">
      <template #icon>
        <nt-reduction-icon />
      </template>
      <span>Reduction</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="RefreshLeft">
      <template #icon>
        <nt-refresh-left-icon />
      </template>
      <span>RefreshLeft</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="Search">
      <template #icon>
        <nt-search-icon />
      </template>
      <span>Search</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="RefreshRight">
      <template #icon>
        <nt-refresh-right-icon />
      </template>
      <span>RefreshRight</span>
    </nt-tabbar-item>
    <nt-tabbar-item name="Sort">
      <template #icon>
        <nt-sort-icon />
      </template>
      <span>Sort</span>
    </nt-tabbar-item>
  </nt-tabbar>
  </textarea>
  <template #preview>
    <Tabbar style="border: 1px solid #dedede">
      <TabbarItem name="Reduction">
        <template #icon>
          <ReductionIcon />
        </template>
        <span>Reduction</span>
      </TabbarItem>
      <TabbarItem name="RefreshLeft">
        <template #icon>
          <RefreshLeftIcon />
        </template>
        <span>RefreshLeft</span>
      </TabbarItem>
      <TabbarItem name="Search">
        <template #icon>
          <SearchIcon />
        </template>
        <span>Search</span>
      </TabbarItem>
      <TabbarItem name="RefreshRight">
        <template #icon>
          <RefreshRightIcon />
        </template>
        <span>RefreshRight</span>
      </TabbarItem>
      <TabbarItem name="Sort">
        <template #icon>
          <SortIcon />
        </template>
        <span>Sort</span>
      </TabbarItem>
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

### 选项卡

基础的、简洁的选项卡，初始选中第2项

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <template>
  <nt-tabbar type="bar" v-model='active2'>
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  </template>
  <script setup>
  import { ref } from 'vue';
  const active2 = ref('2')
  </script>
  </textarea>
  <template #preview>
    <Tabbar type="bar" v-model='active2'>
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
      <TabbarItem name="4">选项4</TabbarItem>
      <TabbarItem name="5">选项5</TabbarItem>
      <TabbarItem name="6">选项6</TabbarItem>
      <TabbarItem name="7">选项7</TabbarItem>
      <TabbarItem name="8">选项8</TabbarItem>
      <TabbarItem name="9">选项9</TabbarItem>
      <TabbarItem name="10">选项10</TabbarItem>
      <TabbarItem name="11">选项11</TabbarItem>
      <TabbarItem name="12">选项12</TabbarItem>
      <TabbarItem name="13">选项13</TabbarItem>
      <TabbarItem name="14">选项14</TabbarItem>
      <TabbarItem name="15">选项15</TabbarItem>
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

## API

### -- Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
