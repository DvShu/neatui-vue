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
  <lt-tabbar style="border: 1px solid #dedede">
    <lt-tabbar-item name="Reduction">
      <template #icon>
        <lt-reduction-icon />
      </template>
      <span>Reduction</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="RefreshLeft">
      <template #icon>
        <lt-refresh-left-icon />
      </template>
      <span>RefreshLeft</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="Search">
      <template #icon>
        <lt-search-icon />
      </template>
      <span>Search</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="RefreshRight">
      <template #icon>
        <lt-refresh-right-icon />
      </template>
      <span>RefreshRight</span>
    </lt-tabbar-item>
    <lt-tabbar-item name="Sort">
      <template #icon>
        <lt-sort-icon />
      </template>
      <span>Sort</span>
    </lt-tabbar-item>
  </lt-tabbar>
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
  <lt-tabbar type="bar" v-model='active2'>
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
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
  <lt-tabbar type="bar" justify-content="center">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-between">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-around">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="bar" justify-content="space-evenly">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
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
  <lt-tabbar type="card">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
  <hr />
  <lt-tabbar type="card" :gap="5">
    <lt-tabbar-item name="1">选项1</lt-tabbar-item>
    <lt-tabbar-item name="2">选项2</lt-tabbar-item>
    <lt-tabbar-item name="3">选项3</lt-tabbar-item>
  </lt-tabbar>
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

### Tabbar Props

| 参数              | 说明             | 类型                 | 默认值       |
| ----------------- | ---------------- | -------------------- | ------------ |
| `v-model`         | 选中的选项卡     | `string`             | -            |
| `type`            | 风格             | `nav`、`bar`、`card` | `nav`        |
| `justify-content` | 主轴的排列方式   | `string`             | `flex-start` |
| `gap`             | 选项卡之间的间距 | `number`             | `0`          |

### Tabbar Events

| 事件名 | 说明 | 参数 |
| `change` | 选项卡切换时触发 | `(active: string) => void` |

### TabbarItem Props

| 参数   | 说明             | 类型               | 默认值 |
| ------ | ---------------- | ------------------ | ------ |
| `name` | 选项卡的唯一标识 | `string` \| `name` | -      |

### TabbarItem Slots

| 插槽名    | 说明         |
| --------- | ------------ |
| `icon`    | 选项卡的图标 |
| `default` | 选项卡的内容 |

### Tabbar Css Vars

| 变量名                           | 说明                     | 默认值                           |
| -------------------------------- | ------------------------ | -------------------------------- |
| `--nt-tabbar-hover-color`        | 选项卡的鼠标悬浮时的颜色 | `var(--nt-primary-color-light1)` |
| `--nt-tabbar-active-color`       | 选项卡的选中时的颜色     | `var(--nt-primary-color)`        |
| `--nt-tabbar-item-gap`           | 选项卡之间的间距         | `0`                              |
| `--nt-tabbar-height`             | 选项卡的高度             | `38px`[`nav`时默认为: `50px`]    |
| `--nt-tabbar-line-color`         | 下划线的颜色             | `var(--nt-primary-color)`        |
| `--nt-tabbar-card-border-color`  | 卡片选项卡的边框颜色     | `#f5f7fa`                        |
| `--nt-tabbar-card-border-radius` | 卡片选项卡的边框圆角     | `5px`                            |
