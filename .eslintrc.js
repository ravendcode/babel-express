module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    // ecmaVersion: 2017,
    // ecmaFeatures: {
    //   'jsx': true
    // },
  },
  env: {
    browser: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  globals: {
    io: true,
    moment: true,
    Mustache: true,
    Promise: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'html',
  ],
  rules: {
    'no-console': 1,
    'import/no-extraneous-dependencies': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'prefer-template': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-useless-escape': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'import/export': 0,
  },
};
