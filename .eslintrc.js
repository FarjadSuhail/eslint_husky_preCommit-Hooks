module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-console': 'error',
    'prefer-destructuring': ['error', {
      array: false,
      object: false,
    }],
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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
