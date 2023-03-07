module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs', '@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['vue', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    // import
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'sort-imports': 0,
    'vue/no-v-for-template-key': 'off',
    'camelcase': 'off',
    'import/no-named-as-default-member': 0,

    // vue
    'no-unneeded-ternary': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/no-reserved-props': 0,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'vue/no-v-html': 'off',
    'vue/attributes-order': 'error',
    'vue/v-slot-style': 'error'
  }
}
