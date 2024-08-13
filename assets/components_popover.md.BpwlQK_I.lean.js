import{y as l,_ as a}from"./chunks/theme.BNci8pmS.js";import{e as u,c as m,g as e,w as t,ae as s,b as r,M as n,Z as i,o as _,q as o}from"./chunks/framework.CqWuvRde.js";const g=s("",5),v=r("textarea",{lang:"vue-html"},`
  <nt-popover content="悬浮提示">
    <template #trigger>
      <span>悬浮</span>
    </template>
  </nt-popover>
  `,-1),b=r("span",null,"悬浮",-1),f=r("h3",{id:"触发方式",tabindex:"-1"},[n("触发方式 "),r("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1),P=r("p",null,[n("两种触发方式：鼠标移入["),r("code",null,"hover"),n("]、点击["),r("code",null,"click"),n("]；通过 "),r("code",null,"trigger"),n(" 属性设置触发方式。")],-1),T=r("textarea",{lang:"vue-html"},`
  <nt-popover content="悬浮提示" trigger='hover'>
    <template #trigger>
      <nt-button>悬浮</nt-button>
    </template>
  </nt-popover>
  <nt-popover content="点击提示" trigger='click'>
    <template #trigger>
      <nt-button>点击</nt-button>
    </template>
  </nt-popover>
  `,-1),x=r("h3",{id:"位置",tabindex:"-1"},[n("位置 "),r("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1),w=r("p",null,[n("有 "),r("code",null,"12"),n(" 个弹出位置。通过 "),r("code",null,"placement"),n(" 属性设置弹出位置。")],-1),k=r("textarea",{lang:"vue-html"},`
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="topLeft">
      <template #trigger>
        <nt-button>topLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="top">
      <template #trigger>
        <nt-button>top</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="topRight">
      <template #trigger>
        <nt-button>topRight</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="leftTop">
      <template #trigger>
        <nt-button>leftTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="left">
      <template #trigger>
        <nt-button>left</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="leftBottom">
      <template #trigger>
        <nt-button>leftBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="rightTop">
      <template #trigger>
        <nt-button>rightTop</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="right">
      <template #trigger>
        <nt-button>right</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="rightBottom">
      <template #trigger>
        <nt-button>rightBottom</nt-button>
      </template>
    </nt-popover>
  </div>
  <div class="popover-p-row">
    <nt-popover content="提示内容" placement="bottomLeft">
      <template #trigger>
        <nt-button>bottomLeft</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottom">
      <template #trigger>
        <nt-button>bottom</nt-button>
      </template>
    </nt-popover>
    <nt-popover content="提示内容" placement="bottomRight">
      <template #trigger>
        <nt-button>bottomRight</nt-button>
      </template>
    </nt-popover>
  </div>
  `,-1),q={class:"popover-p-row"},B={class:"popover-p-row"},R={class:"popover-p-row"},S={class:"popover-p-row"},L=r("h3",{id:"受控模式",tabindex:"-1"},[n("受控模式 "),r("a",{class:"header-anchor",href:"#受控模式","aria-label":'Permalink to "受控模式"'},"​")],-1),C=r("p",null,[n("不需要自动弹出，需要进行手动控制是否展示；通过传递 "),r("code",null,"visible"),n(" 属性设置是否展示，然后设置 "),r("code",null,"to"),n(" 属性指向弹层对标节点。")],-1),y=r("textarea",{lang:"vue-html"},`
  <script setup>
  import { ref } from 'vue'
  const show = ref(false)
  function toggleShow() {
    show.value = !show.value
  }
  <\/script>
  <template>
    <span id="popoverTo">对标元素</span>
    <nt-button @click='toggleShow' class="ml-10">弹出/隐藏</nt-button>
    <nt-popover to="#popoverTo" content="提示内容" :visible="show"></nt-popover>
  </template>
  `,-1),A=r("span",{id:"popoverTo"},"对标元素",-1),V=s("",7),H=JSON.parse('{"title":"Popover 弹出气泡","description":"","frontmatter":{},"headers":[],"relativePath":"components/popover.md","filePath":"components/popover.md","lastUpdated":1721968438000}'),E={name:"components/popover.md"},$=Object.assign(E,{setup(N){const c=u(!1);function h(){c.value=!c.value}return(I,O)=>{const p=i("CodePreview"),d=i("ClientOnly");return _(),m("div",null,[g,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[e(o(l),{content:"悬浮提示"},{trigger:t(()=>[b]),_:1})]),default:t(()=>[v]),_:1})]),_:1}),f,P,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[e(o(l),{content:"悬浮提示",trigger:"hover"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("悬浮")]),_:1})]),_:1}),e(o(l),{content:"点击提示",trigger:"click"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("点击")]),_:1})]),_:1})]),default:t(()=>[T]),_:1})]),_:1}),x,w,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[r("div",q,[e(o(l),{content:"提示内容",placement:"topLeft"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("topLeft")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"top"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("top")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"topRight"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("topRight")]),_:1})]),_:1})]),r("div",B,[e(o(l),{content:"提示内容",placement:"leftTop"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("leftTop")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"left"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("left")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"leftBottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("leftBottom")]),_:1})]),_:1})]),r("div",R,[e(o(l),{content:"提示内容",placement:"rightTop"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("rightTop")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"right"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("right")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"rightBottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("rightBottom")]),_:1})]),_:1})]),r("div",S,[e(o(l),{content:"提示内容",placement:"bottomLeft"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottomLeft")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"bottom"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottom")]),_:1})]),_:1}),e(o(l),{content:"提示内容",placement:"bottomRight"},{trigger:t(()=>[e(o(a),null,{default:t(()=>[n("bottomRight")]),_:1})]),_:1})])]),default:t(()=>[k]),_:1})]),_:1}),L,C,e(d,null,{default:t(()=>[e(p,null,{preview:t(()=>[A,e(o(a),{onClick:h,class:"ml-10"},{default:t(()=>[n("弹出/隐藏")]),_:1}),e(o(l),{to:"#popoverTo",content:"提示内容",visible:c.value},null,8,["visible"])]),default:t(()=>[y]),_:1})]),_:1}),V])}}});export{H as __pageData,$ as default};
