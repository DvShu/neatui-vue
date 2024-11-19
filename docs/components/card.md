# Card 卡片

通用卡片应用，常用于后台概览页面。

<script setup>
import { Card, Button } from '../../src'
</script>

## 典型卡片

包含标题、内容、操作区域。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lt-card header-text="card title">
<template v-slot:default>

<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lt-button text>按钮</lt-button>
</template>
</lt-card>
</textarea>
<template #preview>
<Card header-text="card title">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<Button text>按钮</Button>
</template>
</Card>
</template>
</CodePreview></ClientOnly>

## 简洁卡片

只包含内容区域

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lt-card header-text="card title" :show-header="false">
<template v-slot:default>

<div>卡片内容</div>
</template>
</lt-card>
</textarea>
<template #preview>
<Card header-text="card title" :show-header="false">
<template v-slot:default>
<div>卡片内容</div>
</template>
</Card>
</template>
</CodePreview></ClientOnly>

## 完整卡片

卡片包含标题，内容、操作区域以及底部区域。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lt-card header-text="card title" show-footer footer-text="底部区域">
<template v-slot:default>

<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lt-button text>按钮</lt-button>
</template>
</lt-card>
</textarea>
<template #preview>
<Card header-text="card title" show-footer footer-text="底部区域">
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<Button text type="primary">按钮</Button>
</template>
</Card>
</template>
</CodePreview></ClientOnly>

## 卡片标题

标题和底部区域除了可以通过 `header-text` 和 `footer-text` 传递以外，也可以通过 `header` 和 `footer` `slot` 自定义 。

<ClientOnly><CodePreview>
<textarea lang="vue-html">
<lt-card :show-footer="true">
<template v-slot:header>
<span style="color: red">卡片标题</span>
</template>
<template v-slot:default>

<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<lt-button text>按钮</lt-button>
</template>
<template v-slot:footer>
<span style="color: orange">卡片标题</span>
</template>
</lt-card>
</textarea>
<template #preview>
<Card :show-footer="true">
<template v-slot:header>
<span style="color: red">卡片标题</span>
</template>
<template v-slot:default>
<div>卡片内容</div>
</template>
<template v-slot:header-extra>
<Button text>按钮</Button>
</template>
<template v-slot:footer>
<span style="color: orange">卡片标题</span>
</template>
</Card>
</template>
</CodePreview></ClientOnly>

## 栅格卡片

在系统概览页面常常和栅格进行配合。通常用于管理后台的工作台聚合展示。

关于栅格布局，框架不提供，推荐使用 [unocss](https://unocss.dev/interactive/?s=grid) 或者 [tailwindcss](https://www.tailwindcss.cn/docs/display#grid) 的 `grid` 实现

<ClientOnly><CodePreview>
<textarea lang="vue-html">

  <div class="grid grid-cols-3 gap-4">
    <lt-card header-text="卡片标题1">
      <template v-slot:default>
        <div>卡片内容1</div>
      </template>
      <template v-slot:header-extra>
        <lt-button text>按钮</lt-button>
      </template>
    </lt-card>
    <lt-card header-text="卡片标题2">
      <template v-slot:default>
        <div>卡片内容2</div>
      </template>
      <template v-slot:header-extra>
        <lt-button text>按钮</lt-button>
      </template>
    </lt-card>
    <lt-card header-text="卡片标题3">
      <template v-slot:default>
        <div>卡片内容3</div>
      </template>
      <template v-slot:header-extra>
        <lt-button text>按钮</lt-button>
      </template>
    </lt-card>
  </div>
  </textarea>
  <template #preview>
    <div class="grid grid-cols-3 gap-4">
      <Card header-text="卡片标题1">
        <template v-slot:default>
          <div>卡片内容1</div>
        </template>
        <template v-slot:header-extra>
          <Button text>按钮</Button>
        </template>
      </Card>
      <Card header-text="卡片标题2">
        <template v-slot:default>
          <div>卡片内容2</div>
        </template>
        <template v-slot:header-extra>
          <Button text>按钮</Button>
        </template>
      </Card>
      <Card header-text="卡片标题3">
        <template v-slot:default>
          <div>卡片内容3</div>
        </template>
        <template v-slot:header-extra>
          <Button text>按钮</Button>
        </template>
      </Card>
    </div>
  </template>
</CodePreview></ClientOnly>

## API

### Card Props

| 名称          | 类型      | 默认值  | 说明             |
| ------------- | --------- | ------- | ---------------- |
| `header-text` | `string`  | -       | 标题             |
| `show-header` | `boolean` | `true`  | 是否显示标题     |
| `footer-text` | `string`  | -       | 底部区域内容     |
| `show-footer` | `boolean` | `false` | 是否显示底部区域 |
| `body-class`  | `string`  | -       | 内容区域样式     |

### Card Slots

| 名称           | 说明                         |
| -------------- | ---------------------------- |
| `default`      | 内容区域内容                 |
| `header`       | 自定义标题内容               |
| `footer`       | 自定义底部区域内容           |
| `header-extra` | 自定义标题右侧内容[操作区域] |
