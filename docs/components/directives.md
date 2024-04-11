# Directives 指令

提供了一些常用的自定义指令

### 1. `vClickoutside`

点击元素外事件, 常用于需要点击元素外，关闭某个弹窗; 例如: `Select`、`Tooltip`

<script setup>
import Input from '../../src/components/Input.vue';
import vClickoutside from '../../src/directives/clickoutside';

function handleOutside() {
  console.log('点击了元素外');
}
</script>

<CodePreview>
  <textarea lang="html">
  <div style="width: 200px; height: 50px;">
    <nt-input placeholder="输入过滤" v-clickoutside="handleOutside"></nt-input>
  </div>
  </textarea>
  <template #preview>
    <div style="width: 200px; height: 50px;">
      <Input placeholder="输入过滤" v-clickoutside="handleOutside"></Input>
    </div>
  </template>
</CodePreview>
