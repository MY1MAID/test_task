module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Ваши кастомные правила
    'react/prop-types': 'off', // Отключаем, если используете TypeScript для проверки типов
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
