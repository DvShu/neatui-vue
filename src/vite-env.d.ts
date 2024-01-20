/// <reference types="vite/client" />

declare interface Window {
  /** 代码高亮 */
  Prism: {
    /** 高亮所有code[languate-*] */
    highlightAll: (async?: boolean) => void;
  };
}
