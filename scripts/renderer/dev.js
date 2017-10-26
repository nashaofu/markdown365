const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const connectHistoryApiFallback = require('connect-history-api-fallback')
const webpackDevConf = require('./webpack.dev.conf')
const app = express()
const compiler = webpack(webpackDevConf)

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/'
})

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(connectHistoryApiFallback())

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at http:127.0.0.1:8080' + '\n')
})

app.listen(8080)
