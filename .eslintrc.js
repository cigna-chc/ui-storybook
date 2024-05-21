module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    curly: 1,
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'ordered-imports': [0],
    'object-literal-sort-keys': [0],
    'max-len': [1, 120, {
      ignoreUrls: true,
    }, {
      ignoreComments: true,
    }],
    'new-parens': 1,
    'no-bitwise': 1,
    'no-cond-assign': 1,
    'no-trailing-spaces': 0,
    'eol-last': 1,
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    semi: 1,
    'no-var': 0,
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-unused-vars': 2,
  },
};