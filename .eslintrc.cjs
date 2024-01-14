/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','import', 'prettier', 'deprecation', 'strict-null-checks', 'typescript', 'simple-import-sort'],
    root: true,
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      // to enforce using type for object type definitions, can be type or interface
      '@typescript-eslint/consistent-type-definitions': ['warning', 'type'],
      'ordered-imports': [true],
      'deprecation/deprecation': 'warn',
      'strict-null-checks/all': 'warn',
      'typescript/no-explicit-any': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/typedef': [
        'warn',
        {
          arrayDestructuring: false,
          arrowParameter: false,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: false,
          variableDeclarationIgnoreFunction: true,
        },
      ],
    },
  };
  