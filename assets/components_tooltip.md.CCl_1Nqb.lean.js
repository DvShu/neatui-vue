import{f as c,a as p}from"./chunks/theme.DtqN3wku.js";import{c as s,k as e,w as o,ab as r,b as t,y as n,R as i,o as _,z as l}from"./chunks/framework.DOAk_ODI.js";const h=r("",6),m=t("textarea",{lang:"vue-html"},`
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
  `,-1),b=t("h3",{id:"自定义提示",tabindex:"-1"},[n("自定义提示 "),t("a",{class:"header-anchor",href:"#自定义提示","aria-label":'Permalink to "自定义提示"'},"​")],-1),u=t("p",null,[n("通过使用 "),t("code",null,"title"),n(" 插槽来渲染自定义的提示; 如果同时传递 "),t("code",null,"title"),n(" 和 插槽，则 "),t("code",null,"title"),n(" 属性为准")],-1),v=t("textarea",{lang:"vue-html"},`
  <nt-tooltip>
    <nt-button>自定义提示</nt-button>
    <template v-slot:title>
      <span style="color:red;">custome propmt text</span>
    </template>
  </nt-tooltip>
  `,-1),f=t("span",{style:{color:"red"}},"custome propmt text",-1),x=t("h3",{id:"受控模式",tabindex:"-1"},[n("受控模式 "),t("a",{class:"header-anchor",href:"#受控模式","aria-label":'Permalink to "受控模式"'},"​")],-1),T=t("p",null,[n("通过 "),t("code",null,"visible"),n(" 属性来控制提示框的显示与隐藏")],-1),g=t("textarea",{lang:"vue-html"},`
    <nt-tooltip :visible="true" title="Content">
        <span>受控模式</span>
    </nt-tooltip>
  `,-1),S=t("span",null,"受控模式",-1),P=r("",2),C=t("textarea",{lang:"vue"},`
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
  `,-1),y=t("span",null,"自定义风格",-1),k=r("",6),I=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1716277553000}'),q={name:"components/tooltip.md"},D=Object.assign(q,{setup(E){return(A,N)=>{const a=i("CodePreview"),d=i("ClientOnly");return _(),s("div",null,[h,e(d,null,{default:o(()=>[e(a,null,{default:o(()=>[m]),_:1})]),_:1}),b,u,e(d,null,{default:o(()=>[e(a,null,{preview:o(()=>[e(l(c),null,{title:o(()=>[f]),default:o(()=>[e(l(p),null,{default:o(()=>[n("自定义提示")]),_:1})]),_:1})]),default:o(()=>[v]),_:1})]),_:1}),x,T,e(d,null,{default:o(()=>[e(a,null,{preview:o(()=>[e(l(c),{visible:!0,title:"Content"},{default:o(()=>[S]),_:1})]),default:o(()=>[g]),_:1})]),_:1}),P,e(d,null,{default:o(()=>[e(a,null,{preview:o(()=>[e(l(c),{title:"Content","style-name":"demo",placement:"bottom"},{default:o(()=>[y]),_:1})]),default:o(()=>[C]),_:1})]),_:1}),k])}}});export{I as __pageData,D as default};
