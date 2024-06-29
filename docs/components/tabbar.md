# Tabbar 标签栏

使用场景如下:

1. 底部导航栏，用于在不同页面之间进行切换
2. 标签切换
3. 选项卡

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
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

### 排列方式

主轴的排列方式，只对 `bar` 类型生效。只需要将 `justify-content` 的属性设置为 [justify-content可用值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#%E5%80%BC) 即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tabbar type="bar" justify-content="center">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-between">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-around">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="bar" justify-content="space-evenly">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  </textarea>
  <template #preview>
    <Tabbar type="bar" justify-content="center">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
    <hr />
    <Tabbar type="bar" justify-content="space-between">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
    <hr />
    <Tabbar type="bar" justify-content="space-around">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
    <hr />
    <Tabbar type="bar" justify-content="space-evenly">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

### 卡片式

具有卡片风格的标签。只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。
同时可以通过 `gap` 调整选项卡之间的间距。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-tabbar type="card">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  <hr />
  <nt-tabbar type="card" :gap="5">
    <nt-tabbar-item name="1">选项1</nt-tabbar-item>
    <nt-tabbar-item name="2">选项2</nt-tabbar-item>
    <nt-tabbar-item name="3">选项3</nt-tabbar-item>
  </nt-tabbar>
  </textarea>
  <template #preview>
    <Tabbar type="card">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
    <hr />
    <Tabbar type="card" :gap="5">
      <TabbarItem name="1">选项1</TabbarItem>
      <TabbarItem name="2">选项2</TabbarItem>
      <TabbarItem name="3">选项3</TabbarItem>
    </Tabbar>
  </template>
  </CodePreview>
</ClientOnly>

## API

### -- Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
