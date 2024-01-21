const n=`<div id="Container" class="doc-wrapper">\r
  <div class="nt-scrollbar doc-main">\r
    <p>\r
      容器布局，采用了 flex\r
      布局，一般用于后台管理项目的一些常用排版，方便快速搭建页面的基本结构：\r
    </p>\r
    <ul class="ul-list">\r
      <li>\r
        nt-container：外层容器，一般用于 section\r
        标签，基本排版为水平左右排列，可以通过设置 nt-layou-verticle\r
        调整为垂直上下排列。可以嵌套\r
      </li>\r
      <li>nt-header：顶栏容器，一般用于 header 标签。</li>\r
      <li>nt-aside: 侧边栏容器，一般用于 aside 标签。</li>\r
      <li>nt-main: 主要区域容器，一般用于 main 标签。</li>\r
      <li>nt-footer: 底部，一般用于 footer 标签。</li>\r
    </ul>\r
    <p>通常在做后台管理系统的首页排版上</p>\r
    <h2>引入</h2>\r
    <p>由于使用不是特别频繁，所以没有封装为组件</p>\r
    <p>样式需要单独引入</p>\r
    <pre><code class="language-js">import 'neatui-vue/style/container.css'</code></pre>\r
    <p>在使用时，需要手动引入</p>\r
    <h2>常见布局</h2>\r
    <h3>1. 上下两栏排版</h3>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container nt-layout-vertical">\r
            <header class="nt-header">Header</header>\r
            <main class="nt-main">Main</main>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container nt-layout-vertical">\r
          <header class="nt-header">Header</header>\r
          <main class="nt-main">Main</main>\r
        </section>\r
      </div>\r
    </div>\r
    <h3>2. 左右两列布局</h3>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container">\r
            <aside class="nt-aside">Aside</aside>\r
            <main class="nt-main">Main</main>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container">\r
          <aside class="nt-aside">Aside</aside>\r
          <main class="nt-main">Main</main>\r
        </section>\r
      </div>\r
    </div>\r
    <h3>3. 上下两栏，下栏又包含左右两列排版</h3>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container nt-layout-vertical">\r
            <header class="nt-header">Header</header>\r
            <section class="nt-container">\r
              <aside class="nt-aside">Aside</aside>\r
              <main class="nt-main">Main</main>\r
            </section>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container nt-layout-vertical">\r
          <header class="nt-header">Header</header>\r
          <section class="nt-container">\r
            <aside class="nt-aside">Aside</aside>\r
            <main class="nt-main">Main</main>\r
          </section>\r
        </section>\r
      </div>\r
    </div>\r
    <h3>4. 后台管理系统模板</h3>\r
    <p>\r
      在 header 里面放点东西就成了，就成了经典的后台管理系统的模板,\r
      左右是图标，右边是登录用户\r
    </p>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container nt-layout-vertical">\r
            <header class="nt-header">\r
              <a href="#">NEATUI</a>\r
              <div>登录用户</div>\r
            </header>\r
            <section class="nt-container">\r
              <aside class="nt-aside">Aside</aside>\r
              <main class="nt-main">Main</main>\r
            </section>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container nt-layout-vertical">\r
          <header class="nt-header">\r
            <a href="#">NEATUI</a>\r
            <div>admin</div>\r
          </header>\r
          <section class="nt-container">\r
            <aside class="nt-aside">Aside</aside>\r
            <main class="nt-main">Main</main>\r
          </section>\r
        </section>\r
      </div>\r
    </div>\r
    <h3>5. 左右两列，右边又包含上下两栏排版</h3>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container">\r
            <aside class="nt-aside">Aside</aside>\r
            <section class="nt-container nt-layout-vertical">\r
              <header class="nt-header">Header</header>\r
              <main class="nt-main">Main</main>\r
            </section>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container">\r
          <aside class="nt-aside">Aside</aside>\r
          <section class="nt-container nt-layout-vertical">\r
            <header class="nt-header">Header</header>\r
            <main class="nt-main">Main</main>\r
          </section>\r
        </section>\r
      </div>\r
    </div>\r
    <h3>6. 上中下三栏</h3>\r
    <div class="pc-doc-previewer">\r
      <div class="pc-doc">\r
        <script type="text/plain" class="language-html">\r
          <section class="nt-container nt-layout-vertical">\r
            <header class="nt-header">Header</header>\r
            <main class="nt-main">Main</main>\r
            <footer class="nt-footer">Footer</footer>\r
          </section>\r
        <\/script>\r
      </div>\r
      <div class="pc-previewer">\r
        <section class="nt-container nt-layout-vertical">\r
          <header class="nt-header">Header</header>\r
          <main class="nt-main">Main</main>\r
          <footer class="nt-footer">Footer</footer>\r
        </section>\r
      </div>\r
    </div>\r
    <h2>主题定制</h2>\r
    <h3>样式变量</h3>\r
    <p>组件提供了下列 CSS 变量，可用于自定义样式，</p>\r
    <table class="nt-table">\r
      <thead>\r
        <tr>\r
          <th>名称</th>\r
          <th>描述</th>\r
          <th>默认值</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr>\r
          <td>--nt-header-height</td>\r
          <td>header高度</td>\r
          <td>50px</td>\r
        </tr>\r
        <tr>\r
          <td>--nt-footer-height</td>\r
          <td>footer高度</td>\r
          <td>var(--nt-header-height, 50px)</td>\r
        </tr>\r
        <tr>\r
          <td>--nt-aside-width</td>\r
          <td>侧边栏宽度</td>\r
          <td>240px</td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
`;export{n as default};
