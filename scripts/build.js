const path = require('path')
const { build } = require('electron-builder')
const chalk = require('chalk')
const { name, author } = require('../package.json')

const config = {
  platform: 'all',
  appId: `com.${author}.${name}`,
  productName: 'Markdown365',
  copyright: `Copyright © ${new Date().getFullYear()} ${author}`,
  artifactName: '${productName}-${version}-${os}-${arch}.${ext}',
  asar: true,
  out: path.join(__dirname, '../release'),
  overwrite: true,
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

module.exports = async () => {
  return await build(config).then(() => {
    console.log(chalk.cyan('Build complete.\n'))
  }).catch(error => {
    throw error
  })
}
