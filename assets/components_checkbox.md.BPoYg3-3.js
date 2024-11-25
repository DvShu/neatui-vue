import{C as h,b as x}from"./chunks/theme.DASJ6p6U.js";import{d as Z,f as p,c as k,ag as y,l as o,w as d,b as t,R as a,a1 as P,o as m,u as n,F as f,C}from"./chunks/framework.DdiFAQ9y.js";const B=JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md","lastUpdated":1732085261000}'),S={name:"components/checkbox.md"},G=Z({...S,setup(A){const r=[["CD","成都"],["BJ","北京"],["SZ","深圳"],["HZ","杭州"]],g=p(!0),c=p(["CD","SZ"]),v=p(!1),s=p(!0);function V(b){s.value=!1,c.value=b?r.map(e=>e[0]):[]}function q(b){const e=b.length;v.value=e===r.length,e===0?s.value=!1:s.value=e<r.length}return(b,e)=>{const i=P("CodePreview"),u=P("ClientOnly");return m(),k("div",null,[e[10]||(e[10]=y('<h1 id="checkbox-复选框" tabindex="-1">Checkbox 复选框 <a class="header-anchor" href="#checkbox-复选框" aria-label="Permalink to &quot;Checkbox 复选框&quot;">​</a></h1><p>在一组备选项中进行多选。适用提醒用户勾选场景，突出多选框选项，可以有效增加用户识别度。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><p>单独使用可以表示两种状态之间的切换；在 <code>nt-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>。</p>',5)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(h),{label:"Option1",modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=l=>g.value=l)},null,8,["modelValue"])]),default:d(()=>[e[5]||(e[5]=t("textarea",{lang:"vue-html"},`  <lt-checkbox label="Option1" v-model="isCheckOption"></lt-checkbox>
  `,-1))]),_:1})]),_:1}),e[11]||(e[11]=t("h3",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[12]||(e[12]=t("p",null,[a("多选框不可用状态, 设置 "),t("code",null,"disabled"),a(" 属性即可。")],-1)),o(u,null,{default:d(()=>[o(i,null,{default:d(()=>e[6]||(e[6]=[t("textarea",{lang:"vue-html"},`  <lt-checkbox label="Option1" disabled></lt-checkbox>
  `,-1)])),_:1})]),_:1}),e[13]||(e[13]=t("h3",{id:"选项框组",tabindex:"-1"},[a("选项框组 "),t("a",{class:"header-anchor",href:"#选项框组","aria-label":'Permalink to "选项框组"'},"​")],-1)),e[14]||(e[14]=t("p",null,[a("使用 "),t("code",null,"nt-checkbox-group"),a(" 元素来包裹 "),t("code",null,"nt-checkbox"),a(" 元素，实现复选框组。使用时需要给 "),t("code",null,"nt-checkbox"),a(" 传递 "),t("code",null,"value"),a(" 属性。")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l)},{default:d(()=>[(m(),k(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[7]||(e[7]=t("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <lt-checkbox-group v-model="checkedCities">
      <lt-checkbox v-for="city in cities" :key="city[0]" :value="city[0]" :label="city[1]"></lt-checkbox>
    </lt-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[15]||(e[15]=t("h3",{id:"中间状态",tabindex:"-1"},[a("中间状态 "),t("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1)),e[16]||(e[16]=t("p",null,[a("设置 "),t("code",null,"indeterminate"),a(" 属性，表示不确定状态，一般用于实现全选的效果，实现部分选中的状态。")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(h),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=l=>v.value=l),label:"全选",indeterminate:s.value,onChange:V},null,8,["modelValue","indeterminate"]),o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),onChange:q},{default:d(()=>[(m(),k(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1]},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[8]||(e[8]=t("textarea",{lang:"vue"},`  <script setup>
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
    <lt-checkbox
      v-model="checkAll"
      label="全选"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    />
    <lt-checkbox-group
      v-model="checkedCities"
      @change="handleGroupChange"
    >
      <lt-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
      ></lt-checkbox>
    </lt-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[17]||(e[17]=t("h3",{id:"按钮样式",tabindex:"-1"},[a("按钮样式 "),t("a",{class:"header-anchor",href:"#按钮样式","aria-label":'Permalink to "按钮样式"'},"​")],-1)),e[18]||(e[18]=t("p",null,[a("只需要设置 "),t("code",null,"checkbox"),a(" 的 "),t("code",null,"type"),a(" 为 "),t("code",null,"button"),a("；就能将复选框变为按钮样式")],-1)),o(u,null,{default:d(()=>[o(i,null,{preview:d(()=>[o(n(x),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l)},{default:d(()=>[(m(),k(f,null,C(r,l=>o(n(h),{key:l[0],value:l[0],label:l[1],type:"button"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),default:d(()=>[e[9]||(e[9]=t("textarea",{lang:"vue"},`  <script setup>
    import { ref } from 'vue';
    const cities= [['CD', '成都'], ['BJ', '北京'], ['SZ', '深圳'], ['HZ', '杭州']];
    const checkedCities = ref(['CD', 'SZ']);
  <\/script>
  <template>
    <lt-checkbox-group v-model="checkedCities">
      <lt-checkbox
        v-for="city in cities"
        :key="city[0]"
        :value="city[0]"
        :label="city[1]"
        type="button"
      ></lt-checkbox>
    </lt-checkbox-group>
  </template>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=y('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-label="Permalink to &quot;Checkbox Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>indeterminate</code></td><td>设置不确定状态，仅负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>name</code></td><td>原生 <code>name</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td>原生 <code>value</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td><code>label</code></td><td>显示的标签</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>是否设置为按钮风格</td><td><code>button</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props" aria-label="Permalink to &quot;CheckboxGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定的值</td><td><code>string[]</code></td><td>-</td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;Checkbox Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-label="Permalink to &quot;CheckboxGroup Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选中项变化时触发</td><td><code>(checkList: string[]) =&gt; void</code></td></tr></tbody></table>',9))])}}});export{B as __pageData,G as default};
