const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const processEnvDev = require('../process.env.dev')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  entry: {
    index: './devtools.js'
  },
  node: {
    __dirname: true,
    __filename: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvDev
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
})
