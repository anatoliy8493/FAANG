module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/test.tsx', '**/test.ts']}],
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0, maxEOF: 0}],
    'object-curly-newline': 'off',
    'brace-style': ['error', '1tbs', {allowSingleLine: false}],
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
  },
  env: {
    browser: true,
    es6: true,
  },
};
