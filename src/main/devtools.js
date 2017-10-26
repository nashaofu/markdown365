const path = require('path')
const fs = require('fs')
const os = require('os')
const { BrowserWindow } = require('electron')

// 'darwin', 'freebsd', 'linux', 'sunos' , 'win32'
const platform = os.platform()

let base
switch (platform) {
  case 'win32':
    base = path.join(process.env.LOCALAPPDATA, 'Google/Chrome/User Data/Default/Extensions')
    break
  case 'darwin':
    base = path.join(process.env.HOME, 'Library/Application Support/Google/Chrome/Default/Extensions')
    break
  case 'linux':
    const dirname = [
      '.config/google-chrome/Default/Extensions/',
      '.config/google-chrome-beta/Default/Extensions/',
      '.config/google-chrome-canary/Default/Extensions/',
      '.config/chromium/Default/Extensions/'
    ]
    for (let i = 0; i < dirname.length; i++) {
      const extensionsPath = path.join(process.env.HOME, dirname[i])
      if (fs.existsSync(extensionsPath)) {
        base = extensionsPath
        break
      }
    }
    break
}

if (base) {
  const extensions = [
    // React
    'fmkadmapgofadopljbjfkapdkoienihi',
    // Redux
    'lmhkpmbekcpmknklioeibfkpmmfibljd'
  ]
  extensions.forEach(name => {
    const pathname = path.join(base, name)
    if (fs.existsSync(pathname)) {
      const files = fs.readdirSync(pathname)
      if (files[0]) {
        const extension = path.join(pathname, files[0])
        // 返回扩展名
        BrowserWindow.addDevToolsExtension(extension)
      }
    }
  })
}
