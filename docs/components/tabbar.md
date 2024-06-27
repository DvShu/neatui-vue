# Tabbar 标签栏

使用场景如下:

1. 底部导航栏，用于在不同页面之间进行切换
2. 标签切换

## 演示

<script setup>
  import { Tabbar, TabbarItem, SearchIcon, ReductionIcon, RefreshRightIcon, RefreshLeftIcon, SortIcon } from '../../src'
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

## API

### -- Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
