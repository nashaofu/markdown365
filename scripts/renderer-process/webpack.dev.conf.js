const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const processEnvDev = require('../process.env.dev')
const webpackBaseConf = require('./webpack.base.conf')

// add hot-reload related code to entry chunks
Object.keys(webpackBaseConf.entry).forEach(function (name) {
  webpackBaseConf.entry[name] = [
    path.resolve(__dirname, './dev-client.js'),
    webpackBaseConf.entry[name]
  ]
})

module.exports = webpackMerge(webpackBaseConf, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'stylus-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvDev
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devtool: '#cheap-module-eval-source-map'
})
