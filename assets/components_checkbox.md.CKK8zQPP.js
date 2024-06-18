import{c as x,d as b}from"./chunks/theme.699TBE5S.js";import{d as q,e as v,c as k,k as a,w as d,aa as g,b as e,y as t,R as C,o as p,z as n,F as f,S as _}from"./chunks/framework.Yy9K0PbY.js";const V=g('<h1 id="checkbox-复选框" tabindex="-1">Checkbox 复选框 <a class="header-anchor" href="#checkbox-复选框" aria-label="Permalink to &quot;Checkbox 复选框&quot;">​</a></h1><p>在一组备选项中进行多选。适用提醒用户勾选场景，突出多选框选项，可以有效增加用户识别度。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>单独使用可以表示两种状态之间的切换；在 <code>nt-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>。</p>',5),Z=e("textarea",{lang:"vue-html"},`
  <nt-checkbox label="Option1"></nt-checkbox>
  `,-1),S=e("h3",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),A=e("p",null,[t("多选框不可用状态, 设置 "),e("code",null,"disabled"),t(" 属性即可。")],-1),D=e("textarea",{lang:"vue-html"},`
  <nt-checkbox label="Option1" disabled></nt-checkbox>
  `,-1),B=e("h3",{id:"选项框组",tabindex:"-1"},[t("选项框组 "),e("a",{class:"header-anchor",href:"#选项框组","aria-label":'Permalink to "选项框组"'},"​")],-1),G=e("p",null,[t("使用 "),e("code",null,"nt-checkbox-group"),t(" 元素来包裹 "),e("code",null,"nt-checkbox"),t(" 元素，实现复选框组。使用时需要给 "),e("code",null,"nt-checkbox"),t(" 传递 "),e("code",null,"value"),t(" 属性。")],-1),w=e("textarea",{lang:"vue"},`
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
  `,-1),I=e("h3",{id:"中间状态",tabindex:"-1"},[t("中间状态 "),e("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1),E=e("p",null,[t("设置 "),e("code",null,"indeterminate"),t(" 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。")],-1),J=e("textarea",{lang:"vue"},`
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
  `,-1),N=e("h3",{id:"按钮样式",tabindex:"-1"},[t("按钮样式 "),e("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1),O=e("p",null,[t("只需要设置 "),e("code",null,"checkbox"),t(" 的 "),e("code",null,"type"),t(" 为 "),e("code",null,"button"),t("；就能将复选框变为按钮样式")],-1),U=e("textarea",{lang:"vue"},`
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
  `,-1),H=e("h3",{id:"受控选中",tabindex:"-1"},[t("受控选中 "),e("a",{class:"header-anchor",href:"#受控选中","aria-label":'Permalink to "受控选中"'},"​")],-1),F=e("p",null,[t("复选框的选中状态是可控的，通过传递 "),e("code",null,"checked"),t(" 属性，"),e("code",null,"true"),t(" 为选中，"),e("code",null,"false"),t(" 为未选中。")],-1),L=e("textarea",{lang:"vue-html"},`
  <nt-checkbox label="协议" checked></nt-checkbox>
  `,-1),$=g('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-label="Permalink to &quot;Checkbox Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>indeterminate</code></td><td>设置不确定状态，仅负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>name</code></td><td>原生 <code>name</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>原生 <code>value</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label</code></td><td>显示的标签</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>是否设置为按钮风格</td><td><code>button</code></td><td>-</td></tr><tr><td><code>checked</code></td><td>是否选中</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props" aria-label="Permalink to &quot;CheckboxGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>string[]</code></td><td>-</td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;Checkbox Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-label="Permalink to &quot;CheckboxGroup Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checkList: string[]) =&gt; void</code></td></tr></tbody></table>',9),K=JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md","lastUpdated":1716541607000}'),z={name:"components/checkbox.md"},M=q({...z,setup(R){const h=[["CD","成都"],["BJ","北京"],["SZ","深圳"],["HZ","杭州"]],c=v(["CD","SZ"]),m=v(!1),s=v(!0);function y(u){c.value=u?h.map(l=>l[0]):[],s.value=!1}function P(u){const l=u.length;m.value=l===h.length,l===0?s.value=0:s.value=l<h.length}return(u,l)=>{const r=C("CodePreview"),i=C("ClientOnly");return p(),k("div",null,[V,a(i,null,{default:d(()=>[a(r,null,{default:d(()=>[Z]),_:1})]),_:1}),S,A,a(i,null,{default:d(()=>[a(r,null,{default:d(()=>[D]),_:1})]),_:1}),B,G,a(i,null,{default:d(()=>[a(r,null,{preview:d(()=>[a(n(x),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=o=>c.value=o)},{default:d(()=>[(p(),k(f,null,_(h,o=>a(n(b),{key:o[0],value:o[0],label:o[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[w]),_:1})]),_:1}),I,E,a(i,null,{default:d(()=>[a(r,null,{preview:d(()=>[a(n(b),{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=o=>m.value=o),label:"全选",indeterminate:s.value,onChange:y},null,8,["modelValue","indeterminate"]),a(n(x),{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=o=>c.value=o),onChange:P},{default:d(()=>[(p(),k(f,null,_(h,o=>a(n(b),{key:o[0],value:o[0],label:o[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[J]),_:1})]),_:1}),N,O,a(i,null,{default:d(()=>[a(r,null,{preview:d(()=>[a(n(x),{modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=o=>c.value=o)},{default:d(()=>[(p(),k(f,null,_(h,o=>a(n(b),{key:o[0],value:o[0],label:o[1],type:"button"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[U]),_:1})]),_:1}),H,F,a(i,null,{default:d(()=>[a(r,null,{default:d(()=>[L]),_:1})]),_:1}),$])}}});export{K as __pageData,M as default};
