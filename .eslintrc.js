module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};