module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  };