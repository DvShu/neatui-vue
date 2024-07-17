import { render, createVNode } from 'vue';
import AlertDialog from './MessageDialog.vue';
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
    const opts = { showCancel: false, ...option };
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

    let vnode = createVNode(AlertDialog, props);
    render(vnode, container);
    document.body.appendChild(container.firstElementChild as any);
  });
}

function confirm(message: string, title?: string, option?: MessageOption) {
  const opts = { type: 'info', showCancel: true, ...option };
  return alert(message, title, opts);
}

export default {
  alert,
  confirm,
};
