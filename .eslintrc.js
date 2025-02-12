module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint-config-prettier',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'airbnb',
      'airbnb-typescript',
      "prettier",
    ],
    ignorePatterns: ['dist', 'vite.config.ts', 'vitest.config.ts', 'tests', '*.cjs', '.eslintrc.js', 'global.d.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    },
    plugins: ['react-refresh', 'prettier', '@typescript-eslint'],
    rules: {
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-bind': 'off',
      'react/require-default-props': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          "": 'never',
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never',
          'mjs': 'never'
        }
      ],
      'import/prefer-default-export': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      "import/order": [
        "error",
        {
          groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index"],
          pathGroups: [
            { pattern: "@Config", group: "internal" },
            { pattern: "@Components", group: "internal" },
            { pattern: "@Components/**", group: "internal" },
            { pattern: "@Hooks", group: "internal" },
            { pattern: "@Hooks/**", group: "internal" },
            { pattern: "@Pages", group: "internal" },
            { pattern: "@Pages/**", group: "internal" },
            { pattern: "@Utils", group: "internal" },
            { pattern: "@Utils/**", group: "internal" },
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["internal"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  };
  