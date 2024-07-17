import { h, render, createVNode } from 'vue';
import Dialog from './Dialog.vue';

export default {
  alert() {
    return new Promise((resolve, reject) => {
      const vnode = createVNode(
        Dialog,
        {
          title: 'Alert',
          modelValue: true,
          'onUpdate:modelValue': onUpdate,
        },
        () => 'Alert',
      );
      function onUpdate(val: boolean) {
        if (vnode.component != null) {
          vnode.component.props.modelValue = val;
        }
      }
      render(vnode, document.body);
    });
  },
};
