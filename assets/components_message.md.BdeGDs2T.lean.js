import{_ as n,M as c}from"./chunks/theme.BVjx0zTc.js";import{c as p,l as o,w as d,b as e,G as t,ab as g,U as u,o as b,z as s}from"./chunks/framework.MCgil6G4.js";const M=e("h1",{id:"message-消息提示",tabindex:"-1"},[t("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1),x=e("p",null,"常用于主动操作后的反馈提示。更多用于系统级通知的被动提醒。",-1),C=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),P=e("p",null,[t("从顶部出现，"),e("code",null,"3"),t(" 秒后自动消失; 可以接收一个字符串被显示为正文内容")],-1),k=e("textarea",{lang:"ts"},`
NtMessage.info("这是一条普通的提示信息")
`,-1),v=g("",3),N=e("textarea",{lang:"ts"},`
NtMessage.success("这是一条成功的提示信息")
NtMessage.warn("这是一条警告的提示信息")
NtMessage.error("这是一条错误的提示信息")
`,-1),w=e("h2",{id:"手动关闭",tabindex:"-1"},[t("手动关闭 "),e("a",{class:"header-anchor",href:"#手动关闭","aria-label":'Permalink to "手动关闭"'},"​")],-1),T=e("p",null,[t("将 "),e("code",null,"duration"),t(" 属性设置为 "),e("code",null,"0``, 可以使 Message"),t(" 不自动消失。然后显示消息的函数会返回一个消息 "),e("code",null,"id"),t(", 通过手动调用 "),e("code",null,"close"),t(" 手动关闭")],-1),y=e("textarea",{lang:"ts"},`
// 打开消息
let msgId = NtMessage.info({
message: '这是一条提示信息',
duration: 0
})
// 关闭消息
NtMessage.close(msgId)
`,-1),I=e("h2",{id:"持续时间",tabindex:"-1"},[t("持续时间 "),e("a",{class:"header-anchor",href:"#持续时间","aria-label":'Permalink to "持续时间"'},"​")],-1),S=e("p",null,[t("通过 "),e("code",null,"duration"),t(" 属性设定 "),e("code",null,"Message"),t(" 的持续时间。")],-1),q=e("textarea",{lang:"ts"},`
NtMessage.info({
message: "这是一条提示信息",
duration: 5000
})
`,-1),A=g("",5),D=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1713346936000}'),V={name:"components/message.md"},E=Object.assign(V,{setup($){let _="";function m(h=3e3){_=c.info({message:"这是一条提示信息",duration:h})}function f(){c.close(_)}return(h,a)=>{const r=u("CodePreview"),i=u("ClientOnly");return b(),p("div",null,[M,x,C,P,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(n),{onClick:a[0]||(a[0]=l=>s(c).info("这是一条普通的提示信息"))},{default:d(()=>[t("显示信息")]),_:1})]),default:d(()=>[k]),_:1})]),_:1}),v,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(n),{onClick:a[1]||(a[1]=l=>s(c).success("这是一条成功的提示信息")),class:"ml-10"},{default:d(()=>[t("显示成功")]),_:1}),o(s(n),{onClick:a[2]||(a[2]=l=>s(c).warn("这是一条警告的提示信息")),class:"ml-10"},{default:d(()=>[t("显示警告")]),_:1}),o(s(n),{onClick:a[3]||(a[3]=l=>s(c).error("这是一条错误的提示信息")),class:"ml-10"},{default:d(()=>[t("显示错误")]),_:1})]),default:d(()=>[N]),_:1})]),_:1}),w,T,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(n),{onClick:a[4]||(a[4]=l=>m(0))},{default:d(()=>[t("打开")]),_:1}),o(s(n),{onClick:f,class:"ml-10"},{default:d(()=>[t("关闭")]),_:1})]),default:d(()=>[y]),_:1})]),_:1}),I,S,o(i,null,{default:d(()=>[o(r,null,{preview:d(()=>[o(s(n),{onClick:a[5]||(a[5]=l=>s(c).info({message:"这是一条提示信息",duration:5e3}))},{default:d(()=>[t("持续5s")]),_:1})]),default:d(()=>[q]),_:1})]),_:1}),A])}}});export{D as __pageData,E as default};
