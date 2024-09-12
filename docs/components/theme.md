# Theme 主题切换

通过切换主题来减轻长时间使用屏幕带来的视觉疲劳

## 演示

> 1. 主题切换是通过 [ph-utils](https://www.npmjs.com/package/ph-utils) 工具库的 `theme` 工具类控制
> 2. 为了每次切换主题后，重新加载能够生效，需要在应用开始的时候, 执行 `initTheme()` 方法

::: code-group

```js [main.ts]
import { initTheme } from 'ph-utils/theme';

initTheme().then();

createApp(App).use(router).mount('#app');
```

:::

<script setup>
  import { ThemeButton, ThemeSelect } from '../../src'
</script>

### 基本使用

提供多种风格的主题切换按钮: 按钮、下拉选择、单选按钮组、开关

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <ThemeButton></ThemeButton>
    <ThemeSelect class="ml-10"></ThemeSelect>
  </template>
  </CodePreview>
</ClientOnly>
