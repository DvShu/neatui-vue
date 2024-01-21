const r=`<div id="usage" class="doc-wrapper">\r
  <div class="nt-scrollbar doc-main">\r
    <h2>依赖介绍</h2>\r
    <p>\r
      UI库除了依赖于 Vue3 外，还依赖于\r
      <a href="https://gitee.com/towardly/ph/wikis/Home"\r
        >ph-utils: 一个自己整理的一些常用的工具类</a\r
      >\r
    </p>\r
    <h2>使用</h2>\r
    <h3>1. 安装依赖</h3>\r
    <pre><code class="language-shell">npm install ph-utils @asteres/neatui-vue</code></pre>\r
    <h3>2. 按需引入</h3>\r
    <p>当前按需引入只支持在 Vite 中配合自动导入实现</p>\r
    <p>\r
      安装依赖<a href="https://www.npmjs.com/package/unplugin-vue-components"\r
        >unplugin-vue-components</a\r
      >\r
      +\r
      <a href="https://www.npmjs.com/package/neatui-vue-resolver"\r
        >neatui-vue-resolver</a\r
      >\r
    </p>\r
    <pre><code class="language-shell">npm install unplugin-vue-components neatui-vue-resolver -D</code></pre>\r
    <p>在 vite.config.ts 的 plugins 添加如下代码：</p>\r
    <pre><code class="language-js">\r
      import Components from 'unplugin-vue-components/vite'\r
      import NeatuiResolver from 'neatui-vue-resolver'\r
\r
      plugins: [\r
        // ...\r
        Components({\r
          dts: 'src/components.d.ts',\r
          resolvers: [NeatuiResolver()],\r
        }),\r
      ]\r
    </code></pre>\r
    <p>当然如果不想自动引入，也可以手动引入组件和样式文件，例如：</p>\r
    <pre><code class="language-js">\r
      import { Button } from 'neatui-vue'\r
      import 'neatui-vue/style/button/index.css'\r
    </code></pre>\r
    <h3>3. 全局CSS样式</h3>\r
    <p>组件库的样式全部使用 CSS 变量控制，为了让样式可控变得简单化，所以需要手动引入全局变量文件</p>\r
    <p在入口文件，如 main.ts 中引入</p>\r
    <pre><code class="language-js">import 'neatui-vue/style/vars.css';</code></pre>\r
    <p>该变量样式文件包含如下内容</p>\r
    <pre><code class="language-css">\r
      :root {\r
        /* button、input 元素高度 */\r
        --nt-form-edit-height: 32px;\r
        /* 主题(primary)颜色 */\r
        --nt-primary-color: #4998f6;\r
        /* 表示错误(error)的颜色 */\r
        --nt-error-color: #ed3f13;\r
        /* 表示成功(success)的颜色 */\r
        --nt-success-color: #19bf6c;\r
        /* 表示警告(warn)的颜色 */\r
        --nt-warn-color: #f90;\r
        /* 表示信息(info)的颜色 */\r
        --nt-info-color: #999;\r
        /* header高度 */\r
        --nt-header-height: 50px;\r
        /* 侧边栏宽度 */\r
        --nt-aside-width: 240px;\r
      }\r
    </code></pre>\r
    <h2>样式修改</h2>\r
    <h3>修改全局变量</h3>\r
    <p>这之后如果想要修改样式，在需要在该引入的地方，重新引入一个新的样式表，然后覆盖上面的样式即可</p>\r
    <p>例如，想把侧边栏宽度改为 200px, 可以通过下面这样</p>\r
    <ul class="ul-list">\r
      <li>\r
        <p>1. 在 main.ts 引入样式表</p>\r
        <pre><code class="language-js">\r
        import 'neatui-vue/style/vars.css';\r
        import './style.css'\r
        </code></pre>\r
      </li>\r
      <li>\r
        <p>2. 在 style.css 中添加样式</p>\r
        <pre><code class="language-css">\r
        :root {\r
          --nt-aside-width: 200px;\r
        }\r
        </code></pre>\r
      </li>\r
    </ul>\r
    <p>通过上面就能修改，当然也能在侧边栏的样式的地方，手动覆盖变量也能实现</p>\r
    <h3>修改组件样式</h3>\r
    <p>组件所有的样式都基本只有一层，所以如果要修改样式，在需要套一个层级就能修改</p>\r
    <p>比如想修改 Button 样式, 只需要给根节点添加一个样式，例如: #app</p>\r
    <p>然后就能修改样式，如下：</p>\r
    <pre><code class="language-css">\r
      #app .nt-button {\r
        background-color: red;\r
      }\r
    </code></pre>\r
    <h2>浏览器兼容性</h2>\r
    <p>所有的组件尽量保证 ios 能够兼容到11</p>\r
  </div>\r
</div>\r
`;export{r as default};
