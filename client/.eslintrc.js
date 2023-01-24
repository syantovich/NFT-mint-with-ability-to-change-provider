module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['warn'],
    'no-console': 'warn',
    '@typescript-eslint/no-empty-function': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
