const path = require('path')

const basedir = path.resolve(__dirname, '../../')
module.exports = {
  basedir,
  srcdir: path.resolve(basedir, './src'),
  distdir: path.resolve(basedir, './dist')
}
