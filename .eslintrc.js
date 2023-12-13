const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  // 0-off 1-warn 2-error
  rules: {
    'no-unused-vars': 1, // 禁止出现未使用过的变量
    'no-console': 1, // 禁止使用console
    'no-debugger': 2, // 禁止使用debugger
    'no-param-reassign': 1, // 禁止给参数重新赋值
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
  ],
})
