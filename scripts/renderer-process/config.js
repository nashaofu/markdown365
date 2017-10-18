const path = require('path')

const baseDir = path.resolve(__dirname, '../../')
const srcDir = path.resolve(baseDir, './src')
const distDir = path.resolve(baseDir, './dist')
module.exports = {
  baseDir,
  srcDir,
  srcMainProcessDir: path.resolve(srcDir, './main-process'),
  srcRendererProcessDir: path.resolve(srcDir, './renderer-process'),
  distDir,
  distMainProcessDir: path.resolve(distDir, './main-process'),
  distRendererProcessDir: path.resolve(distDir, './renderer-process')
}
