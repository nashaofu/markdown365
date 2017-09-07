const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const { version } = require('./package')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './views'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        })
      },
      {
        test: /\.styl(us)?$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${isDevelopment ? 'development' : 'production'}"`,
        VERSION: `"${version}"`
      }
    }),
    new ExtractTextWebpackPlugin('[name].css')
  ],
  performance: {
    hints: false
  },

  devtool: isDevelopment ? '#cheap-module-eval-source-map' : false,
  target: 'electron-renderer',
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

if (isDevelopment) {
  module.exports.plugins = [
    ...module.exports.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
} else {
  module.exports.plugins = [
    ...module.exports.plugins,
    new CleanWebpackPlugin(path.resolve(__dirname, './views')),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
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
