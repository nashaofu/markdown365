import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import App from '@/components/App'

const mapStateToProps = state => {
  return {
    sideBarExpanding: state.ui.sideBarExpanding,
    viewMode: state.ui.viewMode
  }
}

@connect(mapStateToProps)
export default class AppContainer extends Component {
  componentDidMount () {
    // 告诉主进程
    // 应用初始化完毕
    ipcRenderer.send('app-mounted')
  }
  render () {
    const { sideBarExpanding, viewMode } = this.props
    return (
      <App
        sideBarExpanding={sideBarExpanding}
        viewMode={viewMode}
      />
    )
  }
}
