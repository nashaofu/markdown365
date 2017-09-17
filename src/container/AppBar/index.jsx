import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import { appbar } from '@/actions'
import AppBar from '@/components/AppBar'

const mapStateToProps = state => {
  return {
    appbar: state.appbar
  }
}

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(appbar.close()),
  maximize: () => dispatch(appbar.maximize()),
  restore: () => dispatch(appbar.restore()),
  minimize: () => dispatch(appbar.minimize()),
  showPanel: () => dispatch(appbar.showPanel()),
  hidePanel: () => dispatch(appbar.hidePanel())
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  // componentWillMount () {
  //   ipcRenderer.on('window-status', this.addFiles)
  // }
  // componentWillUnmount () {

  // }

  onClose = () => {
    this.props.close()
    ipcRenderer.send('close')
  }

  onToggleMaximize = () => {
    if (this.props.appbar.maximize) {
      this.props.restore()
      ipcRenderer.send('restore')
    } else {
      this.props.maximize()
      ipcRenderer.send('maximize')
    }
  }

  onMinimize = () => {
    this.props.minimize()
    ipcRenderer.send('minimize')
  }

  onTogglePanel = () => {
    if (this.props.appbar.showPanel) {
      this.props.hidePanel()
    } else {
      this.props.showPanel()
    }
  }

  render () {
    const { maximize, showPanel } = this.props.appbar
    return (
      <AppBar
        maximize={maximize}
        showPanel={showPanel}
        title="Markdown365"
        onClose={this.onClose}
        onToggleMaximize={this.onToggleMaximize}
        onMinimize={this.onMinimize}
        onTogglePanel={this.onTogglePanel}
      />
    )
  }
}
