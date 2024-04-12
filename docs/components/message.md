# Message 消息提示

常用于主动操作后的反馈提示。更多用于系统级通知的被动提醒。

## 基础用法

<script setup>
  import { Message, Button } from '../../src'

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
</script>

从顶部出现，`3` 秒后自动消失; 可以接收一个字符串被显示为正文内容

<CodePreview>
  <textarea lang="ts">
  NtMessage.info("这是一条普通的提示信息")
  </textarea>
  <template #preview>
    <Button @click="Message.info('这是一条普通的提示信息')">显示信息</Button>
  </template>
</CodePreview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，`Message` 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为 `info` 。 此时正文内容以 `message` 的值传入。 同时，也为 `Message` 的各种 `type` 注册了方法，可以在不传入 `type` 字段的情况下, 直接调用指定类型的函数, 例如: `Message.info('x')`。

<CodePreview>
  <textarea lang="ts">
  NtMessage.success("这是一条成功的提示信息")
  NtMessage.warn("这是一条警告的提示信息")
  NtMessage.error("这是一条错误的提示信息")
  </textarea>
  <template #preview>
    <Button @click="Message.success('这是一条成功的提示信息')" class="ml-10">显示成功</Button>
    <Button @click="Message.warn('这是一条警告的提示信息')" class="ml-10">显示警告</Button>
    <Button @click="Message.error('这是一条错误的提示信息')" class="ml-10">显示错误</Button>
  </template>
</CodePreview>

## 手动关闭

将 `duration` 属性设置为 `0``, 可以使 Message` 不自动消失。然后显示消息的函数会返回一个消息 `id`, 通过手动调用 `close` 手动关闭

<CodePreview>
  <textarea lang="ts">
  // 打开消息
  let msgId = NtMessage.info({
    message: '这是一条提示信息',
    duration: 0
  })
  // 关闭消息
  NtMessage.close(msgId)
  </textarea>
  <template #preview>
    <Button @click="handleShowMessage(0)">打开</Button>
    <Button @click="handleCloseMessage" class="ml-10">关闭</Button>
  </template>
</CodePreview>

## 持续时间

通过 `duration` 属性设定 `Message` 的持续时间。

<CodePreview>
  <textarea lang="ts">
  NtMessage.info({
    message: "这是一条提示信息",
    duration: 5000
  })
  </textarea>
  <template #preview>
    <Button @click="Message.info({ message: '这是一条提示信息', duration: 5000 })">持续5s</Button>
  </template>
</CodePreview>

## API

### Message 配置项

| 名称          | 类型     | 默认值 | 说明                                                           |
| ------------- | -------- | ------ | -------------------------------------------------------------- |
| `message`     | `string` | -      | 消息正文内容                                                   |
| `duration`    | `number` | `3000` | 消息显示的持续时间，单位为毫秒。如果设置为 `0`，则不会自动关闭 |
| `type`        | `string` | `info` | 消息类型，可选值为 `success`、`warning`、`error`、`info`       |
| `customClass` | `string` | -      | 自定义类名                                                     |

### Message 方法

| 名称      | 参数         | 说明                                          | 返回类型 |
| --------- | ------------ | --------------------------------------------- | -------- |
| `info`    | `{...}`      | 显示普通提示信息, 参数为配置项, 返回消息 `id` | `string` |
| `success` | `{...}`      | 显示成功提示信息                              | `string` |
| `warn`    | `{...}`      | 显示警告提示信息                              | `string` |
| `error`   | `{...}`      | 显示错误提示信息                              | `string` |
| `close`   | `id: string` | 手动关闭消息                                  | -        |
