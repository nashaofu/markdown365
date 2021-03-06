import path from 'path'
import {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  dialog
} from 'electron'
import buildContextMenu from './build-context-menu'

export default class Markdwown365 {
  // 构造函数
  constructor () {
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

    this.onAppMounted()

    this.onWindowClose()
    this.onWindowMaximize()
    this.onWindowMinimize()

    this.onOpenFile()
    this.onSaveFile()
  }

  // 应用准备完毕时执行
  onReady () {
    app.on('ready', () => {
      // 移除菜单项
      Menu.setApplicationMenu(null)
      // 创建窗体
      this.createWindow()
    })
  }

  // 当应用的所有窗口关闭时
  onQuit () {
    app.on('window-all-closed', () => {
      app.quit()
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
      icon: path.resolve(__dirname, '../icons/markdown365.png'),
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

    // 在窗口最大化的时候触发.
    this.$window.on('maximize', () => {
      this.$window.webContents.send('window-maximize-change', true)
    })
    // 在窗口退出最大化的时候触发.
    this.$window.on('unmaximize', () => {
      this.$window.webContents.send('window-maximize-change', false)
    })

    // 设置缩放限制
    this.$window.webContents.setVisualZoomLevelLimits(1, 1)
    // 监听上下文菜单事件
    this.onContextMenu()
    // 加载URL地址
    if (process.env.NODE_ENV === 'development') {
      this.$window.webContents.openDevTools()
      this.$window.loadURL('http://127.0.0.1:8080')
    } else {
      this.$window.loadURL(`file://${__dirname}/index.html`)
    }
  }

  // react app页面初始化完成(componentDidMount)
  onAppMounted () {
    ipcMain.on('app-mounted', () => {
      this.$window.webContents.send('window-maximize-change', this.$window.isMaximized())
    })
  }

  // 关闭窗口
  onWindowClose () {
    ipcMain.on('window-close', () => {
      this.$window.close()
    })
  }

  // 最大化窗口(取消最大化)
  onWindowMaximize () {
    ipcMain.on('window-maximize', (e, windowIsMaximize) => {
      if (windowIsMaximize) {
        this.$window.maximize()
      } else {
        this.$window.restore()
      }
    })
  }

  // 最小化窗口
  onWindowMinimize () {
    ipcMain.on('window-minimize', () => {
      this.$window.minimize()
    })
  }

  // 打开文件
  onOpenFile () {
    ipcMain.on('open-file', () => {
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
          this.$window.webContents.send('open-file', files)
        }
      )
    })
  }

  // 保存文件
  onSaveFile () {
    ipcMain.on('save-file', () => {
      dialog.showSaveDialog(
        this.$window,
        {
          filters: [
            { name: 'Markdown', extensions: ['md'] },
            { name: 'All Files', extensions: ['*'] }
          ]
        }, filename => {
          // 没有生成文件名就返回undefined
          this.$window.webContents.send('save-file', filename)
        }
      )
    })
  }

  // 创建上下文菜单
  onContextMenu () {
    if (!this.$window || !this.$window.webContents) {
      return
    }
    this.$window.webContents.on('context-menu', (e, params) => {
      e.preventDefault()
      // 生成上下文菜单
      buildContextMenu(params, this.$window)
    })
  }
}
