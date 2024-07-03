import{n as o}from"./chunks/theme.BXlgI-md.js";import{c,l as e,w as a,ab as i,b as t,z as l,S as r,o as h,A as n}from"./chunks/framework.RALdISJs.js";const p=i("",5),g=t("textarea",{lang:"vue-html"},`
  <div class="grid grid-cols-4">
    <div class="center flex-col">
      <Polygon shape="triangle-top"></Polygon>
      <span>triangle-top</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom"></Polygon>
      <span>triangle-bottom</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-left"></Polygon>
      <span>triangle-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-right"></Polygon>
      <span>triangle-right</span>
    </div>
  </div>
  <div class="grid grid-cols-4 mt-15">
    <div class="center flex-col">
      <Polygon shape="triangle-top-right"></Polygon>
      <span>triangle-top-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-top-left"></Polygon>
      <span>triangle-top-left</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-right"></Polygon>
      <span>triangle-bottom-right</span>
    </div>
    <div class="center flex-col">
      <Polygon shape="triangle-bottom-left"></Polygon>
      <span>triangle-bottom-left</span>
    </div>
  </div>
  `,-1),_={class:"grid grid-cols-4"},u={class:"center flex-col"},b=t("span",null,"triangle-top",-1),f={class:"center flex-col"},m=t("span",null,"triangle-bottom",-1),y={class:"center flex-col"},v=t("span",null,"triangle-left",-1),P={class:"center flex-col"},x=t("span",null,"triangle-right",-1),k={class:"grid grid-cols-4 mt-15"},S={class:"center flex-col"},T=t("span",null,"triangle-top-right",-1),q={class:"center flex-col"},C=t("span",null,"triangle-top-left",-1),A={class:"center flex-col"},N=t("span",null,"triangle-bottom-right",-1),V={class:"center flex-col"},w=t("span",null,"triangle-bottom-left",-1),z=t("h3",{id:"自定义菱形",tabindex:"-1"},[l("自定义菱形 "),t("a",{class:"header-anchor",href:"#自定义菱形","aria-label":'Permalink to "自定义菱形"'},"​")],-1),I=t("p",null,[l("传递 "),t("code",null,"shape"),l(" 为 "),t("code",null,"rhombus"),l("。然后自己定义 "),t("code",null,"nt-polygon-rhombus"),l(" 样式即可。同时可以通过 "),t("code",null,"background"),l(" 设置图形颜色")],-1),O=t("textarea",{lang:"vue"},`
  <template>
    <nt-polygon shape="rhombus" background="red"></nt-polygon>
  </template>
  <style>
    .nt-polygon-rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  </style>
  `,-1),B=i("",5),W=JSON.parse('{"title":"Polygon 多边形","description":"","frontmatter":{},"headers":[],"relativePath":"components/polygon.md","filePath":"components/polygon.md","lastUpdated":1719214891000}'),D={name:"components/polygon.md"},$=Object.assign(D,{setup(E){return(R,j)=>{const s=r("CodePreview"),d=r("ClientOnly");return h(),c("div",null,[p,e(d,null,{default:a(()=>[e(s,null,{preview:a(()=>[t("div",_,[t("div",u,[e(n(o),{shape:"triangle-top"}),b]),t("div",f,[e(n(o),{shape:"triangle-bottom"}),m]),t("div",y,[e(n(o),{shape:"triangle-left"}),v]),t("div",P,[e(n(o),{shape:"triangle-right"}),x])]),t("div",k,[t("div",S,[e(n(o),{shape:"triangle-top-right"}),T]),t("div",q,[e(n(o),{shape:"triangle-top-left"}),C]),t("div",A,[e(n(o),{shape:"triangle-bottom-right"}),N]),t("div",V,[e(n(o),{shape:"triangle-bottom-left"}),w])])]),default:a(()=>[g]),_:1})]),_:1}),z,I,e(d,null,{default:a(()=>[e(s,null,{preview:a(()=>[e(n(o),{shape:"rhombus",background:"red"})]),default:a(()=>[O]),_:1})]),_:1}),B])}}});export{W as __pageData,$ as default};
