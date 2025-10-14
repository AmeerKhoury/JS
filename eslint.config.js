export default [
  {
    files: ['Day*/**/*.js'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
      },
    },

    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      camelcase: ['error', { properties: 'never' }],
      complexity: ['warn', { max: 10 }],
      'max-lines-per-function': ['warn', { max: 200 }],
    },
  },
];
