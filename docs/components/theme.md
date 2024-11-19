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
    RadioGroup,
    ThemeColor
  } from '../../src';
  import SourceCode from '../../src/app_components/SourceCode.vue'
  import { ref, watch, onMounted } from 'vue';

  const theme = ref('');
  const code = ref('');

  watch(theme, (val) => {
    import('ph-utils/theme').then((module) => {
      return module.applyTheme(val);
    })
  });

  onMounted(() => {
    import('ph-utils/theme').then((module) => {
      theme.value = module.getTheme();
    })
  })

  function handleColorChange() {
    const $style = document.getElementById('color-theme-style');
    if ($style != null) {
      let tmpCode = $style.innerHTML;
      tmpCode = tmpCode.replace('{', ' {\r\n  ').replaceAll(';', ';\r\n  ').replace('  }', '}')
      code.value = tmpCode;
    }
  }
</script>

### 基本使用

提供多种风格的主题切换按钮: 按钮、下拉选择、单选按钮组、开关

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html" v-pre>
  <lt-theme-button></lt-theme-button>
  <lt-theme-select class="ml-10"></lt-theme-select>
  <lt-theme-switch class="ml-10"></lt-theme-switch>
  <lt-theme-radio class="mt-15"></lt-theme-radio>
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
    <lt-radio-group v-model="theme">
      <lt-radio value="auto" type="button">
        <lt-theme-default-icon></lt-theme-default-icon>
      </lt-radio>
      <lt-radio value="light" type="button">
        <lt-sun-icon></lt-sun-icon>
      </lt-radio>
      <lt-radio value="dark" type="button">
        <lt-moon-icon></lt-moon-icon>
      </lt-radio>
    </lt-radio-group>
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

### 更改主题色

除了修改主题风格，还可以修改主题色，通过修改 `ThemeColor` 来实现。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html" v-pre>
  <lt-theme-color></lt-theme-color>
  </textarea>
  <template #preview>
    <ThemeColor @change='handleColorChange'></ThemeColor>
  </template>
  </CodePreview>
</ClientOnly>

生成的主题色代码如下:

<ClientOnly>
<SourceCode :source-code="code"><textarea lang="css">
:root {
  --nt-primary-color: #722ed1;
  --nt-primary-color-light1: #9254de;
  --nt-primary-color-light2: #b37feb;
  --nt-primary-color-light3: #d3adf7;
  --nt-primary-color-light4: #efdbff;
  --nt-primary-color-light5: #f9f0ff;
  --nt-primary-color-dark1: #531dab;
}
</textarea></SourceCode>
</ClientOnly>

> 跟主题模式一样，如果想要再下次启动时也应用选择的主题色，需要在应用启动时，调用 `initColorTheme()` 函数

```js
// main.js
import { initColorTheme } from 'ph-utils/theme';

initColorTheme().then();
```
