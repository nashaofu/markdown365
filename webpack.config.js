const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { version } = require('./package')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: 'index.js'
  },
  output: {
    path: path.resolve(__dirname, './views'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    extensions: ['.js', 'jsx', '.json'],
    alias: {
      'src': path.join(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV} "`,
        VERSION: `"${version}"`
      }
    })
  ],
  performance: {
    hints: false
  },

  target: 'web',
  stats: 'normal',

  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: false,
    port: 8080,
    noInfo: true,
    inline: true,
    stats: 'errors-only'
  }
}

if (process.env.NODE_ENV === 'development') {
  module.exports.devtool = '#cheap-module-eval-source-map'
  module.exports.plugins = [
    ...module.exports.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    ...module.exports.plugins,
    new CleanWebpackPlugin(path.resolve(__dirname, './views')),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}
