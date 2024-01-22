/// <reference types="vite/client" />

interface Grammar {
	index?: any;
}

declare interface Window {
	/** 代码高亮 */
	Prism: {
		/** 高亮所有code[languate-*] */
		highlightAll: (async?: boolean) => void;
		/** 接受一个文本字符串作为输入和要使用的语言定义，并返回一个包含生成的 HTML 的字符串 */
		highlight: (text: string, grammar: Grammar, language: string) => string;
		languages: {
			[index: string]: Grammar;
		};
	};
}
