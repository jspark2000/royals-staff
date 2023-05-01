/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser' //"parser": "babel-eslint"
  }
}
