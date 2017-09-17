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
  maximize: () => dispatch(appbar.maximize()),
  restore: () => dispatch(appbar.restore()),
  showPanel: () => dispatch(appbar.showPanel()),
  hidePanel: () => dispatch(appbar.hidePanel())
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('maximize', this.toggleMaximize)
  }

  componentWillUnmount () {
    ipcRenderer.removeListener('maximize', this.toggleMaximize)
  }

  toggleMaximize = (e, maximize) => {
    if (maximize) {
      this.props.maximize()
    } else {
      this.props.restore()
    }
  }

  onClose = () => {
    ipcRenderer.send('close')
  }

  onToggleMaximize = () => {
    if (this.props.appbar.maximize) {
      ipcRenderer.send('restore')
    } else {
      ipcRenderer.send('maximize')
    }
  }

  onMinimize = () => {
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
