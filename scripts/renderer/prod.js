const webpackProdConf = require('./webpack.prod.conf')
const { webpacker } = require('../utils')

webpacker(webpackProdConf)
  .catch(error => {
    throw error
  })
