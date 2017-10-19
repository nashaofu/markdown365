const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const electron = require('electron')
const childProcess = require('child_process')
const config = require('../config')
const webpackDevConf = require('./webpack.dev.conf')
const compiler = webpack(webpackDevConf)

let electronProcess = null
let manualRestart = false
compiler.watch({}, (err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  if (electronProcess && electronProcess.kill) {
    manualRestart = true
    process.kill(electronProcess.pid)
  }

  electronProcess = childProcess.spawn(electron, [
    '--inspect=5858',
    path.resolve(config.distMainProcessDir, './app.js')
  ])

  electronProcess.stdout.on('data', data => chalk.blue(data))
  electronProcess.stderr.on('data', data => chalk.red(data))

  electronProcess.on('close', () => {
    if (!manualRestart) {
      process.exit()
    }
  })
  manualRestart = false
})
