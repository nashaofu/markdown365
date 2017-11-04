const ora = require('ora')
const chalk = require('chalk')
const rimraf = require('rimraf')
const webpack = require('webpack')
const { build, Platform } = require('electron-builder')
const config = require('./config')

/**
 * 删除目录
 * @param {String} dirname
 */
const rimrafer = dirname => {
  const spinner = ora(`removing ${dirname}...`)
  spinner.start()
  return new Promise((resolve, reject) => {
    rimraf(dirname, async error => {
      spinner.stop()
      if (error) return reject(error)
      resolve()
    })
  })
}

/**
 * webpack打包
 * @param {Object} config
 */
const webpacker = config => {
  const target = config.target.replace('-', ' ')
  const spinner = ora(`building ${target} for production...`)
  spinner.start()
  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      spinner.stop()
      if (error) return reject(error)
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red(`  Build ${target} failed with errors.\n`))
        return reject(stats)
      }
      console.log(chalk.cyan(`  Build ${target} complete.\n`))
      resolve(stats)
    })
  })
}

/**
 * 打包为桌面应用
 * @param {String} platform Windows Linux Mac
 */
const builder = platform => {
  const spinner = ora(`building for ${platform}...`)
  spinner.start()
  const result = build({
    targets: Platform[platform.toUpperCase()].createTarget(),
    config: config.build
  })
  result.then(() => spinner.stop())
    .catch(err => {
      spinner.stop()
      throw err
    })
  return result
}

module.exports = {
  rimrafer,
  webpacker,
  builder
}
