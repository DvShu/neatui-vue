# Collapase

Collapase

## 演示

<script setup>
  import { Collapse, CollapseItem } from '../../src/index'
</script>

### 基础用法

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
  </script>
  <template>
  </template>
  </textarea>
  <template #preview>
    <Collapse arrow-placement="right">
      <CollapseItem title="红灯" name="1" >
        <div>红灯 - 停</div>
      </CollapseItem>
      <CollapseItem title="绿灯" name="2" >
        <div>绿灯 - 行</div>
      </CollapseItem>
    </Collapse>
  </template>
  </CodePreview>
</ClientOnly>

基础用法

## API

### Collapase Props

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| x    | x    | x    | x      |
