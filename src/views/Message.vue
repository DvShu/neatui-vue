<template>
  <DocMain>
    <h1>Message 消息提示</h1>
    <p>常用于主动操作后的反馈提示。更多用于系统级通知的被动提醒。</p>
    <CodeExample>
      <PcCodePreview lang="js" title="基础用法" :code="code1">
        <template v-slot:description>
          <p>从顶部出现，3 秒后自动消失; 可以接收一个字符串被显示为正文内容</p>
        </template>
        <template v-slot:preview>
          <Button @click="Message.info('这是一条普通的提示信息')">
            显示信息
          </Button>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="js" title="不同状态" :code="code2">
        <template v-slot:description>
          <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
          <p>
            当需要自定义更多属性时，Message 也可以接收一个对象为参数。
            比如，设置 type 字段可以定义不同的状态，默认为 info 。
            此时正文内容以 message 的值传入。 同时，也为 Message 的各种 type
            注册了方法，可以在不传入 type 字段的情况下, 直接调用指定类型的函数,
            例如: Message.info('x')。
          </p>
        </template>
        <template v-slot:preview>
          <Button @click="Message.success('这是一条普通的提示信息')">
            成功信息
          </Button>
          <Button @click="Message.warn('这是一条普通的提示信息')" class="ml-10">
            警告信息
          </Button>
          <Button
            @click="Message.error('这是一条普通的提示信息')"
            class="ml-10"
          >
            错误信息
          </Button>
          <Button @click="Message.info('这是一条普通的提示信息')" class="ml-10">
            普通信息
          </Button>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="js" title="手动关闭" :code="code4">
        <template v-slot:description>
          <p>
            将 duration 属性设置为 0, 可以使 Message
            不自动消失。然后显示消息的函数会返回一个消息 id, 通过手动调用 close
            手动关闭
          </p>
        </template>
        <template v-slot:preview>
          <Button @click="handleShowMessage(0)">打开</Button>
          <Button @click="handleCloseMessage" class="ml-10">关闭</Button>
        </template>
      </PcCodePreview>

      <PcCodePreview lang="js" title="时间" :code="code3">
        <template v-slot:description>
          <p>通过 duration 属性设定 Message 的持续时间。</p>
        </template>
        <template v-slot:preview>
          <Button @click="handleShowMessage(5000)">持续5秒</Button>
        </template>
      </PcCodePreview>
    </CodeExample>
    <h2>API</h2>
    <PropTable :data="propData" title="Message 配置项"></PropTable>
    <MethodTable :data="methodData" title="Message 方法"></MethodTable>
  </DocMain>
</template>

<script setup lang="ts">
import DocMain from '../app_components/DocMain.vue';
import CodeExample from '../app_components/CodeExample.vue';
import PcCodePreview from '../app_components/PcCodePreview.vue';
import Message from '../components/Message/index';
import Button from '../components/Button.vue';
import PropTable from '../app_components/PropTable.vue';
import MethodTable from '../app_components/MethodTable.vue';

const code1 = 'NtMessage.info("这是一条普通的提示信息")';

const code2 = `
NtMessage.success("这是一条成功的提示信息");
NtMessage.error("这是一条错误的提示信息");
NtMessage.warning("这是一条警告的提示信息");
NtMessage.info("这是一条普通的提示信息");
`;

const code3 = `NtMessage.info({
  message: "这是一条提示信息",
  duration: 5000
})`;

const code4 = `
// 打开消息
let msgId = NtMessage.info({
  message: '这是一条提示信息',
  duration: 0
})

// 关闭消息
NtMessage.close(msgId)
`;
let $msgId = '';

function handleShowMessage(duration = 3000) {
  $msgId = Message.info({
    message: '这是一条提示信息',
    duration,
  });
}

function handleCloseMessage() {
  Message.close($msgId);
}

const propData = [
  {
    name: 'message',
    description: '消息文字',
    default: '',
    type: 'string',
  },
  {
    name: 'type',
    description: '消息类型',
    default: 'info',
    type: 'info | success | warn | error',
  },
  {
    name: 'customClass',
    description: '自定义类名',
    default: '',
    type: 'string',
  },
  {
    name: 'duration',
    description: '显示时间，单位为毫秒。 设为 0 则不会自动关闭',
    default: '3000',
    type: 'number',
  },
];

const methodData = [
  {
    name: 'info',
    param: '{...}',
    description: '显示普通消息, 参数为配置项, 返回消息id',
    return: 'string',
  },
  {
    name: 'success',
    param: '{...}',
    description: '成功消息',
    return: 'string',
  },
  {
    name: 'warn',
    param: '{...}',
    description: '警告消息',
    return: 'string',
  },
  {
    name: 'error',
    param: '{...}',
    description: '错误消息',
    return: 'string',
  },
  {
    name: 'close',
    param: 'id',
    description:
      '关闭消息, 调用 Message 会返回当前 Message 的id。 如果需要手动关闭实例，可以调用它的 close 方法。',
    return: 'void',
  },
];
</script>

<style lang="less"></style>
