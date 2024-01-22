<template>
  <div id="Container" class="doc-wrapper">
    <div class="nt-scrollbar doc-main">
      <p>
        容器布局，采用了 flex
        布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：
      </p>
      <ul class="ul-list">
        <li>
          nt-container：外层容器，一般用于 section
          标签，基本排版为水平左右排列，可以通过设置 nt-layou-verticle
          调整为垂直上下排列。可以嵌套
        </li>
        <li>nt-header：顶栏容器，一般用于 header 标签。</li>
        <li>nt-aside: 侧边栏容器，一般用于 aside 标签。</li>
        <li>nt-main: 主要区域容器，一般用于 main 标签。</li>
        <li>nt-footer: 底部，一般用于 footer 标签。</li>
      </ul>
      <p>通常在做后台管理系统的首页排版上</p>
      <h2>引入</h2>
      <p>由于使用不是特别频繁，所以没有封装为组件</p>
      <p>样式需要单独引入</p>
      <SourceCode
        lang="js"
        code="import 'neatui-vue/style/container.css'"
      ></SourceCode>
      <p>在使用时，需要手动引入</p>
      <h2>常见布局</h2>
      <h3>1. 上下两栏排版</h3>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code1"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container nt-layout-vertical">
            <header class="nt-header">Header</header>
            <main class="nt-main">Main</main>
          </section>
        </div>
      </div>
      <h3>2. 左右两列布局</h3>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code2"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container">
            <aside class="nt-aside">Aside</aside>
            <main class="nt-main">Main</main>
          </section>
        </div>
      </div>
      <h3>3. 上下两栏，下栏又包含左右两列排版</h3>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code3"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container nt-layout-vertical">
            <header class="nt-header">Header</header>
            <section class="nt-container">
              <aside class="nt-aside">Aside</aside>
              <main class="nt-main">Main</main>
            </section>
          </section>
        </div>
      </div>
      <h3>4. 后台管理系统模板</h3>
      <p>
        在 header 里面放点东西就成了，就成了经典的后台管理系统的模板,
        左右是图标，右边是登录用户
      </p>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code4"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container nt-layout-vertical">
            <header class="nt-header">
              <a href="#">NEATUI</a>
              <div>admin</div>
            </header>
            <section class="nt-container">
              <aside class="nt-aside">Aside</aside>
              <main class="nt-main">Main</main>
            </section>
          </section>
        </div>
      </div>
      <h3>5. 左右两列，右边又包含上下两栏排版</h3>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code5"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container">
            <aside class="nt-aside">Aside</aside>
            <section class="nt-container nt-layout-vertical">
              <header class="nt-header">Header</header>
              <main class="nt-main">Main</main>
            </section>
          </section>
        </div>
      </div>
      <h3>6. 上中下三栏</h3>
      <div class="pc-doc-previewer">
        <div class="pc-doc">
          <SourceCode lang="html" :code="code6"></SourceCode>
        </div>
        <div class="pc-previewer">
          <section class="nt-container nt-layout-vertical">
            <header class="nt-header">Header</header>
            <main class="nt-main">Main</main>
            <footer class="nt-footer">Footer</footer>
          </section>
        </div>
      </div>
      <h2>主题定制</h2>
      <h3>样式变量</h3>
      <p>组件提供了下列 CSS 变量，可用于自定义样式，</p>
      <table class="nt-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>描述</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--nt-header-height</td>
            <td>header高度</td>
            <td>50px</td>
          </tr>
          <tr>
            <td>--nt-footer-height</td>
            <td>footer高度</td>
            <td>var(--nt-header-height, 50px)</td>
          </tr>
          <tr>
            <td>--nt-aside-width</td>
            <td>侧边栏宽度</td>
            <td>240px</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SourceCode from '../app_components/SourceCode.vue';

const code1 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
</section>
`;

const code2 = `
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <main class="nt-main">Main</main>
</section>
`;

const code3 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`;

const code4 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">
    <a href="#">NEATUI</a>
    <div>登录用户</div>
  </header>
  <section class="nt-container">
    <aside class="nt-aside">Aside</aside>
    <main class="nt-main">Main</main>
  </section>
</section>
`;

const code5 = `
<section class="nt-container">
  <aside class="nt-aside">Aside</aside>
  <section class="nt-container nt-layout-vertical">
    <header class="nt-header">Header</header>
    <main class="nt-main">Main</main>
  </section>
</section>
`;

const code6 = `
<section class="nt-container nt-layout-vertical">
  <header class="nt-header">Header</header>
  <main class="nt-main">Main</main>
  <footer class="nt-footer">Footer</footer>
</section>
`;
</script>
