const chalk = require('chalk')
const webpack = require('webpack')
const electron = require('electron')
const childProcess = require('child_process')
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
    '.'
  ])

  electronProcess.stdout.on('data', data => console.log(chalk.blue(data)))
  electronProcess.stderr.on('data', data => console.log(chalk.red(data)))

  electronProcess.on('close', () => {
    if (!manualRestart) {
      process.exit()
    }
  })
  setTimeout(() => {
    manualRestart = false
  }, 5000)
})
