module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // eslint-disable-next-line quote-props
    semi: 'off',
    'comma-dangle': ['error', 'never']
  }
}
