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
  import {
    ThemeButton,
    ThemeSelect,
    ThemeSwitch,
    ThemeRadio,
    SunIcon,
    MoonIcon,
    ThemeDefaultIcon,
    Radio,
    RadioGroup
  } from '../../src';
  import { ref, watch } from 'vue';
  import { getTheme, applyTheme } from 'ph-utils/theme'

  const theme = ref(getTheme());

  watch(theme, (val) => {
    applyTheme(val).then();
  });
</script>

### 基本使用

提供多种风格的主题切换按钮: 按钮、下拉选择、单选按钮组、开关

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html" v-pre>
  <nt-theme-button></nt-theme-button>
  <nt-theme-select class="ml-10"></nt-theme-select>
  <nt-theme-switch class="ml-10"></nt-theme-switch>
  <nt-theme-radio class="mt-15"></nt-theme-radio>
  </textarea>
  <template #preview>
    <ThemeButton></ThemeButton>
    <ThemeSelect class="ml-10"></ThemeSelect>
    <ThemeSwitch class="ml-10"></ThemeSwitch>
    <ThemeRadio class="mt-15"></ThemeRadio>
  </template>
  </CodePreview>
</ClientOnly>

> 切换主题后，如果要让应用启动的时候也应用上一次切换的主题, 需要在应用开始的地方调用 `initTheme()` 函数

```js
// main.js
import { initTheme } from 'ph-utils/theme';

// await initTheme();
initTheme().then();
```

### 自定义风格

框架内置的主题切换其实就是一个排版的样式，核心的主题切换的逻辑是调用的 `ph-utils` 库的 `theme` 模块相关函数来实现的。

通常调用的模块有: `getTheme()`、`applyTheme()`

所以完全可以自定义按钮来实现主题切换, 下面就使用 `RadioGroup + Icon` 来实现。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
    import { ref, watch } from 'vue';
    import { getTheme, applyTheme } from 'ph-utils/theme';
    // 获取当前主题
    const theme = ref(getTheme());
    // 主题改变时, 应用主题
    watch(theme, (val) => {
      applyTheme(val).then();
    });
  </script>
  <template>
    <nt-radio-group v-model="theme">
      <nt-radio value="auto" type="button">
        <nt-theme-default-icon></nt-theme-default-icon>
      </nt-radio>
      <nt-radio value="light" type="button">
        <nt-sun-icon></nt-sun-icon>
      </nt-radio>
      <nt-radio value="dark" type="button">
        <nt-moon-icon></nt-moon-icon>
      </nt-radio>
    </nt-radio-group>
  </template>
  </textarea>
  <template #preview>
  <RadioGroup v-model="theme">
    <Radio value="auto" type="button">
      <ThemeDefaultIcon></ThemeDefaultIcon>
    </Radio>
    <Radio value="light" type="button">
      <SunIcon></SunIcon>
    </Radio>
    <Radio value="dark" type="button">
      <MoonIcon></MoonIcon>
    </Radio>
  </RadioGroup>
  </template>
  </CodePreview>
</ClientOnly>
