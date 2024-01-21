import path from "path";
import { mkdir, readFile } from "fs/promises";
import { write } from "ph-utils/file";

const srcPath = path.join(process.cwd(), "src");
const templatePath = path.join(srcPath, "components");
const stylePath = path.join(process.cwd(), "style");

/**
 * 将风格由大写风格转换为下划线风格: IconFont -> icon_font
 * @param name 命名, 例如: IconFont
 */
function snakeCaseStyle(name) {
	const snakeName = name.replace(/([A-Z])/g, (match) => {
		return `_${match.toLowerCase()}`;
	});
	return snakeName[0] === "_" ? snakeName.substring(1) : snakeName;
}

/**
 * 创建组件模板
 * @param {String} name 模板名称
 */
async function createComponentTemplate(name) {
	const snakeName = snakeCaseStyle(name);
	// 创建样式文件
	const styleDir = path.join(stylePath, snakeName);
	await mkdir(styleDir);
	await write(path.join(styleDir, "index.css"), "");
	await write(path.join(styleDir, "index.js"), 'import "./index.css";');

	// 更新本地样式引用
	let mainContent = await readFile(path.join(srcPath, "main.ts"), "utf-8");
	const newMainContent = [
		`import "../style/${snakeName}/index.css";`,
		"\r\n",
		"import App",
	];
	mainContent = mainContent.replace("import App", newMainContent.join(""));
	await write(path.join(srcPath, "main.ts"), mainContent);

	// 新建组件
	const vueTemp = '<template></template>\r\n<script setup lang="ts"></script>';
	await write(path.join(templatePath, `${name}.vue`), vueTemp);

	// 增加导出
	let exportContent = await readFile(path.join(srcPath, "index.ts"), "utf-8");
	exportContent = exportContent.trim();
	exportContent += `\r\nexport { default as ${name} } from "./components/${name}.vue"\r\n`;
	await write(path.join(srcPath, "index.ts"), exportContent);

	// 增加引入
	let appContent = await readFile(path.join(srcPath, "App.vue"), "utf-8");
	const matches = appContent.match(/import {(.*)} from '\.\/index'/);
	if (matches) {
		const newContent = `${matches[1].trim()}, ${name}`;
		appContent = appContent.replace(
			matches[0],
			`import { ${newContent} } from './index'`,
		);
	}
	await write(path.join(srcPath, "App.vue"), appContent);
	console.log("创建成功");
}

async function createDocTemplate(name) {
	// 生成文档组件模板
	const docTemplateContents = [
		`<div id="${name}" class="doc-wrapper">`,
		`\t<div class="nt-scrollbar doc-main">`,
		"\t\t<h2>主题定制</h2>",
		"\t\t<h3>样式变量</h3>",
		"\t\t<p>组件提供了下列 CSS 变量，可用于自定义样式，</p>",
		'\t\t<table class="nt-table">',
		"\t\t\t<thead><tr><th>名称</th><th>描述</th><th>默认值</th></tr></thead>",
		"\t\t\t<tbody>",
		"\t\t\t\t<tr><td>--nt-</td><td></td>css变量<td></td>0</tr>",
		"\t\t\t</tbody>",
		"\t\t</table>",
		"\t</div>",
		"</div>",
	];
	await write(
		path.join(srcPath, "views", `${name}.html`),
		docTemplateContents.join("\r\n"),
	);
}

(async () => {
	const argv = process.argv;

	if (argv[2] === "template") {
		// 创建组件模板
		await createComponentTemplate(argv[3]);
	} else if (argv[2] === "docTemplate") {
		// 创建文档模板
		await createDocTemplate(argv[3]);
	}
})();
