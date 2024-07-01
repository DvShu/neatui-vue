# Loading 加载

数据加载时显示的动效。

## 演示

<script setup>
  import { Loading as vLoading } from '../../src'
  import { ref } from 'vue'

  const loading = ref(true)
</script>

### 区域加载

在某一个区域加载数据时展示加载动画，防止页面失去响应，提高用户体验

<ClientOnly>
  <CodePreview>
  <textarea lang="vue-html">
  <script setup>
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <div class="loading-demo" v-loading="loading">
      内容加载区域
    </div>
  </template>
  </CodePreview>
</ClientOnly>
