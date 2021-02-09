module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  extends: ['airbnb'],
  rules: {
    'linebreak-style': 0,
    'no-return-await': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'no-console': 'off',
    'no-debugger': 'warn',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': [
      1,
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'global-require': [0],
    'react/prop-types': [0],
    'func-names': [0],
    'import/no-dynamic-require': [0],
    'import/no-unresolved': [0, { caseSensitive: false }],
    'no-undef': [0],
    'class-methods-use-this': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prefer-stateless-function': 0,
    'react/self-closing-comp': 0,
    'react/no-array-index-key': 0,
    'implicit-arrow-linebreak': [0, 'brace-style'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-this-in-sfc': [0],
    'react/no-unused-state': [0],
    'arrow-parens': 0,
    'no-nested-ternary': 0,
    'consistent-return': [0],
    'react/jsx-closing-tag-location': [0],
    'jsx-a11y/no-noninteractive-tabindex': [0],
    'no-throw-literal': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
