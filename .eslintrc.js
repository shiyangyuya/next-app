const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  extends: ['next/core-web-vitals', 'plugin:import/warnings', 'prettier'],
})
