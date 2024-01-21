const r=`<div id="reset" class="doc-wrapper">\r
  <div class="nt-scrollbar doc-main">\r
    <p>组件默认是没有进行样式重置，但是也提供了样式重置文件，可以手动引入</p>\r
    <pre><code class="language-js">import 'neatui-vue/style/reset.css"></code></pre>\r
    <p>建议将样式重置放在最开始引入。</p>\r
    <p>重置样式包含如下内容：</p>\r
    <pre><code class="language-css">\r
    /* 一般开发网页的时候，都是按照100%来开发 */\r
    html,\r
    body {\r
      height: 100%;\r
    }\r
    body {\r
      margin: 0;\r
      font-size: 14px;\r
      line-height: 1.6;\r
      -webkit-text-size-adjust: 100%;\r
      -webkit-tap-highlight-color: transparent;\r
    }\r
    /* 修复由于 inline baseline 导致的图片下方的空白间隙问题 */\r
    img {\r
      vertical-align: top;\r
    }\r
    /* 非大面积文字排版网站通常不需要列表项，如果需要可单独设置 */\r
    ul,\r
    ol {\r
      list-style: none;\r
      margin: 0;\r
      padding: 0;\r
    }\r
    /* 统一采用盒子模式 */\r
    div {\r
      box-sizing: border-box;\r
    }\r
    /*\r
    * 去除链接默认的下划线，提高文字可读性\r
    */\r
    a {\r
      text-decoration: none;\r
      color: #4998f6;\r
      cursor: pointer;\r
      transition: color 0.3s;\r
    }\r
    a:hover {\r
      color: #5ba2f7; /* less tint(#4998f6, 10%) */\r
    }\r
    a:active {\r
      color: #64a7f7; /* less tint(#4998f6, 15%) */\r
    }\r
    </code></pre>\r
  </div>\r
</div>\r
`;export{r as default};
