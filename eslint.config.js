import vue from 'eslint-plugin-vue';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  vue.configs['vue3-essential'],
  {
    name: 'neatui-vue',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      vue: vue,
      '@typescript-eslint': typescriptEslint,
    },
    files: ['src/**/*.{ts,vue}'],
    rules: {},
  },
];
