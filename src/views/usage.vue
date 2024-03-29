<template>
  <DocMain>
    <h1>使用介绍</h1>
    <p>
      UI库除了依赖于 Vue3 外，还依赖于
      <a href="https://gitee.com/towardly/ph/wikis/Home"
        >ph-utils: 一个自己整理的一些常用的工具类</a
      >
    </p>
    <h2>使用</h2>
    <h3>1. 安装依赖</h3>
    <SourceCode
      code="npm install ph-utils @asteres/neatui-vue"
      lang="shell"
    ></SourceCode>
    <h3>2. 按需引入</h3>
    <p>当前按需引入只支持在 Vite 中配合自动导入实现</p>
    <p>
      安装依赖<a href="https://www.npmjs.com/package/unplugin-vue-components"
        >unplugin-vue-components</a
      >
      +
      <a href="https://www.npmjs.com/package/neatui-vue-resolver"
        >neatui-vue-resolver</a
      >
    </p>
    <SourceCode
      code="npm install unplugin-vue-components unplugin-auto-import neatui-vue-resolver -D"
      lang="shell"
    ></SourceCode>
    <p>在 vite.config.ts 的 plugins 添加如下代码：</p>
    <SourceCode :code="code1"></SourceCode>
    <p>当然如果不想自动引入，也可以手动引入组件和样式文件，例如：</p>
    <SourceCode :code="code2"></SourceCode>
    <h3>3. 全局CSS样式</h3>
    <p>
      组件库的样式全部使用 CSS
      变量控制，为了让样式可控变得简单化，所以需要手动引入全局变量文件
    </p>
    <p>在入口文件，如 main.ts 中引入</p>
    <SourceCode
      code="import '@asteres/neatui-vue/style/vars.css';"
    ></SourceCode>
    <p>该变量样式文件包含如下内容</p>
    <SourceCode :code="varsCode" lang="css"></SourceCode>
    <h2>样式修改</h2>
    <h3>修改全局变量</h3>
    <p>
      这之后如果想要修改样式，在需要在该引入的地方，重新引入一个新的样式表，然后覆盖上面的样式即可
    </p>
    <p>例如，想把侧边栏宽度改为 200px, 可以通过下面这样</p>
    <ul class="ul-list">
      <li>
        <p>1. 在 main.ts 引入样式表</p>
        <SourceCode :code="code4"></SourceCode>
      </li>
      <li>
        <p>2. 在 style.css 中添加样式</p>
        <SourceCode :code="code5" lang="css"></SourceCode>
      </li>
    </ul>
    <p>通过上面就能修改，当然也能在侧边栏的样式的地方，手动覆盖变量也能实现</p>
    <h3>修改组件样式</h3>
    <p>
      组件所有的样式都基本只有一层，所以如果要修改样式，在需要套一个层级就能修改
    </p>
    <p>比如想修改 Button 样式, 只需要给根节点添加一个样式，例如: #app</p>
    <p>然后就能修改样式，如下：</p>
    <SourceCode :code="code6" lang="css"> </SourceCode>
    <h2>浏览器兼容性</h2>
    <p>所有的组件尽量保证 ios 能够兼容到11</p>
  </DocMain>
</template>

<script lang="ts" setup>
import SourceCode from '../app_components/SourceCode.vue';
import varsCode from '../../style/vars.css?raw';
import DocMain from '../app_components/DocMain.vue';

const code1 = `
import Components from 'unplugin-vue-components/vite'
import NeatuiResolver from 'neatui-vue-resolver'

plugins: [
  // ...
  AutoImport({
		resolvers: [NeatuiResolver()],
		dts: "src/auto-imports.d.ts",
	}),
  Components({
    dts: 'src/components.d.ts',
    resolvers: [NeatuiResolver()],
  }),
]
`;

const code2 = `
import { Button } from '@asteres/neatui-vue'
import '@asteres/neatui-vue/style/button/index.css'
`;

const code4 = `
import '@asteres/neatui-vue/style/vars.css';
import './style.css'
`;

const code5 = `
:root {
  --nt-border-color: red;
}
`;

const code6 = `
#app .nt-button {
  background-color: red;
}
`;
</script>
