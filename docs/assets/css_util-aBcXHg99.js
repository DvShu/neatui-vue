const r=`<div id="css_util" class="doc-wrapper">\r
  <div class="nt-scrollbar doc-main">\r
    <h2>1. Vue3 Transition 渐变</h2>\r
    <h3>引入</h3>\r
    <pre><code class="language-js">import 'neatui-vue/style/util/transition.css'"></code></pre>\r
    <h3>使用</h3>\r
    <script type="text/plain" class="language-html">\r
      <Transition name="nt-opacity">\r
        <p v-if="show">hello</p>\r
      </Transition>\r
    <\/script>\r
    <h2>2. 滚动条样式</h2>\r
    <p>如果觉得默认滚动条不好看，想修改滚动条样式</p>\r
    <h3>引入</h3>\r
    <pre><code class="language-js">import 'neatui-vue/style/util/scrollbar.css'"></code></pre>\r
    <h3>使用</h3>\r
    <script type="text/plain" class="language-html">\r
      <div class="nt-scrollbar">\r
        <p v-if="show">hello</p>\r
      </div>\r
    <\/script>\r
    <p>实际效果就跟文档的滚动条一样</p>\r
    <h3>主题定制 - 样式变量</h3>\r
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
          <td>--nt-scrollbar-bg</td>\r
          <td>滑块背景色</td>\r
          <td>#ccc</td>\r
        </tr>\r
        <tr>\r
          <td>--nt-scrollbar-width</td>\r
          <td>滑块宽度</td>\r
          <td>10px</td>\r
        </tr>\r
        <tr>\r
          <td>--nt-scrollbar-hover</td>\r
          <td>鼠标悬浮时滑块颜色</td>\r
          <td>var(--nt-primary-color)</td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
`;export{r as default};
