module.exports = {
  pages: {
    index: {
      // 入口文件
      entry: "examples/main.js",
      // 目标文件
      template: "public/index.html",
      // 出口文件
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.module.rule('js').include.add('/packages').end().use('babel').loader('babel-laoder').tap(ootions => {
      // 修改他的选项
      return ootions
    })
  }

}