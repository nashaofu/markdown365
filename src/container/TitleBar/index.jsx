import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import { ui } from '@/actions'
import TitleBar from '@/components/TitleBar'

const mapStateToProps = state => {
  return {
    windowIsMaximize: state.ui.windowIsMaximize,
    active: state.files.active
  }
}

const mapDispatchToProps = dispatch => ({
  windowMaximize: windowIsMaximize => dispatch(ui.windowMaximize(windowIsMaximize))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class AppBarContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('window-maximize-change', this.toggleMaximize)
  }

  componentWillUnmount () {
    ipcRenderer.removeListener('window-maximize-change', this.toggleMaximize)
  }

  toggleMaximize = (e, windowIsMaximize) => {
    this.props.windowMaximize(windowIsMaximize)
  }

  onWindowClose = () => {
    ipcRenderer.send('window-close')
  }

  onWindowMaximizeToggle = () => {
    ipcRenderer.send('window-maximize', !this.props.windowIsMaximize)
  }

  onWindowMinimize = () => {
    ipcRenderer.send('window-minimize')
  }

  render () {
    const { active, windowIsMaximize } = this.props
    const title = active.basename || 'Markdown365'
    return (
      <TitleBar
        title={title}
        windowIsMaximize={windowIsMaximize}
        onWindowClose={this.onWindowClose}
        onWindowMaximizeToggle={this.onWindowMaximizeToggle}
        onWindowMinimize={this.onWindowMinimize}
      />
    )
  }
}
