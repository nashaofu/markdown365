import React, { Component } from 'react'
import classnames from 'classnames'
import './files.styl'

export default class Files extends Component {
  state = {
    contextMenuFile: null,
    contextMenuX: 0,
    contextMenuY: 0
  }

  componentDidMount () {
    window.addEventListener('click', this.onClickOut)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onClickOut)
  }

  onOpenFile = () => {
    this.props.onOpenFile()
  }

  onSelect = file => {
    if (file.filename !== this.props.active.filename) {
      this.props.onSelect(file)
    }
  }

  onContextMenu = (event, file) => {
    const { top, left, right } = this.refs.el.getBoundingClientRect()
    console.log(this.refs.el.getBoundingClientRect())
    let x = event.clientX - left
    let y = event.clientY - top
    this.setState({
      contextMenuFile: file,
      contextMenuX: x,
      contextMenuY: y
    }, () => {
      const contextMenu = this.refs.contextMenu.getBoundingClientRect()
      if (contextMenu.right > right) {
        x -= contextMenu.width
      }
      const { bottom } = this.refs.el.parentElement.getBoundingClientRect()
      if (contextMenu.bottom > bottom) {
        y -= contextMenu.height
      }
      this.setState({
        contextMenuX: x,
        contextMenuY: y
      })
    })
  }

  onOpenContextMenuFile = () => {
    const { contextMenuFile } = this.state
    if (contextMenuFile) {
      this.onSelect(contextMenuFile)
    }
    this.setState({
      contextMenuFile: null,
      contextMenuX: 0,
      contextMenuY: 0
    })
  }

  onRemoveContextMenuFile = () => {
    const { contextMenuFile } = this.state
    if (contextMenuFile) {
      this.props.onRemove(contextMenuFile)
    }
    this.setState({
      contextMenuFile: null,
      contextMenuX: 0,
      contextMenuY: 0
    })
  }

  onClickOut = event => {
    if (this.refs.contextMenu && !this.refs.contextMenu.contains(event.target)) {
      this.setState({
        contextMenuFile: null,
        contextMenuX: 0,
        contextMenuY: 0
      })
    }
  }

  render () {
    const { contextMenuFile, contextMenuX, contextMenuY } = this.state
    const { files, active } = this.props
    const NoFileComponent = (
      <div className="files-open-file">
        <div className="files-open-file-title">没有打开的文件</div>
        <button className="files-open-file-button" onClick={this.onOpenFile}>打开文件</button>
      </div>
    )

    const FilesComponent = files.map((file, i) => {
      const fileItem = classnames(
        'files-list-item',
        {
          'files-list-item-active': file.filename === active.filename
        }
      )
      return (
        <li
          className={fileItem}
          key={i}
          title={file.filename}
          onClick={() => this.onSelect(file)}
          onContextMenu={event => this.onContextMenu(event, file)}
        >
          <div className="files-list-item-filename">{file.basename}</div>
        </li>
      )
    })

    const ContextMenuComponent = (
      <ul
        ref="contextMenu"
        className="files-context-menu"
        style={{
          top: contextMenuY,
          left: contextMenuX
        }}
      >
        <li onClick={this.onOpenContextMenuFile}>打开</li>
        <li onClick={this.onRemoveContextMenuFile}>移除</li>
      </ul>
    )

    return (
      <div ref="el" className="files">
        {!files.length && NoFileComponent}
        <ul className="files-list">
          {FilesComponent}
        </ul>
        {contextMenuFile && ContextMenuComponent}
      </div>
    )
  }
}
