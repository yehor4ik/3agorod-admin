/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
      "no-empty-function": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": [
          "off"
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": [
          "error"
      ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    "no-unsafe-any": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "useTabs": true,
        "semi": true,
        "bracketSpacing": true,
        "printWidth": 100,
        "endOfLine": "auto",
        "tabWidth": 2
      }
    ],
  },
}
