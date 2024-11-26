import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

export default [
    {
        files: [
            '**/*.js',
            '**/*.jsx',
            '**/*.ts',
            '**/*.tsx',
            '**/*.json'
        ],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            react: reactPlugin,
        },
        rules: {
            indent: ['error', 4],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-unused-vars': ['warn'],
            'no-unused-vars': ['error'],
            'curly': 'error',
            'keyword-spacing': ['error', { before: true, after: true }],
            'arrow-parens': ['error', 'always'],
        },
    },
];