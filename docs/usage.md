# 使用介绍

UI库除了依赖于 Vue3 外，还依赖于 [ph-utils](https://gitee.com/towardly/ph/wikis/Home)

## 使用

### 1. 安装依赖

```sh
npm install ph-utils @asteres/neatui-vue
```

### 2. 按需引入

当前按需引入只支持在 `Vite` 中配合自动导入实现；[unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)、[unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)、[neatui-vue-resolver](https://www.npmjs.com/package/neatui-vue-resolver)。

```sh
npm install unplugin-vue-components unplugin-auto-import neatui-vue-resolver -D
```

在 `vite.config.ts` 的 `plugins` 添加如下代码：

```ts
import Components from 'unplugin-vue-components/vite';
import NeatuiResolver from 'neatui-vue-resolver';

plugins: [
  // ...
  AutoImport({
    resolvers: [NeatuiResolver()],
    dts: 'src/auto-imports.d.ts',
  }),
  Components({
    dts: 'src/components.d.ts',
    resolvers: [NeatuiResolver()],
  }),
];
```

当然如果不想自动引入，也可以手动引入组件和样式文件，例如：

```ts
import { Button } from '@asteres/neatui-vue';
import '@asteres/neatui-vue/style/button/index.css';
```

### 3. 全局CSS样式

组件库的样式全部使用 `CSS` 变量控制，为了让样式可控变得简单化，所以需要手动引入全局变量文件；在入口文件，如 `main.ts` 中引入

```ts
import '@asteres/neatui-vue/style/vars.css';
```

该变量样式文件包含如下内容

<<< ../style/vars.css

## 样式修改

### 修改全局变量

如果想要修改样式，在需要在该引入的地方，重新引入一个新的样式表，然后覆盖上面的样式即可

例如，想把侧边栏宽度改为 `200px`, 可以通过下面这样

1. 在 `main.ts` 引入样式表

```ts
import '@asteres/neatui-vue/style/vars.css';
import './style.css';
```

2. 在 `style.css` 中添加样式

```css
:root {
  --nt-border-color: red;
}
```

通过上面就能修改，当然也能在侧边栏的样式的地方，手动覆盖变量也能实现

### 修改主题色

通常只需要覆盖 `--nt-primary-color` 相关 `CSS` 变量就能实现主题色覆盖，例如: `--nt-primary-color`、`--nt-primary-color-light1`

```css
:root {
  --nt-primary-color: #722ed1;
  --nt-primary-color-light1: #9254de;
  --nt-primary-color-light2: #b37feb;
  --nt-primary-color-light3: #d3adf7;
  --nt-primary-color-light4: #efdbff;
  --nt-primary-color-light5: #f9f0ff;
  --nt-primary-color-dark1: #531dab;
}
```

> 也可以通过 `ph-utils/theme` 工具类的 `initColorTheme、toggleColorTheme、applyColorTheme` 函数来实现主题色切换

### 修改组件样式

组件所有的样式都基本只有一层，所以如果要修改样式，在需要套一个层级就能修改

比如想修改 `Button` 样式, 只需要给根节点添加一个样式，例如: `#app`；然后就能修改样式，如下：

```css
#app .nt-button {
  background-color: red;
}
```

## 浏览器兼容性

所有的组件尽量保证 `ios` 能够兼容到 `11`
