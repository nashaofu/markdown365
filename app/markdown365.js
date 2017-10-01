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

    this.onAppMounted()

    this.onWindowClose()
    this.onWindowMaximize()
    this.onWindowMinimize()

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
      icon: path.join(__dirname, '../icons/markdown365.png'),
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
      require('./devtools')
      this.$window.webContents.openDevTools()
      this.$window.loadURL('http:127.0.0.1:8080')
    } else {
      this.$window.loadURL(path.join(__dirname, '../views/index.html'))
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
      this.buildContextMenu(params, this.$window)
    })
  }

  // 生成上下文菜单
  buildContextMenu (params, $win) {
    // 菜单执行命令
    const menuCmd = {
      copy: {
        id: 1,
        label: '复制'
      },
      cut: {
        id: 2,
        label: '剪切'
      },
      paste: {
        id: 3,
        label: '粘贴'
      },
      selectall: {
        id: 4,
        label: '全选'
      }
    }

    const { selectionText, isEditable, editFlags } = params

    // 生成菜单模板
    const template = Object.keys(menuCmd)
      .map(cmd => {
        const { id, label } = menuCmd[cmd]
        let enabled = false
        let visible = false
        const { canCopy, canCut, canPaste, canSelectAll } = editFlags
        switch (cmd) {
          case 'copy':
            // 有文字选中就显示
            visible = !!selectionText
            enabled = canCopy
            break
          case 'cut':
            // 可以编辑就显示项目
            visible = !!isEditable
            // 有文字选中才可用
            enabled = visible && !!selectionText && canCut
            break
          case 'paste':
            // 可以编辑就显示项目
            visible = !!isEditable
            enabled = visible && canPaste
            break
          case 'selectall':
            // 可以编辑就显示项目
            visible = !!isEditable
            enabled = visible && canSelectAll
            break
          default:
            break
        }
        return {
          id,
          label,
          role: cmd,
          enabled,
          visible
        }
      })
      .filter(item => item.visible)
      .sort((a, b) => a.id > b.id)

    // 用模板生成菜单
    if (template.length) {
      const menu = Menu.buildFromTemplate(template)
      menu.popup($win)
    }
  }
}
