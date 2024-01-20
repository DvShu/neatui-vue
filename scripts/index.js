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
		"<template>",
		`\t<div id="${name}" class="doc-wrapper">`,
		'\t\t<div class="doc-main"></div>',
		'\t\t<CodePreview title="介绍"></CodePreview>',
		"\t</div>",
		"</template>",
		'<script setup lang="ts">',
		"import CodePreview from '../app_components/CodePreview.vue';",
		"</script>",
	];
	await write(
		path.join(srcPath, "views", `${name}.vue`),
		docTemplateContents.join("\r\n"),
	);

	// 引入生成
	let oldApp = await readFile(path.join(srcPath, "App.vue"), "utf-8");
	oldApp = oldApp
		.replace(
			"/* regist:auto_add */",
			`import ${name} from './views/${name}.vue';\r\n/* regist:auto_add */`,
		)
		.replace("</main>", `\t<${name} />\r\n\t\t\t</main>`);
	await write(path.join(srcPath, "App.vue"), oldApp);
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
