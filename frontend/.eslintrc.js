module.exports = {
  'extends': ['standard', 'standard-react'],
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'jquery': false,
    'jest': true,
  },
  'parserOptions': {
    'ecmaVersion': '2020',
    'sourceType': 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  'rules': {
    'indent': ['error', 2, {'SwitchCase': 1}],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-handler-names': 'off',
    'keyword-spacing': 'off',
    'brace-style': ['error', 'stroustrup', {'allowSingleLine': true}],
    'quotes': ['error', 'single', {'avoidEscape': true}],
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'before'],
    'quote-props': 'off',
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
  },
}