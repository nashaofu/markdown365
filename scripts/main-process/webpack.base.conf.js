const config = require('../config')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = {
  // 所有路径都相对于src文件夹
  context: config.srcMainProcessDir,
  entry: {
    app: './index.js'
  },
  output: {
    path: config.distMainProcessDir,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': config.srcMainProcessDir
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [config.srcMainProcessDir],
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [config.srcMainProcessDir]
      }
    ]
  },
  performance: {
    hints: false
  },

  target: 'electron-main',
  stats: 'normal'
}
