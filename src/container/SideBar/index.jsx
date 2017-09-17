import path from 'path'
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
  addFiles: file => dispatch(files.add(file))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('open-file', this.addFiles)
  }

  componentWillUnmount () {
    ipcRenderer.removeListener('open-file', this.addFiles)
  }

  onSidebarToggle = () => {
    this.props.sidebarToggle(!this.props.sideBarExpanding)
  }

  onAddFile = () => {
    ipcRenderer.send('open-file')
  }

  addFiles = (e, files) => {
    if (files) {
      files = files.map(file => ({
        filename: file,
        basename: path.basename(file)
      }))
      this.props.addFiles(files)
    }
  }

  render () {
    const { sideBarExpanding } = this.props
    return (
      <SideBar
        sideBarExpanding={sideBarExpanding}
        onSidebarToggle={this.onSidebarToggle}
        onAddFile={this.onAddFile}
      />
    )
  }
}
