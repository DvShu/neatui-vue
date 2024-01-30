import{d as s,o as l,g as p,w as u,q as f,e as n,c as r,F as m,a as c,t as y,s as g,n as i,i as _,u as h,k as b,v,M as C}from"./index-BY3UnrMK.js";const T=n("path",{d:"M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",fill:"currentColor"},null,-1),k=s({__name:"LoadingIcon",setup(t){return(e,a)=>(l(),p(f,null,{default:u(()=>[T]),_:1}))}}),w=["disabled","type"],B=s({__name:"Button",props:{type:{default:"normal"},disabled:{type:Boolean,default:!1},htmlType:{default:"button"},block:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},round:{type:Boolean,default:!1},loadingText:{default:"加载中……"},loading:{type:Boolean,default:!1}},setup(t){return(e,a)=>(l(),r("button",{class:i(["nt-btn",e.type?"nt-btn-"+e.type:"",e.block?"nt-btn-block":"",e.round?"nt-btn-round":"",e.circle?"nt-btn-circle":"",e.loading?"nt-btn-loading":""]),disabled:e.disabled||e.loading,type:e.htmlType},[e.loading?(l(),r(m,{key:0},[c(k,{class:"nt-rotate-anim"}),n("span",null,y(e.loadingText),1)],64)):g(e.$slots,"default",{key:1})],10,w))}}),E=n("path",{fill:"currentColor",d:"M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"},null,-1),M=n("path",{fill:"currentColor",d:"M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"},null,-1),P=s({__name:"CopyIcon",setup(t){return(e,a)=>(l(),p(h(f),{"view-box":"0 0 1024 1024"},{default:u(()=>[E,M,_(" >")]),_:1}))}});function $(t){const e=document.createElement("textarea");return e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style.left="-9999px",e.style.top="-9999",e.setAttribute("readonly",""),e.value=t,e}function x(t){const e=$(t);document.body.append(e),e.focus(),e.select();const a=document.execCommand("copy");return e.remove(),Promise.resolve(a)}function A(t){let e=navigator.clipboard;return e!=null?e.writeText(t).then(()=>{Promise.resolve(!0)}).catch(()=>Promise.resolve(!1)):Promise.resolve(!1)}function N(t){let e=null,a=null;if(typeof t=="string"&&(t.startsWith("#")||t.startsWith(".")?(a=document.querySelector(t),a==null&&(e=t)):e=t),t instanceof HTMLElement&&(a=t),a!=null)if(a.hasAttribute("data-copy-text"))e=a.getAttribute("data-copy-text");else{const o=a.tagName;o==="INPUT"||o==="TEXTAREA"?e=a.value:e=a.textContent}return e}async function V(t){const e=N(t);return e==null?Promise.resolve(!1):await A(e)===!1?x(e):Promise.resolve(!0)}const F={class:"source-code"},H=["innerHTML"],S=s({__name:"SourceCode",props:{lang:{default:"typescript"},code:{}},setup(t){const e=t;async function a(){await V(e.code.trim()),C.success("复制成功")}const o=b("");return v(()=>{o.value=window.Prism.highlight(e.code.trim(),window.Prism.languages[e.lang],e.lang)}),(d,z)=>(l(),r("div",F,[n("pre",{class:i(["nt-scrollbar","nt-scrollbar-x","language-"+d.lang])},[n("code",{class:i("language-"+d.lang),innerHTML:o.value},null,10,H)],2),c(B,{type:"text",class:"code-bopy-btn",onClick:a},{default:u(()=>[c(P)]),_:1})]))}});export{S as _,B as a,k as b,V as c};