
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-native', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'never'],
    'valid-jsdoc': 2,
    'no-debugger': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'react-native/no-inline-styles': 2,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
}
