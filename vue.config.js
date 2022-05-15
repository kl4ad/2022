const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/2022/',
  transpileDependencies: [
    'vuetify'
  ]
})
