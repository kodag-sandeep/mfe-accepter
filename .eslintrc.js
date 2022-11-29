module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'import', 'react-hooks'],
  rules: {
    'comma-dangle': 'off',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'react/display-name': 'off',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'babel/no-invalid-this': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.63.1',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    it: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    jest: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
  },
};
