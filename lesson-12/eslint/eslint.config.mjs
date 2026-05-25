import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, '@stylistic': stylistic },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.node },
        ignores: ['node_modules/**', './eslint.config.mjs'],
        rules: {
            'no-useless-return': 1,
            'no-shadow': 1,
            'no-unused-vars': 1,
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/arrow-spacing': ['error'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/comma-spacing': ['error'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/key-spacing': ['error'],
            '@stylistic/keyword-spacing': ['error'],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
        },
    },
]);
