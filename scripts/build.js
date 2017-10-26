const chalk = require('chalk')
const config = require('./config')
const mainProdConf = require('./main/webpack.prod.conf')
const mainRendererConf = require('./renderer/webpack.prod.conf')
const {
  rimrafer,
  webpacker,
  builder
} = require('./utils')

rimrafer(config.distDir)
  .then(() => rimrafer(config.releaseDir))
  .then(() => webpacker(mainProdConf))
  .then(() => webpacker(mainRendererConf))
  .then(() => builder('Windows'))
  .then(() => {
    console.log(chalk.cyan('  Build complete.\n'))
  })
  .catch(error => {
    throw error
  })
