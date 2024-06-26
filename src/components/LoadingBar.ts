import { isRef } from 'vue';
import type { Ref } from 'vue';

/** 加载条 */
export default class LoadingBar {
  /** 加载条节点 */
  public el!: HTMLDivElement;
  public parent: HTMLElement;
  /** 当前状态, 0 - 初始状态, 1 - 加载中, 2 - 加载成功, 3 - 加载失败, 4 - 已经关闭 */
  public status: number;
  private transitionEnd: (e: Event) => void;

  /**
   * 构建加载条
   * @param to 加载条挂载位置, 不传则挂载到 body
   */
  public constructor(to?: string | HTMLElement | Ref<HTMLElement>) {
    this.transitionEnd = this._animEndListener.bind(this);
    this.status = 0;
    let toElem: HTMLElement | null = null;
    if (to != null) {
      if (typeof to === 'string') {
        toElem = document.querySelector(to);
      } else {
        if (isRef(to)) {
          toElem = to.value;
        } else {
          toElem = to;
        }
      }
    }
    if (toElem == null) {
      toElem = document.body;
    }
    this.parent = toElem;
    this._render();
  }

  /** 开启动画 */
  public start() {
    if (this.el == null) {
      this._render();
    }
    setTimeout(() => {
      this.el.classList.add('nt-loading-bar-container--start');
    }, 20);
    this.status = 1;
  }

  /** 结束 */
  public finish() {
    if (this.el != null) {
      this.el.className =
        'nt-loading-bar-container nt-loading-bar-container--finish';
      this.status = 2;
    }
  }

  /** 错误 */
  public error() {
    if (this.el != null) {
      this.el.className =
        'nt-loading-bar-container nt-loading-bar-container--error';
      this.status = 3;
    }
  }

  /** 关闭 */
  public close() {
    this.status = 4;
    if (this.el != null) {
      this.parent.removeChild(this.el);
      (this.el as any) = null;
    }
  }

  /** 释放资源, 一旦释放就不能再调用其它函数 */
  public destroy() {
    this.close();
    (this.parent as any) = null;
    (this.transitionEnd as any) = null;
    (this.status as any) = null;
  }

  /** 渲染节点 */
  private _render() {
    this.el = document.createElement('div');
    this.el.className = 'nt-loading-bar-container';
    if (this.parent.tagName !== 'BODY') {
      this.el.style.position = 'absolute';
    } else {
      this.parent.style.position = 'relative';
    }
    let barInst = document.createElement('div');
    barInst.className = 'nt-loading-bar';

    /** 动画结束 */

    barInst.addEventListener('transitionend', this.transitionEnd);
    this.el.appendChild(barInst);
    this.parent.appendChild(this.el);
  }

  private _animEndListener(e: Event) {
    if (this.status === 2 || this.status === 3) {
      (e.target as HTMLDivElement).removeEventListener(
        'transitionend',
        this.transitionEnd,
      );
      this.close();
    }
  }
}
