const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: "./",
  outputDir: "dist/msg",
  assetsDir: "assets",
  devServer: {
    port: 6767,
    host: "0.0.0.0",
    https: false,
    open: true,
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        target: "http://ihrm.itheima.net/",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
