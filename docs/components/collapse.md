# Collapase 折叠面板

折叠/展开的内容区域; 通常用于后台系统的首页边栏的控制面板上

## 演示

<script setup>
  import { Collapse, CollapseItem } from '../../src/index'
  import { ref } from 'vue'

  const activeNames = ref(['1'])

  const active1 = ref(['1'])
</script>

### 基础用法

可以同时展开多个面板，面板之间不影响

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 手动展开

通过传递 `v-model` 来设置展开的面板。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse v-model='active1' arrow-placement="right">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  <template #preview>
    <Collapse v-model="active1">
      <CollapseItem title="红灯" name="1" >
        <div>红灯 - 停</div>
      </CollapseItem>
      <CollapseItem title="绿灯" name="2" >
        <div>绿灯 - 行</div>
      </CollapseItem>
      <CollapseItem title="黄灯" name="3" >
        <div>黄灯 - 注意</div>
      </CollapseItem>
    </Collapse>
  </template>
  </CodePreview>
</ClientOnly>

### 手风琴效果

手风琴模式，始终只有一个面板处在激活状态。通过 `accordion` 属性来设置是否以手风琴模式显示。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse :default-expanded-names='["1"]'>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  <template #preview>
  <Collapse accordion>
    <CollapseItem title="红灯" name="1" >
      <div>红灯 - 停</div>
    </CollapseItem>
    <CollapseItem title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </CollapseItem>
    <CollapseItem title="黄灯" name="3" >
      <div>黄灯 - 提示</div>
    </CollapseItem>
  </Collapse>
  </template>
  </CodePreview>
</ClientOnly>

### 箭头位置

使用 `arrow-placement` 来设定箭头的位置。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse arrow-placement="right">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 标题栏对齐方式

通过 `header-justify` 来设置对齐方式，例如设置为 `space-between` 表明两端对齐，这个时候，配合 `arrow-placement: right` 就能实现，箭头和文本两端对齐的效果

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse arrow-placement="right" header-justify="space-between">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 背景边框

通过设置 `background` 就能实现带背景边框样式

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse arrow-placement="right" header-justify="space-between" background>
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 项间距

通过设置 `gap` 设置项间距

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse arrow-placement="right" header-justify="space-between" background gap="10px">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 圆角

通过 `border-radius` 设置边框圆角

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse arrow-placement="right" header-justify="space-between" background border-radius="5px" gap="10px">
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

### 网格模式

通过传递 `grid` 属性让折叠面板变为网格模式。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <nt-collapse
    arrow-placement="right"
    header-justify="space-between"
    background
    border-radius="5px"
    gap="10px"
    grid
  >
    <nt-collapse-item title="红灯" name="1" >
      <div>红灯 - 停</div>
    </nt-collapse-item>
    <nt-collapse-item title="绿灯" name="2" >
      <div>绿灯 - 行</div>
    </nt-collapse-item>
    <nt-collapse-item title="黄灯" name="3" >
      <div>黄灯 - 注意</div>
    </nt-collapse-item>
  </nt-collapse>
  </textarea>
  </CodePreview>
</ClientOnly>

## API

### Collapse Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v-model` | 展开的面板 | `(string\|numberr)[]` | `[]` |
| `accordion` | 手风琴模式，是否只允许展开一个面板 | `boolean`                       | `false`      |
| `arrow-placement`        | 箭头位置                           | `left` \| `right`               | `left`       |
| `header-justify`         | 面板头部, 水平对齐方式             | `flex-start` \| `space-between` | `flex-start` |
| `background`             | 是否带有背景和边框                 | `boolean`                       | `false`      |
| `gap`                    | 面板之间的间隔                     | `string`                        | -            |
| `default-expanded-names` | 默认展开的面板                     | `(string \| number)[]`          | -            |
| `border-radius`          | 边框圆角                           | `string`                        | -            |
| `grid` | 网格模式 | `boolean` | `false` |

### Collapse Events

| 名称     | 参数                                    | 说明           |
| -------- | --------------------------------------- | -------------- |
| `change` | `(expandedNames: (string \| number)[])` | 面板变化时触发 |

### CollapseItem Props

| 参数           | 说明           | 类型     | 默认值 |
| -------------- | -------------- | -------- | ------ |
| `title`        | 标题           | `string` | -      |
| `name`         | 名称, **必传** | `string` | -      |
| `header-class` | 头部样式类     | `string` | -      |
