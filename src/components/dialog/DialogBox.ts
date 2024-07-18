import { render, createVNode, VNode } from 'vue';
import { isBlank } from 'ph-utils';
function getContainer() {
  return document.createElement('div');
}

type MessageOption = {
  showCancel?: boolean;
  type?: string;
};

function alert(message: string, title?: string, option?: MessageOption) {
  return new Promise((resolve) => {
    const opts = { showCancel: false, maskClosable: false, ...option };
    let container = getContainer();
    const onClose = (action: 'close' | 'ok') => {
      resolve(action === 'ok' ? true : false);
      if (vnode != null && vnode.component != null) {
        vnode.component.props.show = false;
      }
      vnode = undefined as any;
      container = undefined as any;
    };
    const props: any = {
      message,
      show: true,
      showCancel: opts.showCancel,
      onClose,
      to: container,
    };

    if (!isBlank(title)) {
      props.title = title;
    }

    if (!isBlank(opts.type)) {
      props.type = opts.type;
    }

    import('./MessageDialog.vue').then((res) => {
      vnode = createVNode(res.default, props);
      render(vnode, container);
      document.body.appendChild(container.firstElementChild as any);
    });

    let vnode: VNode;
  });
}

function confirm(message: string, title?: string, option?: MessageOption) {
  const opts = {
    type: 'info',
    showCancel: true,
    maskClosable: true,
    ...option,
  };
  return alert(message, title, opts);
}

function prompt(tip: string, title?: string) {
  return new Promise((resolve) => {
    let container = getContainer();

    const onClose = (value: string) => {
      resolve(value);
      if (vnode != null && vnode.component != null) {
        vnode.component.props.show = false;
      }
      vnode = undefined as any;
      container = undefined as any;
    };

    const props: any = {
      tip,
      show: true,
      onClose,
      to: container,
    };

    if (!isBlank(title)) {
      props.title = title;
    }

    import('./PromptDialog.vue').then((res) => {
      vnode = createVNode(res.default, props);
      render(vnode, container);

      document.body.appendChild(container.firstElementChild as any);
    });

    let vnode: VNode;
  });
}

export default {
  alert,
  confirm,
  prompt,
};
