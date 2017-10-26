const path = require('path')
const { name, author } = require('../package.json')

const baseDir = path.resolve(__dirname, '../')
const srcDir = path.resolve(baseDir, './src')
module.exports = {
  baseDir,
  srcDir,
  srcMainDir: path.resolve(srcDir, './main'),
  srcRendererDir: path.resolve(srcDir, './renderer'),
  distDir: path.resolve(baseDir, './dist'),
  releaseDir: path.resolve(baseDir, './release'),
  build: {
    appId: `com.${author}.${name}`,
    productName: 'Markdown365',
    copyright: `Copyright © ${new Date().getFullYear()} ${author}`,
    artifactName: '${productName}-${version}-${os}-${arch}.${ext}',
    asar: true,
    directories: {
      output: path.join(__dirname, '../release')
    },
    linux: {
      target: 'deb',
      icon: path.join(__dirname, '../icons'),
      description: 'Markdown365 —— A powerful markdown editor'
    },
    win: {
      target: 'nsis',
      icon: path.join(__dirname, '../icons/markdown365.ico')
    },
    nsis: {
      oneClick: false,
      perMachine: true,
      allowToChangeInstallationDirectory: true
    }
  }
}
