const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const processEnvProd = require('../process.env.prod')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': processEnvProd
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
