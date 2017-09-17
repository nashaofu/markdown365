const path = require('path')
const {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  dialog
} = require('electron')

exports = module.exports = class Markdwown365 {
  // 构造函数
  constructor () {
    this.app = app
    // 应用窗体
    this.$window = null

    // 初始化应用
    this.initialize()
  }

  // 初始化
  initialize () {
    // 主进程事件
    this.onReady()
    this.onQuit()

    this.onClose()
    this.onMaximize()
    this.onRestore()
    this.onMinimize()

    this.onOpenFile()
    this.onSaveFile()
  }

  // 应用准备完毕时执行
  onReady () {
    this.app.on('ready', () => {
      // 移除菜单项
      Menu.setApplicationMenu(null)
      // 创建窗体
      this.createWindow()
    })
  }

  // 当应用的所有窗口关闭时
  onQuit () {
    this.app.on('window-all-closed', () => {
      this.app.quit()
    })
  }

  // 创建窗体
  createWindow () {
    if (this.$window) {
      return
    }
    // 创建浏览器窗口
    this.$window = new BrowserWindow({
      title: 'Markdwown365',
      width: 960,
      height: 600,
      minWidth: 720,
      minHeight: 450,
      center: true,
      frame: false,
      show: false,
      backgroundColor: '#ffffff',
      // icon: path.join(__dirname, '../icon/32x32.png'),
      resizable: true
    })

    // 页面初始化完成之后再显示窗口
    // 并检测是否有版本更新
    this.$window.once('ready-to-show', () => {
      this.$window.show()
    })

    // 窗口关闭后手动让$window为null
    this.$window.on('closed', () => {
      this.$window = null
    })

    // 加载URL地址
    if (process.env.NODE_ENV === 'development') {
      require('./devtools')
      this.$window.webContents.openDevTools()
      this.$window.loadURL('http:127.0.0.1:8080')
    } else {
      this.$window.loadURL(path.join(__dirname, '../views/index.html'))
    }
  }

  // 关闭窗口
  onClose () {
    ipcMain.on('close', () => {
      this.$window.close()
    })
  }

  // 最大化窗口
  onMaximize () {
    ipcMain.on('maximize', () => {
      this.$window.maximize()
    })
  }

  // 取消最大化
  onRestore () {
    ipcMain.on('restore', () => {
      this.$window.restore()
    })
  }

  // 最小化窗口
  onMinimize () {
    ipcMain.on('minimize', () => {
      this.$window.minimize()
    })
  }

  // 打开文件
  onOpenFile () {
    ipcMain.on('openfile', () => {
      dialog.showOpenDialog(
        this.$window,
        {
          filters: [
            { name: 'Markdown', extensions: ['md'] },
            { name: 'All Files', extensions: ['*'] }
          ],
          properties: ['openFile', 'multiSelections']
        }, files => {
          // 没有选择文件就返回undefined
          this.$window.webContents.send('openfile', files)
        }
      )
    })
  }

  // 保存文件
  onSaveFile () {
    ipcMain.on('savefile', () => {
      dialog.showSaveDialog(
        this.$window,
        {
          filters: [
            { name: 'Markdown', extensions: ['md'] },
            { name: 'All Files', extensions: ['*'] }
          ]
        }, filename => {
          // 没有生成文件名就返回undefined
          this.$window.webContents.send('savefile', filename)
        }
      )
    })
  }
}
