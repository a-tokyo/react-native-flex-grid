module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plural',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '!src'] },
    ],
    'react-perf/jsx-no-new-array-as-prop': 0,
    'no-restricted-exports': 0,
    'no-unused-vars': 0,
  },
};
