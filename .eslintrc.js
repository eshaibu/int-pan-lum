const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb-typescript",
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['public/**/*', 'build/**/*'],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".ts", ".tsx"] }],
    "no-console": "warn",
    "react/button-has-type": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
