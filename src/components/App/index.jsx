import React from 'react'
import classnames from 'classnames'
import AppBar from '@/container/AppBar'
import SideBar from '@/container/SideBar'
import Editor from '@/container/Editor'
import Viewer from '@/container/Viewer'

import './app.styl'

export default props => {
  const appContainerView = classnames(
    'app-container-view',
    {
      'app-container-view-side-bar-expanding': props.sideBarExpanding
    }
  )
  const ViewerComponent = props.viewerShow && <Viewer />
  return (
    <div>
      <AppBar />
      <div className="app-container">
        <SideBar />
        <div className={appContainerView}>
          <Editor />
          {ViewerComponent}
        </div>
      </div>
    </div>
  )
}
