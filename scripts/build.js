const chalk = require('chalk')
const config = require('./config')
const mainProdConf = require('./main/webpack.prod.conf')
const rendererProdConf = require('./renderer/webpack.prod.conf')
const {
  rimrafer,
  webpacker,
  builder
} = require('./utils')

rimrafer(config.distDir)
  .then(() => rimrafer(config.releaseDir))
  .then(() => webpacker(mainProdConf))
  .then(() => webpacker(rendererProdConf))
  .then(() => builder('Windows'))
  .then(() => {
    console.log(chalk.cyan('  Build All complete.\n'))
  })
  .catch(error => {
    throw error
  })
