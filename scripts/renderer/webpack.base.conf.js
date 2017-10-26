const config = require('../config')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = {
  // 所有路径都相对于src文件夹
  context: config.srcRendererDir,
  entry: {
    app: './index.js'
  },
  output: {
    path: config.distRendererDir,
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': config.srcRendererDir
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [config.srcRendererDir],
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [config.srcRendererDir]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  performance: {
    hints: false
  },

  target: 'electron-renderer',
  stats: 'normal'
}
