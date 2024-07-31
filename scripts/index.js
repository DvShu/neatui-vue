import path from 'path';
import { mkdir, readFile } from 'fs/promises';
import { write } from 'ph-utils/file';
import { snakeCaseStyle } from 'ph-utils';
const srcPath = path.join(process.cwd(), 'src');
const templatePath = path.join(srcPath, 'components');
const stylePath = path.join(process.cwd(), 'style');

function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}
/**
 * 创建组件模板
 * @param {String} name 模板名称
 */
async function createComponentTemplate(name) {
  const snakeName = snakeCaseStyle(name, '-');
  // 创建样式文件
  const styleDir = path.join(stylePath, snakeName);

  mkdir(styleDir)
    .then(() => {
      return Promise.all([
        write(path.join(styleDir, 'index.css'), ''),
        write(path.join(styleDir, 'index.js'), 'import "./index.css";'),
      ]);
    })
    .catch(() => {});

  // 新建组件
  const vueTemp = '<template></template>\r\n<script setup lang="ts"></script>';
  await write(path.join(templatePath, `${name}.vue`), vueTemp);

  // 增加导出
  let exportContent = await readFile(path.join(srcPath, 'index.ts'), 'utf-8');
  exportContent = exportContent.trim();
  exportContent += `\r\nexport { default as ${name} } from "./components/${name}.vue";\r\n`;
  await write(path.join(srcPath, 'index.ts'), exportContent);

  // 应用样式导入
  const docsPath = path.join(process.cwd(), 'docs/.vitepress/theme/index.ts');
  let importContent = await readFile(docsPath, 'utf-8');
  importContent = importContent.replace(/\s+export default/, (a, b) => {
    return `\r\nimport '../../../style/${snakeName}';\r\n\r\nexport default`;
  });
  await write(docsPath, importContent);

  // 编辑侧边栏配置
  const configPath = path.join(process.cwd(), 'docs/.vitepress/config.ts');
  let configContent = await readFile(configPath, 'utf-8');
  const configReg = /\(({[\s\S]*?\})\)/;
  configContent = configContent.replace(configReg, (m, b) => {
    const configJson = looseJsonParse(b);
    const sidebar = configJson.themeConfig.sidebar;
    sidebar[3].items.push({
      text: name,
      link: `/components/${name.toLowerCase()}`,
    });
    return `(${JSON.stringify(configJson, null, 2)})`;
  });
  await write(configPath, configContent);

  // 生成文档组件模板
  const docTemplateContents = [
    `# ${name}\r\n`,
    `${name}\r\n`,
    '## 演示\r\n',
    '<script setup>',
    `  import { ${name} } from "../../src"`,
    '</script>\r\n',
    '### 基础用法\r\n',
    '基础用法\r\n',
    '## API\r\n',
    `### ${name} Props\r\n`,
    '<!-- prettier-ignore -->',
    '| 参数 | 说明 | 类型 | 默认值 |',
    '| --- | --- | --- | --- |',
    '| x | x | x | x |',
  ];
  await write(
    path.join(process.cwd(), 'docs/components', `${name.toLowerCase()}.md`),
    docTemplateContents.join('\r\n'),
  );
  console.log('创建成功');
}

(async () => {
  const argv = process.argv;

  if (argv[2] === 'template') {
    // 创建组件模板
    await createComponentTemplate(argv[3]);
  }
})();
