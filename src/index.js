import 'normalize.css'
import './stylus/markdown365.styl'
import './stylus/markdown365-icons.styl'
import './app'

if (process.env.NODE_ENV === 'development') {
  const { remote } = require('electron')
  const path = require('path')
  const base = 'C:/Users/nashaofu/AppData/Local/Google/Chrome/User Data/Default/Extensions'
  const extensions = [
    // React
    'fmkadmapgofadopljbjfkapdkoienihi/2.5.0_0',
    // Redux
    'lmhkpmbekcpmknklioeibfkpmmfibljd/2.15.1_0'
  ]
  extensions.forEach(extension => {
    // 返回扩展名
    remote.BrowserWindow.addDevToolsExtension(path.join(base, extension))
  })
}
