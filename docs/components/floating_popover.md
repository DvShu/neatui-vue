# FloatingPopover

基于 [floating-u](https://floating-ui.com/docs/getting-started) 实现的 `popover` 组件。

## 演示

<script setup>
  import FloatingPopover from '../../src/components/popover/FloatingPopover.vue'
</script>

### 基础使用

鼠标悬浮显示浮窗

<ClientOnly>
  <CodePreview>
  <textarea lang="vue" v-pre>
  <template>
    <nt-floating-popover>
      <template #trigger>
        <a>悬浮</a>
      </template>
      <span>悬浮内容</span>
    </nt-floating-popover>
  </template>
  </textarea>
  <template #preview>
    <FloatingPopover>
      <template #trigger>
        <a>悬浮</a>
      </template>
      <span>悬浮内容</span>
    </FloatingPopover>
  </template>
  </CodePreview>
</ClientOnly>

## API

### Popover Props

[同 Popover Props 相同](/components/popover#popover-props)
