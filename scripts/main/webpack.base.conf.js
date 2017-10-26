const config = require('../config')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = {
  // 所有路径都相对于src文件夹
  context: config.srcMainDir,
  entry: {
    index: './index.js'
  },
  output: {
    path: config.distDir,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': config.srcMainDir
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [config.srcMainDir],
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [config.srcMainDir]
      }
    ]
  },
  performance: {
    hints: false
  },

  target: 'electron-main',
  stats: 'normal'
}
