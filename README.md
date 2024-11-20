# litos-ui-vue

`Neat UI` 是一个基于 `Vue3` 的轻量级的 `UI` 组件库，提供基础的 `UI` 组件，方便开发。

## 使用

### 安装依赖

1. 安装 UI 库

```shell
npm install litos-ui-vue
```

2. 安装自动导入插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import litos-ui-vue-resolver
```

3. 修改 Vite 配置

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import LitosUiResolver from 'litos-ui-vue-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [LitosUiResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [LitosUiResolver()],
      dts: 'src/components.d.ts',
    }),
  ],
});
```

4. 引入全局 CSS 变量文件

在 `main.ts` 中引入全局 CSS 变量文件

```js
<<<<<<< HEAD
<<<<<<< HEAD
import 'litos-ui-vue/style/vars.css';
=======
import '@asteres/litos-ui-vue/style/vars.css';
>>>>>>> 0c57b7ee (rename: litos-ui-vue)
=======
import 'litos-ui-vue/style/vars.css';
>>>>>>> f2e6fa2a (docs: 修复文档)
```

## 文档

<<<<<<< HEAD
<<<<<<< HEAD
[中文文档](https://dvshu.github.io/litos-ui-vue/)
=======
[中文 文档](https://dvshu.github.io/litos-ui-vue/)
>>>>>>> 0c57b7ee (rename: litos-ui-vue)
=======
[中文文档](https://dvshu.github.io/litos-ui-vue/)
>>>>>>> f2e6fa2a (docs: 修复文档)

## [更新记录](https://github.com/DvShu/litos-ui-vue/blob/main/CHANGELOG.md)

## LICENSE

litos-ui-vue is open source software licensed as [MulanPSL-2.0](https://github.com/DvShu/litos-ui-vue/blob/main/LICENSE).
