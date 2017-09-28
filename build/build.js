const path = require('path')
const { build, Platform } = require('electron-builder')
const chalk = require('chalk')
const { name, author } = require('../package.json')

const config = {
  targets: Platform.WINDOWS.createTarget(),
  config: {
    appId: `com.${author}.${name}`,
    productName: 'Markdown365',
    copyright: `Copyright © ${new Date().getFullYear()} ${author}`,
    asar: true,
    artifactName: '${productName}-${version}-${os}-${arch}.${ext}',
    directories: {
      output: path.join(__dirname, '../release')
    },
    // linux: {
    //   target: 'deb',
    //   icon: path.join(__dirname, '../icons'),
    //   description: 'Markdown365 —— a powerfull markdown editor'
    // },
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

module.exports = async () => {
  return await build(config).then(() => {
    console.log(chalk.cyan('Build complete.\n'))
  }).catch(error => {
    throw error
  })
}
