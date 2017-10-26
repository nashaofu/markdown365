const ora = require('ora')
const rimraf = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackProdConf = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rimraf(config.distMainDir, error => {
  if (error) throw error
  webpack(webpackProdConf, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
  })
})
