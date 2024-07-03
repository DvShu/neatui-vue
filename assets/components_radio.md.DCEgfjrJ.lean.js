import{o as r,p as h,_ as p}from"./chunks/theme.eiLntctg.js";import{e as b,c as v,l as t,w as a,ab as m,b as e,z as d,U as _,o as f,A as l}from"./chunks/framework.CsJhXCE_.js";const x=m("",5),P=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  <\/script>
  <template>
    <nt-radio v-model="allowService">
      <template #label>
        <span>
          <span>同意</span>
          <a href='#'>隐私协议</a>
        </span>
      </template>
    </nt-radio>
  </template>
  `,-1),k=e("span",null,[e("span",null,"同意"),e("a",{href:"#"},"隐私协议")],-1),g=e("h3",{id:"禁用状态",tabindex:"-1"},[d("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),y=e("p",null,[d("设置 "),e("code",null,"disabled"),d(" 属性即可。")],-1),q=e("textarea",{lang:"vue-html"},`
  <nt-radio label="禁用" disabled>
  `,-1),V=e("h3",{id:"单选框组",tabindex:"-1"},[d("单选框组 "),e("a",{class:"header-anchor",href:"#单选框组","aria-label":'Permalink to "单选框组"'},"​")],-1),S=e("p",null,[d("结合 "),e("code",null,"nt-radio-group"),d(" 组件实现单选框组")],-1),w=e("textarea",{lang:"vue-html"},`
  <script setup>
    import { ref } from 'vue';
    const sex = ref('0');
  <\/script>
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" />
      <nt-radio label="女" value="1" />
    </nt-radio-group>
  </template>
  `,-1),R=e("h3",{id:"按钮样式",tabindex:"-1"},[d("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1),T=e("p",null,[d("在单选框组基础上，设置 "),e("code",null,"nt-radio"),d(" 的 "),e("code",null,"type"),d(" 属性为 "),e("code",null,"button"),d(" 即可。")],-1),C=e("textarea",{lang:"vue-html"},`
  <template>
    <nt-radio-group v-model="sex">
      <nt-radio label="男" value="0" type="button" />
      <nt-radio label="女" value="1" type="button" />
    </nt-radio-group>
  </template>
  `,-1),A=e("h3",{id:"受控",tabindex:"-1"},[d("受控 "),e("a",{class:"header-anchor",href:"#受控","aria-label":'Permalink to "受控"'},"​")],-1),E=e("p",null,[d("有时候需要自己手动控制选中状态时，只需要传递一个 "),e("code",null,"checked"),d(" 属性，"),e("code",null,"true"),d(" 选中, "),e("code",null,"false"),d(" 为未选中")],-1),N=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const allowService = ref(false);
  <\/script>
  <template>
    <nt-radio label="同意隐私协议" :checked="allowService"></nt-radio>
    <div class="mt-15">
      <nt-button @click="allowService = false">未选中</nt-button>
      <nt-button type="primary" class="ml-10" @click="allowService = true">选中</nt-button>
    </div>
  </template>
  `,-1),I={class:"mt-15"},U=m("",11),j=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1716541607000}'),$={name:"components/radio.md"},z=Object.assign($,{setup(G){const u=b("0"),i=b(!1);return(O,o)=>{const s=_("CodePreview"),c=_("ClientOnly");return f(),v("div",null,[x,t(c,null,{default:a(()=>[t(s,null,{preview:a(()=>[t(l(r),{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=n=>i.value=n)},{label:a(()=>[k]),_:1},8,["modelValue"])]),default:a(()=>[P]),_:1})]),_:1}),g,y,t(c,null,{default:a(()=>[t(s,null,{default:a(()=>[q]),_:1})]),_:1}),V,S,t(c,null,{default:a(()=>[t(s,null,{preview:a(()=>[t(l(h),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=n=>u.value=n)},{default:a(()=>[t(l(r),{label:"男",value:"0"}),t(l(r),{label:"女",value:"1"})]),_:1},8,["modelValue"])]),default:a(()=>[w]),_:1})]),_:1}),R,T,t(c,null,{default:a(()=>[t(s,null,{preview:a(()=>[t(l(h),{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n)},{default:a(()=>[t(l(r),{label:"男",value:"0",type:"button"}),t(l(r),{label:"女",value:"1",type:"button"})]),_:1},8,["modelValue"])]),default:a(()=>[C]),_:1})]),_:1}),A,E,t(c,null,{default:a(()=>[t(s,null,{preview:a(()=>[t(l(r),{label:"同意隐私协议",checked:i.value},null,8,["checked"]),e("div",I,[t(l(p),{onClick:o[3]||(o[3]=n=>i.value=!1)},{default:a(()=>[d("未选中")]),_:1}),t(l(p),{type:"primary",class:"ml-10",onClick:o[4]||(o[4]=n=>i.value=!0)},{default:a(()=>[d("选中")]),_:1})])]),default:a(()=>[N]),_:1})]),_:1}),U])}}});export{j as __pageData,z as default};
