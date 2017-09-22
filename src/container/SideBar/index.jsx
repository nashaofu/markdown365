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
    sideBarExpanding: state.ui.sideBarExpanding,
    viewerShow: state.ui.viewerShow
  }
}

const mapDispatchToProps = dispatch => ({
  sidebarToggle: sideBarExpanding => dispatch(ui.sidebarToggle(sideBarExpanding)),
  viewerToggle: viewerShow => dispatch(ui.viewerToggle(viewerShow)),
  openFile: file => dispatch(files.openFile(file)),
  editFile: file => dispatch(files.editFile(file))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('open-file', this.openFile)
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

  onViewerToggle = () => {
    this.props.viewerToggle(!this.props.viewerShow)
  }

  render () {
    const { sideBarExpanding, viewerShow } = this.props
    return (
      <SideBar
        sideBarExpanding={sideBarExpanding}
        viewerShow={viewerShow}
        onSidebarToggle={this.onSidebarToggle}
        onOpenFile={this.onOpenFile}
        onViewerToggle={this.onViewerToggle}
      />
    )
  }
}
