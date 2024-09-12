# Theme 主题切换

通过切换主题来减轻长时间使用屏幕带来的视觉疲劳

## 演示

<script setup>
  import { ThemeButton } from '../../src'
</script>

### 基本使用

通过按钮切换主题模式

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <script setup lang="ts">
  </script>
  <template>
    <hr />
  </template>
  </textarea>
  <template #preview>
    <ThemeButton></ThemeButton>
  </template>
  </CodePreview>
</ClientOnly>
