## 1. `Vue3 Transition` 渐变

### 1.1 引入样式

```ts
import '@asteres/neatui-vue/style/util/transition.css';
```

<script setup>
import SourceCode from '../src/app_components/SourceCode.vue';
import CodePreview from '../src/app_components/CodePreview.vue';
import { Polygon } from '../src';
</script>

### 1.2 使用

所有的渐变都支持传递 `--nt-transition-times` 控制时长, 默认为 `0.3s`

#### 1.2.1 `Opacity`

普通渐变进入/退出

<SourceCode>
<template v-pre>a<nt-button class="d" a=1 c>sf</nt-button>d</template>
</SourceCode>
