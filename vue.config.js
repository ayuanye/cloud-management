const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        // 这是less新版本的写法 还在测试中
        // prependData: `@import "~@/theme/my-theme.less";`
        javascriptEnabled: true
      }
    },
    // modules: false
  },
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
      .set('static', resolve('static'))
  }
  // chainWebpack(config) {
  //   //新增 低版本兼容问题
  //   config.module.rule('compile')
  //   .test(/\.js$/)
  //   .include
  //   .add(resolve('src'))
  //   .add(resolve('test'))
  //   .add(resolve('node_modules/webpack-dev-server/client'))
  //   .add(resolve('node_modules'))
  //   .end()
  //   .use('babel')
  //   .loader('babel-loader')
  //   .options({
  //     presets: [
  //       ['@babel/preset-env', {
  //         modules: false
  //       }]
  //     ]
  //   })
  // }
})
