module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@api', './src/api'],
          ['@style', './src/style'],
          ['@constants', './src/constants'],
          ['@pages', './src/pages'],
          ['@app', './src/app'],
          ['@utils', './src/utils'],
        ],
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
  },
};
