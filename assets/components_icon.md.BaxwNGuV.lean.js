const __vite__fileDeps=["assets/chunks/theme.Bw2aQQ0V.js","assets/chunks/framework.DQF4kMpX.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as m,a5 as E,o as l,c as p,F as k,U as g,E as t,b as h,a as v,n as f,s as b,t as y,k as c,w as _,ab as d,S as u}from"./chunks/framework.DQF4kMpX.js";import{s as T,M as A}from"./chunks/theme.Bw2aQQ0V.js";function P(s){const n=document.createElement("textarea");return n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style.left="-9999px",n.style.top="-9999",n.setAttribute("readonly",""),n.value=s,n}function C(s){const n=P(s);document.body.append(n),n.focus(),n.select();const i=document.execCommand("copy");return n.remove(),Promise.resolve(i)}function I(s){const n=navigator.clipboard;return n!=null?n.writeText(s).then(()=>{Promise.resolve(!0)}).catch(()=>Promise.resolve(!1)):Promise.resolve(!1)}function D(s){let n=null,i=null;if(typeof s=="string"&&(s.startsWith("#")||s.startsWith(".")?(i=document.querySelector(s),i==null&&(n=s)):n=s),s instanceof HTMLElement&&(i=s),i!=null)if(i.hasAttribute("data-copy-text"))n=i.getAttribute("data-copy-text");else{const o=i.tagName;o==="INPUT"||o==="TEXTAREA"?n=i.value:n=i.textContent}return n}async function O(s){const n=D(s);return n==null?Promise.resolve(!1):await I(n)===!1?C(n):Promise.resolve(!0)}const V={class:"icon-list"},x=["onClick"],R={class:"icon-name"},L=m({__name:"IconList",setup(s){const n=Object.assign({"../components/icon/ArrowDown.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.T),__vite__mapDeps([0,1])),"../components/icon/ArrowLeft.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.N),__vite__mapDeps([0,1])),"../components/icon/ArrowRight.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.O),__vite__mapDeps([0,1])),"../components/icon/ArrowUp.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.Q),__vite__mapDeps([0,1])),"../components/icon/Base.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.D),__vite__mapDeps([0,1])),"../components/icon/CaretBottom.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.K),__vite__mapDeps([0,1])),"../components/icon/CaretTop.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.J),__vite__mapDeps([0,1])),"../components/icon/Close.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.Z),__vite__mapDeps([0,1])),"../components/icon/IconFont.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.I),__vite__mapDeps([0,1])),"../components/icon/Info.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.G),__vite__mapDeps([0,1])),"../components/icon/Loading.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.F),__vite__mapDeps([0,1])),"../components/icon/MaskClose.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.E),__vite__mapDeps([0,1])),"../components/icon/Reduction.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.U),__vite__mapDeps([0,1])),"../components/icon/RefreshLeft.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.V),__vite__mapDeps([0,1])),"../components/icon/RefreshRight.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.X),__vite__mapDeps([0,1])),"../components/icon/Search.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.S),__vite__mapDeps([0,1])),"../components/icon/Sort.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.Y),__vite__mapDeps([0,1])),"../components/icon/Success.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.H),__vite__mapDeps([0,1])),"../components/icon/Warn.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.W),__vite__mapDeps([0,1])),"../components/icon/ZoomIn.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.$),__vite__mapDeps([0,1])),"../components/icon/ZoomOut.vue":()=>t(()=>import("./chunks/theme.Bw2aQQ0V.js").then(e=>e.a0),__vite__mapDeps([0,1]))}),i=[];for(const e in n)if(Object.hasOwn(n,e)){let a=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("."));a!=="IconFont"&&a!=="Base"&&(a=T(a),a!==""&&a!==""&&i.push({name:a,component:E(n[e])}))}async function o(e){await O(`<nt-${e}-icon />`),A.success("复制成功")}return(e,a)=>(l(),p("div",V,[(l(),p(k,null,g(i,r=>h("div",{key:r.name,class:"icon-item center",onClick:N=>o(r.name)},[(l(),v(b(r.component),{class:f({"nt-rotate-anim":r.name.includes("loading")})},null,8,["class"])),h("span",R,y(r.name),1)],8,x)),64))]))}}),F=d("",7),S=d("",11),w=h("textarea",{lang:"vue-html"},`
<nt-base-icon>
<path
      d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
      fill="#231F20"
    ></path>
</nt-base-icon>
`,-1),q=d("",4),$=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md","lastUpdated":1713346936000}'),B={name:"components/icon.md"},j=Object.assign(B,{setup(s){return(n,i)=>{const o=u("CodePreview"),e=u("ClientOnly");return l(),p("div",null,[F,c(L),S,c(e,null,{default:_(()=>[c(o,null,{default:_(()=>[w]),_:1})]),_:1}),q])}}});export{$ as __pageData,j as default};
