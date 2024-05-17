import{b as v,c as u}from"./chunks/theme.kLgaO0aC.js";import{d as q,e as x,c as b,g as o,w as d,ab as g,b as e,x as a,R as C,o as p,y as n,F as f,S as _}from"./chunks/framework.kESMpjgr.js";const V=g('<h1 id="checkbox-复选框" tabindex="-1">Checkbox 复选框 <a class="header-anchor" href="#checkbox-复选框" aria-label="Permalink to &quot;Checkbox 复选框&quot;">​</a></h1><p>在一组备选项中进行多选。适用提醒用户勾选场景，突出多选框选项，可以有效增加用户识别度。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>单独使用可以表示两种状态之间的切换；在 <code>nt-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>。</p>',5),Z=e("textarea",{lang:"vue-html"},`
  <nt-checkbox label="Option1"></nt-checkbox>
  `,-1),S=e("h3",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),A=e("p",null,[a("多选框不可用状态, 设置 "),e("code",null,"disabled"),a(" 属性即可。")],-1),D=e("textarea",{lang:"vue-html"},`
  <nt-checkbox label="Option1" disabled></nt-checkbox>
  `,-1),B=e("h3",{id:"选项框组",tabindex:"-1"},[a("选项框组 "),e("a",{class:"header-anchor",href:"#选项框组","aria-label":'Permalink to "选项框组"'},"​")],-1),G=e("p",null,[a("使用 "),e("code",null,"nt-checkbox-group"),a(" 元素来包裹 "),e("code",null,"nt-checkbox"),a(" 元素，实现复选框组。使用时需要给 "),e("code",null,"nt-checkbox"),a(" 传递 "),e("code",null,"value"),a(" 属性。")],-1),w=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <nt-checkbox-group v-model="checkedCities">
      <nt-checkbox v-for="city in cities" :key="city[0]" :value="city[0]" :label="city[1]"></nt-checkbox>
    </nt-checkbox-group>
  </template>
  `,-1),I=e("h3",{id:"中间状态",tabindex:"-1"},[a("中间状态 "),e("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1),E=e("p",null,[a("设置 "),e("code",null,"indeterminate"),a(" 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。")],-1),J=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    import { Checkbox, CheckboxGroup } from '../../src';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    function handleCheckAllChange(val: boolean) {
      checkedCities.value = val ? cities.map(c => c[0]) : [];
      isIndeterminate.value = false;
    }
    function handleGroupChange(val: string[]) {
      const checkedCount = val.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount < cities.length;
    }
  <\/script>
  <template>
    <nt-checkbox
      v-model="checkAll"
      label="全选"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <nt-checkbox-group
      v-model="checkedCities"
      @change="handleGroupChange"
    >
      <nt-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
      ></nt-checkbox>
    </nt-checkbox-group>
  </template>
  `,-1),N=e("h3",{id:"按钮样式",tabindex:"-1"},[a("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1),O=e("p",null,[a("只需要设置 "),e("code",null,"checkbox"),a(" 的 "),e("code",null,"type"),a(" 为 "),e("code",null,"button"),a("；就能将复选框变为按钮样式")],-1),U=e("textarea",{lang:"vue"},`
  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <nt-checkbox-group v-model="checkedCities">
      <nt-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
        type="button"
      ></nt-checkbox>
    </nt-checkbox-group>
  </template>
  `,-1),H=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-label="Permalink to &quot;Checkbox Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>indeterminate</code></td><td>设置不确定状态，仅负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>name</code></td><td>原生 <code>name</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>原生 <code>value</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label</code></td><td>显示的标签</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>是否设置为按钮风格</td><td><code>button</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props" aria-label="Permalink to &quot;CheckboxGroup Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>string[]</code></td><td>-</td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;Checkbox Events&quot;">​</a></h3><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-label="Permalink to &quot;CheckboxGroup Events&quot;">​</a></h3><table><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checkList: string[]) =&gt; void</code></td></tr></tbody></table>',9),T=JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md","lastUpdated":1715939480000}'),F={name:"components/checkbox.md"},j=q({...F,setup(L){const r=[["CD","成都"],["BJ","北京"],["SZ","深圳"],["HZ","杭州"]],c=x(["CD","SZ"]),k=x(!1),m=x(!0);function y(s){c.value=s?r.map(l=>l[0]):[],m.value=!1}function P(s){const l=s.length;k.value=l===r.length,m.value=l<r.length}return(s,l)=>{const h=C("CodePreview"),i=C("ClientOnly");return p(),b("div",null,[V,o(i,null,{default:d(()=>[o(h,null,{default:d(()=>[Z]),_:1})]),_:1}),S,A,o(i,null,{default:d(()=>[o(h,null,{default:d(()=>[D]),_:1})]),_:1}),B,G,o(i,null,{default:d(()=>[o(h,null,{preview:d(()=>[o(n(v),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t)},{default:d(()=>[(p(),b(f,null,_(r,t=>o(n(u),{key:t[0],value:t[0],label:t[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[w]),_:1})]),_:1}),I,E,o(i,null,{default:d(()=>[o(h,null,{preview:d(()=>[o(n(u),{modelValue:k.value,"onUpdate:modelValue":l[1]||(l[1]=t=>k.value=t),label:"全选",indeterminate:m.value,onChange:y},null,8,["modelValue","indeterminate"]),o(n(v),{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=t=>c.value=t),onChange:P},{default:d(()=>[(p(),b(f,null,_(r,t=>o(n(u),{key:t[0],value:t[0],label:t[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[J]),_:1})]),_:1}),N,O,o(i,null,{default:d(()=>[o(h,null,{preview:d(()=>[o(n(v),{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=t=>c.value=t)},{default:d(()=>[(p(),b(f,null,_(r,t=>o(n(u),{key:t[0],value:t[0],label:t[1],type:"button"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[U]),_:1})]),_:1}),H])}}});export{T as __pageData,j as default};
