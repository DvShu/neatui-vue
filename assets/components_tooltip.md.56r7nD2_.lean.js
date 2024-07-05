import{k as r,_ as c}from"./chunks/theme.CbXG-kZp.js";import{c as s,l as o,w as e,ab as i,b as t,G as n,U as p,o as _,z as l}from"./chunks/framework.MCgil6G4.js";const h=i("",6),m=t("textarea",{lang:"vue-html"},`
  <div class="flex-between">
    <nt-tooltip placement="topStart" title="prompt text">
      <nt-button>topStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="top" title="prompt text">
      <nt-button>top</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="topEnd" title="prompt text">
      <nt-button>topEnd</nt-button>
    </nt-tooltip>
  </div>
  <div class="flex-between mt-15">
    <nt-tooltip placement="bottomStart" title="prompt text">
      <nt-button>bottomStart</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottom" title="prompt text">
      <nt-button>bottom</nt-button>
    </nt-tooltip>
    <nt-tooltip placement="bottomEnd" title="prompt text">
      <nt-button>bottomEnd</nt-button>
    </nt-tooltip>
  </div>
  `,-1),u=t("h3",{id:"自定义提示",tabindex:"-1"},[n("自定义提示 "),t("a",{class:"header-anchor",href:"#自定义提示","aria-label":'Permalink to "自定义提示"'},"​")],-1),b=t("p",null,[n("通过使用 "),t("code",null,"title"),n(" 插槽来渲染自定义的提示; 如果同时传递 "),t("code",null,"title"),n(" 和 插槽，则 "),t("code",null,"title"),n(" 属性为准")],-1),f=t("textarea",{lang:"vue-html"},`
  <nt-tooltip>
    <nt-button>自定义提示</nt-button>
    <template v-slot:title>
      <span style="color:red;">custome propmt text</span>
    </template>
  </nt-tooltip>
  `,-1),v=t("span",{style:{color:"red"}},"custome propmt text",-1),x=t("h3",{id:"受控模式",tabindex:"-1"},[n("受控模式 "),t("a",{class:"header-anchor",href:"#受控模式","aria-label":'Permalink to "受控模式"'},"​")],-1),g=t("p",null,[n("通过 "),t("code",null,"visible"),n(" 属性来控制提示框的显示与隐藏")],-1),T=t("textarea",{lang:"vue-html"},`
    <nt-tooltip :visible="true" title="Content">
        <span>受控模式</span>
    </nt-tooltip>
  `,-1),P=t("span",null,"受控模式",-1),S=i("",2),C=t("textarea",{lang:"vue"},`
  <template>
    <nt-tooltip title="Content" style-name="demo" placement="bottom">
      <span>自定义风格</span>
    </nt-tooltip>
  </template>
  <style>
    .nt-tooltip--demo {
      color: #fff;
      font-size: 18px;
      max-width: 28ch;
      text-align: center;
    }
    .nt-tooltip--demo {
      /* triangle dimension */
      --b: 2em; /* base */
      --h: 1em; /* height */
      --p: 50%; /* triangle position (0%:left 100%:right) */
      --r: 1.2em; /* the radius */
      --c: #6a4a3c;
      padding: 1em;
      border-radius: min(var(--r), var(--p) - var(--b) / 2)
        min(var(--r), 100% - var(--p) - var(--b) / 2) var(--r) var(--r) / var(--r);
      clip-path: polygon(
        0 0,
        0 100%,
        100% 100%,
        100% 0,
        min(100%, var(--p) + var(--b) / 2) 0,
        var(--p) calc(-1 * var(--h)),
        max(0%, var(--p) - var(--b) / 2) 0
      );
      background: var(--c);
      border-image: conic-gradient(var(--c) 0 0) fill 0/ 0 calc(
          100% - var(--p) - var(--b) / 2
        ) var(--r) calc(var(--p) - var(--b) / 2) / var(--h) 0 0 0;
    }
    .nt-tooltip-bottom.nt-tooltip--demo {
      top: calc(100% + 20px);
    }
  </style>
  `,-1),k=t("span",null,"自定义风格",-1),y=t("blockquote",null,[t("p",null,[n("可以通过配合 "),t("code",null,"nt-tooltip-top"),n("、"),t("code",null,"nt-tooltip-start"),n(" 等调整箭头或者提示框的位置")])],-1),q=t("h3",{id:"触发方式",tabindex:"-1"},[n("触发方式 "),t("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1),E=t("p",null,[n("默认是悬浮触发，可以通过修改 "),t("code",null,"trigger"),n(" 属性来改变触发方式")],-1),w=t("textarea",{lang:"vue-html"},`
  <script setup>
  <\/script>
  <template>
    <hr />
  </template>
  `,-1),A=i("",5),R=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1720146969000}'),N={name:"components/tooltip.md"},z=Object.assign(N,{setup(V){return(I,D)=>{const a=p("CodePreview"),d=p("ClientOnly");return _(),s("div",null,[h,o(d,null,{default:e(()=>[o(a,null,{default:e(()=>[m]),_:1})]),_:1}),u,b,o(d,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(l(r),null,{title:e(()=>[v]),default:e(()=>[o(l(c),null,{default:e(()=>[n("自定义提示")]),_:1})]),_:1})]),default:e(()=>[f]),_:1})]),_:1}),x,g,o(d,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(l(r),{visible:!0,title:"Content"},{default:e(()=>[P]),_:1})]),default:e(()=>[T]),_:1})]),_:1}),S,o(d,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(l(r),{title:"Content","style-name":"demo",placement:"bottom"},{default:e(()=>[k]),_:1})]),default:e(()=>[C]),_:1})]),_:1}),y,q,E,o(d,null,{default:e(()=>[o(a,null,{preview:e(()=>[o(l(r),{title:"prompt text"},{default:e(()=>[o(l(c),null,{default:e(()=>[n("悬浮")]),_:1})]),_:1}),o(l(r),{title:"prompt text",trigger:"click",class:"ml-10"},{default:e(()=>[o(l(c),null,{default:e(()=>[n("点击")]),_:1})]),_:1})]),default:e(()=>[w]),_:1})]),_:1}),A])}}});export{R as __pageData,z as default};
