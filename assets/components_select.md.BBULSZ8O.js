import{H as c}from"./chunks/theme.1La-IM7t.js";import{f as b,c as w,ag as v,l as t,w as o,b as l,R as s,a1 as V,o as P,u as a}from"./chunks/framework.DdiFAQ9y.js";const U=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md","lastUpdated":1732085261000}'),q={name:"components/select.md"},N=Object.assign(q,{setup(S){const f=["苹果","香蕉","橙子","葡萄","柠檬","草莓","樱桃","芒果","猕猴桃","杨梅","菠萝","西瓜","哈密瓜","桃子","梨","柿子","榴莲","椰子","龙眼","荔枝"],i=f.slice(0,10).map((p,e)=>({value:e,label:p})),h=b(i),r=b(""),x=b([]),u=b([]),g=b(!1);function y(p){g.value=!0,setTimeout(()=>{p?h.value=f.filter(e=>e.includes(p)).map((e,n)=>({value:n,label:e})):h.value=f.slice(0,10).map((e,n)=>({value:n,label:e})),g.value=!1},1500)}return(p,e)=>{const n=V("CodePreview"),m=V("ClientOnly");return P(),w("div",null,[e[13]||(e[13]=v('<h1 id="select-选择器" tabindex="-1">Select 选择器 <a class="header-anchor" href="#select-选择器" aria-label="Permalink to &quot;Select 选择器&quot;">​</a></h1><p>下拉选择器</p><ul><li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器</li><li>当选项过多时，使用下拉菜单展示并选择内容</li></ul><blockquote><p><code>nt-select</code> 的默认宽度更改为 <code>100%</code> 当使用内联形式时，宽度将显示异常。为了保持显示正常, 您需要手动配置 <code>nt-select</code> 的宽度</p></blockquote><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>基础用法</p>',7)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=d=>r.value=d),style:{width:"180px"}},null,8,["options","modelValue"])]),default:o(()=>[e[8]||(e[8]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];
    //-
    const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
    //-
    const value = ref('');
  <\/script>
  <template>
    <lt-select :options="options" v-model="value" style="width:180px;"></lt-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[14]||(e[14]=l("h3",{id:"多选",tabindex:"-1"},[s("多选 "),l("a",{class:"header-anchor",href:"#多选","aria-label":'Permalink to "多选"'},"​")],-1)),e[15]||(e[15]=l("p",null,[s("设置 "),l("code",null,"multiple"),s(" 属性即可启用多选， 此时 "),l("code",null,"v-model"),s(" 的值为当前选中值所组成的数组。默认情况下选中值会以 "),l("a",{href:"/litos-ui-vue/components/tag",target:"_blank"},"Tag"),s(" 组件的形式展现， 你也可以设置 "),l("code",null,"collapse-tags"),s(" 属性将它们合并为一段文字。")],-1)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=d=>x.value=d),multiple:"",style:{width:"180px"}},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":""},null,8,["options","modelValue"])]),default:o(()=>[e[9]||(e[9]=l("textarea",{lang:"vue"},`  <template>
    <lt-select :options="options" v-model="value1" multiple style="width:180px;"></lt-select>
    <lt-select
      :options="options"
      v-model="value2"
      multiple
      style="width:180px;"
      class="ml-10"
      collapse-tags
    ></lt-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[16]||(e[16]=l("h3",{id:"可清空",tabindex:"-1"},[s("可清空 "),l("a",{class:"header-anchor",href:"#可清空","aria-label":'Permalink to "可清空"'},"​")],-1)),e[17]||(e[17]=l("p",null,[s("设置 "),l("code",null,"clearable"),s(" 属性，则可将选择器清空。使用清除图标来清除选择。")],-1)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=d=>r.value=d),style:{width:"180px"},clearable:""},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":"",clearable:""},null,8,["options","modelValue"])]),default:o(()=>[e[10]||(e[10]=l("textarea",{lang:"vue"},`  <template>
  <lt-select
    :options="options"
    v-model="selectedValue"
    style="width:180px;"
    clearable
  ></lt-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[18]||(e[18]=v('<h3 id="过滤选项" tabindex="-1">过滤选项 <a class="header-anchor" href="#过滤选项" aria-label="Permalink to &quot;过滤选项&quot;">​</a></h3><p>可以利用过滤功能快速查找选项。</p><p>为 <code>nt-select</code> 添加 <code>filterable</code> 属性即可启用搜索功能。 默认情况下，<code>Select</code> 会找出所有 <code>label</code> 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 <code>filter</code> 函数来实现。 <code>filter</code> 为一个 <code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值以及当前选项，返回值为 <code>boolean</code> 表明当前选项是否符合过滤。</p>',3)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:a(i),modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=d=>r.value=d),style:{width:"180px"},filterable:""},null,8,["options","modelValue"]),t(a(c),{options:a(i),modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=d=>u.value=d),multiple:"",style:{width:"180px"},class:"ml-10","collapse-tags":"",filterable:""},null,8,["options","modelValue"])]),default:o(()=>[e[11]||(e[11]=l("textarea",{lang:"vue"},`  <template>
    <lt-select
      :options="options"
      v-model="selectedValue"
      style="width:180px;"
      filterable
    ></lt-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[19]||(e[19]=v('<h3 id="远程搜索" tabindex="-1">远程搜索 <a class="header-anchor" href="#远程搜索" aria-label="Permalink to &quot;远程搜索&quot;">​</a></h3><p>搜索框和远程数据结合，输入关键字以从远程服务器中查找数据。</p><p>为了启用远程搜索，需要将 <code>filterable</code> 和 <code>remote</code> 同时设置为 <code>true</code>，同时监听 <code>on-search</code> 事件，事件参数为输入的值, 可以在事件中搜索远程结果，并重新更新 <code>options</code> 选项 。</p>',3)),t(m,null,{default:o(()=>[t(n,null,{preview:o(()=>[t(a(c),{options:h.value,modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=d=>r.value=d),style:{width:"180px"},filterable:"",remote:"",onSearch:y,loading:g.value},null,8,["options","modelValue","loading"])]),default:o(()=>[e[12]||(e[12]=l("textarea",{lang:"vue"},`  <script setup lang="ts">
    const fruits = ["苹果", "香蕉", "橙子", "葡萄", "柠檬", "草莓", "樱桃", "芒果", "猕猴桃", "杨梅", "菠萝", "西瓜", "哈密瓜", "桃子", "梨", "柿子", "榴莲", "椰子", "龙眼", "荔枝"];
    const options = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
    //-
    const loading = ref(false);
    const options2 = ref(options);
    const selectedValue = ref('');
    //-
    function handleSearch(val) {
      loading.value = true;
      setTimeout(() => {
        if (val) {
          options2.value = fruits.filter((item) => item.includes(val)).map((item, i) => { return { value: i, label: item } })
        } else {
          options2.value = fruits.slice(0, 10).map((item, i) => { return { value: i, label: item } });
        }
        loading.value = false;
      }, 1500);
    }
  <\/script>
  <template>
    <lt-select
      :options="options2"
      v-model="selectedValue"
      style="width:180px;"
      filterable
      remote
      @search="handleSearch"
      :loading="loading"
    ></lt-select>
  </template>
  `,-1))]),_:1})]),_:1}),e[20]||(e[20]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="select-props" tabindex="-1">Select Props <a class="header-anchor" href="#select-props" aria-label="Permalink to &quot;Select Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>选中项绑定值</td><td><code>string、number、array</code></td><td>-</td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><code>string</code></td><td>请选择</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>label-field</code></td><td>选项 <code>label</code> 的字段名</td><td><code>string</code></td><td><code>label</code></td></tr><tr><td><code>value-field</code></td><td>选项 <code>value</code> 的字段名</td><td><code>string</code></td><td><code>value</code></td></tr><tr><td><code>options</code></td><td>配置选项内容</td><td><code>SelectOption[]</code></td><td>-</td></tr><tr><td><code>multiple</code></td><td>是否多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>collapse-tags</code></td><td>多选时是否将选中值按文字的形式展示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清空</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>filterable</code></td><td>是否启用过滤</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>filter</code></td><td>自定义的过滤函数</td><td><code>(match: string, option: SelectOption) =&gt; boolean</code></td><td>-</td></tr><tr><td><code>remote</code></td><td>是否启用远程搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>是否为加载状态, 通常为远程搜索时使用</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="selectoption-property" tabindex="-1">SelectOption Property <a class="header-anchor" href="#selectoption-property" aria-label="Permalink to &quot;SelectOption Property&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>label</code></td><td>选项标签</td><td><code>string</code></td><td>-</td></tr><tr><td><code>value</code></td><td>选项值</td><td><code>string、number</code></td><td>-</td></tr><tr><td><code>class</code></td><td>自定义一个选项的类名</td><td><code>string</code></td><td>-</td></tr><tr><td><code>render</code></td><td>渲染整个选项</td><td><code>(option: SelectOption, isSelect: boolean, selectedValues?: any | any[]) =&gt; VNode[] | VNode</code></td><td>-</td></tr></tbody></table><h3 id="select-events" tabindex="-1">Select Events <a class="header-anchor" href="#select-events" aria-label="Permalink to &quot;Select Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>search</code></td><td>远程搜索时触发</td><td><code>(search: string): void</code></td></tr></tbody></table>',7))])}}});export{U as __pageData,N as default};
