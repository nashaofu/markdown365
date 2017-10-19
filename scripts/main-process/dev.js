const webpack = require('webpack')
const webpackDevConf = require('./webpack.dev.conf')
const compiler = webpack(webpackDevConf)

compiler.plugin('watch-run', (compilation, done) => {
  console.log('compiling...')
  done()
})
// compiler.watch({}, (err, stats) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   console.log(stats)
//   if (electronProcess && electronProcess.kill) {
//     manualRestart = true
//     process.kill(electronProcess.pid)
//     electronProcess = null
//     startElectron()

//     setTimeout(() => {
//       manualRestart = false
//     }, 5000)
//   }
// })
