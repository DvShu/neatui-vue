# BorderLoadingDirective 边框加载动画

另一种加载动画

## 演示

<script setup>
  import vBorderLoading from '../../src/directives/borderLoading';
  import '../../style/util/border_loading.css'
  import { ref } from 'vue';

  const loading = ref(true);

  const loading1 = ref(15)
</script>

### 区域加载

在某一个区域加载数据时展示, 只需要设置 `v-border-loading` 属性即可。

<ClientOnly>
<CodePreview>
<textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    //-
    const loading = ref(true);
  </script>
  <template>
    <div class="loading-demo" v-border-loading="loading">
      内容加载区域
    </div>
  </template>
</textarea>
  <template #preview>
    <div class="loading-demo" v-border-loading="loading">
      内容加载区域
    </div>
  </template>
  </CodePreview>
</ClientOnly>

### 更改动画时长

只需要将 `v-border-loading` 指向一个数字即可。

<ClientOnly>
  <CodePreview>
  <textarea lang="vue">
  <script setup>
    import { ref } from 'vue';
    //-
    const loading1 = ref(15)
  </script>
  <template>
    <div class="loading-demo" v-border-loading="loading1">
      内容加载区域
    </div>
  </template>
  </textarea>
  <template #preview>
    <div class="loading-demo" v-border-loading="loading1">
      内容加载区域
    </div>
  </template>
  </CodePreview>
</ClientOnly>

> 指令需要设置相对定位: `position: relative`
