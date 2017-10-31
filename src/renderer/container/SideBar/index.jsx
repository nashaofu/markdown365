import path from 'path'
import fs from 'fs'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import {
  ui,
  files
} from '@/actions'
import SideBar from '@/components/SideBar'

const mapStateToProps = state => {
  return {
    sideBarExpanding: state.ui.sideBarExpanding
  }
}

const mapDispatchToProps = dispatch => ({
  sidebarToggle: sideBarExpanding => dispatch(ui.sidebarToggle(sideBarExpanding)),
  openFile: file => dispatch(files.openFile(file)),
  editFile: file => dispatch(files.editFile(file))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('open-file', this.openFile)
    ipcRenderer.addListener('save-file', this.saveFile)
  }

  componentWillUnmount () {
    ipcRenderer.removeListener('open-file', this.openFile)
  }

  onSidebarToggle = () => {
    this.props.sidebarToggle(!this.props.sideBarExpanding)
  }

  onOpenFile = () => {
    ipcRenderer.send('open-file')
  }

  onNewFile = () => {
    ipcRenderer.send('save-file')
  }

  openFile = (e, files) => {
    if (files) {
      files = files.map(file => ({
        filename: file,
        basename: path.basename(file)
      }))
      this.props.openFile(files)
      const file = files[files.length - 1]
      if (file) {
        this.props.editFile(file)
      }
    }
  }

  saveFile = (e, file) => {
    if (file) {
      fs.access(file, fs.constants.R_OK | fs.constants.W_OK, error => {
        if (!error || error.code === 'ENOENT') {
          fs.writeFile(file, '', err => {
            if (!err) {
              file = {
                filename: file,
                basename: path.basename(file)
              }
              this.props.openFile([file])
              this.props.editFile(file)
            }
          })
        }
      })
    }
  }

  render () {
    const { sideBarExpanding } = this.props
    return (
      <SideBar
        sideBarExpanding={sideBarExpanding}
        onSidebarToggle={this.onSidebarToggle}
        onOpenFile={this.onOpenFile}
        onNewFile={this.onNewFile}
      />
    )
  }
}
