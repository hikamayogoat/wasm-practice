const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.wasm', '.ts'],
  },
  plugins: [new HtmlWebpackPlugin()],
  // バージョンアップにより、入門資料とは事情が変わっているらしくエラー出力に合わせて追記
  experiments: {
    asyncWebAssembly: true,
  }
}
