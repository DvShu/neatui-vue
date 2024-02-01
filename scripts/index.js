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

	// 生成文档组件模板
	const docTemplateContents = [
		"<template>",
		"\t<DocMain>",
		`\t\t<h1>${name}</h1>`,
		"\t\t<p></p>",
		"\t\t<CodeExample>",
		'\t\t\t<PcCodePreview lang="html" code="" title="基础用法">',
		"\t\t\t\t<template v-slot:description>",
		"\t\t\t\t\t<p></p>",
		"\t\t\t\t</template>",
		"\t\t\t</PcCodePreview>",
		"\t\t</CodeExample>",
		"\t\t<h2>API</h2>",
		`\t\t<PropTable :data="propData" title="${name} Props"></PropTable>`,
		`\t\t<SlotTable :data="slotData" title="${name} Slots"></SlotTable>`,
		`\t\t<MethodTable :data="methodData" title="${name} Methods"></MethodTable>`,
		'\t\t<ThemeTable :rows="vars"></ThemeTable>',
		"\t</DocMain>",
		"</template>",
		"\r\n",
		'<script lang="ts" setup>',
		"import ThemeTable from '../app_components/ThemeTable.vue';",
		`import ${name} from '../components/${name}.vue'`,
		"import DocMain from '../app_components/DocMain.vue';\r\n",
		"import CodeExample from '../app_components/CodeExample.vue';",
		"import PcCodePreview from '../app_components/PcCodePreview.vue';",
		"import PropTable from '../app_components/PropTable.vue';",
		"import SlotTable from '../app_components/SlotTable.vue';",
		"import MethodTable from '../app_components/MethodTable.vue';",
		"const vars = [{name: '',description: '',default: ''}]",
		"const propData = [{name:'',description: '',default: '',type:''}]",
		"const slotData = [{name:'',param:'()',description:''}]",
		"const methodData = [{name:'',param:'',description:'',return:''}]",
		"</script>",
	];
	await write(
		path.join(srcPath, "views", `${name}.vue`),
		docTemplateContents.join("\r\n"),
	);
	console.log("创建成功");
}

(async () => {
	const argv = process.argv;

	if (argv[2] === "template") {
		// 创建组件模板
		await createComponentTemplate(argv[3]);
	}
})();
