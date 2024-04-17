import path from 'path';
import { mkdir, readFile } from 'fs/promises';
import { write, traverseDir } from 'ph-utils/file';
import vue from '@vitejs/plugin-vue';
import { build } from 'vite';
import dts from 'vite-plugin-dts';
const srcPath = path.join(process.cwd(), 'src');
const templatePath = path.join(srcPath, 'components');
const stylePath = path.join(process.cwd(), 'style');

/**
 * 将风格由大写风格转换为下划线风格: IconFont -> icon_font
 *
 * @param name 驼峰式命名的字符串, 例如: IconFont
 * @returns 返回转换后的蛇形命名字符串
 */ function snakeCaseStyle(name) {
  if (!name) return ''; // 处理null或undefined的输入
  const snakeName = name.replace(/([A-Z])/g, (match, _p, offset) => {
    return (offset ? '_' : '') + match.toLowerCase();
  });
  return snakeName;
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
  await write(path.join(styleDir, 'index.css'), '');
  await write(path.join(styleDir, 'index.js'), 'import "./index.css";');

  // 新建组件
  const vueTemp = '<template></template>\r\n<script setup lang="ts"></script>';
  await write(path.join(templatePath, `${name}.vue`), vueTemp);

  // 增加导出
  let exportContent = await readFile(path.join(srcPath, 'index.ts'), 'utf-8');
  exportContent = exportContent.trim();
  exportContent += `\r\nexport { default as ${name} } from "./components/${name}.vue"\r\n`;
  await write(path.join(srcPath, 'index.ts'), exportContent);

  // 应用样式导入
  const docsPath = path.join(process.cwd(), 'docs/.vitepress/theme/index.ts');
  let importContent = await readFile(docsPath, 'utf-8');
  exportContent = exportContent.replace(
    '\r\nexport default DefaultTheme;',
    `import '../../../style/${snakeName}';\r\nexport default DefaultTheme;`,
  );
  await write(docsPath, importContent);

  // 生成文档组件模板
  const docTemplateContents = [
    `# ${name}`,
    `${name}`,
    '## 演示',
    '### 基础用法',
    '基础用法',
    '## API',
    '### ${name} Props',
    '| 参数 | 说明 | 类型 | 默认值 |',
    '| ---- | ---- | ---- | ---- |',
    '| x | x | x | x |',
  ];
  await write(
    path.join(process.cwd(), 'docs/components', `${name}.md`),
    docTemplateContents.join('\r\n'),
  );
  console.log('创建成功');
}

async function scanSourceFile(dir) {
  return new Promise((resolve) => {
    const files = {};
    const absPath = path.join(srcPath, dir);
    traverseDir(
      absPath,
      (filePath) => {
        const relPath = path.relative(absPath, filePath);
        const fileRel = path.relative(process.cwd(), filePath);
        if (relPath.startsWith('Message')) {
          if (relPath.endsWith('.ts')) {
            files[`${dir}/Message/index`] = fileRel;
          }
        } else {
          let filename = path.basename(filePath);
          filename = filename.substring(0, filename.indexOf('.'));
          files[`${dir}/${filename}`] = fileRel;
        }
      },
      () => {
        resolve(files);
      },
    );
  });
}

async function buildLib() {
  const baseBuildOption = {
    outDir: 'lib',
    lib: {
      entry: { 'components/Button': 'src/components/Button.vue' },
      formats: ['es'],
      fileName: (format, entryName) => {
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ph-utils', /\.\/components/, /\.\/directives/],
    },
    emptyOutDir: false,
    copyPublicDir: false,
  };
  const comBuildOption = { ...baseBuildOption };
  comBuildOption.emptyOutDir = true;
  // 解析所有的文件
  const componentFiles = await scanSourceFile('components');
  console.log(componentFiles);
  const directivesFiles = await scanSourceFile('directives');
  // comBuildOption.lib.entry = { ...componentFiles, ...directivesFiles };
  comBuildOption.emptyOutDir = true;
  console.log(comBuildOption);
  await build({
    plugins: [
      vue(),
      dts({
        tsconfigPath: 'tsconfig.types.json',
      }),
    ],
    build: {
      outDir: 'lib',
      lib: {
        entry: 'src/index.ts',
        formats: ['es'],
        fileName: 'index',
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'ph-utils'],
      },
      emptyOutDir: false,
      copyPublicDir: false,
    },
  });

  baseBuildOption.lib.entry = { index: 'src/index.ts' };
  const toFile = path.join(process.cwd(), 'lib/index.js');
  // await build({
  //   plugins: [vue()],
  //   build: baseBuildOption,
  // })
  //   .then(() => {
  //     return readFile(toFile, 'utf-8');
  //   })
  //   .then((d) => {
  //     return write(toFile, d.replaceAll('.vue', '.js'));
  //   });
}

(async () => {
  const argv = process.argv;

  if (argv[2] === 'template') {
    // 创建组件模板
    await createComponentTemplate(argv[3]);
  } else if (argv[2] === 'build') {
    // 构建组件库
    await buildLib();
  }
})();
