module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': [
      'error',
      {
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
