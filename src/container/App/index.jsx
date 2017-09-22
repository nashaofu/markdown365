import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import App from '@/components/App'

const mapStateToProps = state => {
  return {
    sideBarExpanding: state.ui.sideBarExpanding,
    viewerShow: state.ui.viewerShow
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
    const { sideBarExpanding, viewerShow } = this.props
    return (
      <App
        sideBarExpanding={sideBarExpanding}
        viewerShow={viewerShow}
      />
    )
  }
}
