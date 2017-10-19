const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const processEnvDev = require('../process.env.dev')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvDev
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
})
