import React from 'react'
import classnames from 'classnames'
import TitleBar from '@/container/TitleBar'
import SideBar from '@/container/SideBar'
import Editor from '@/container/Editor'
import Viewer from '@/container/Viewer'
import StatusBar from '@/container/StatusBar'

import './app.styl'

export default props => {
  const EditorComponent = props.viewMode !== 'readMode' && <Editor />
  const ViewerComponent = props.viewMode !== 'writeMode' && <Viewer />
  const sideBarExpanding = classnames(
    'app-container-viewer',
    {
      'app-container-viewer-side-bar-expanding': props.sideBarExpanding
    }
  )
  return (
    <div>
      <TitleBar />
      <div className="app-container">
        <SideBar />
        <div className={sideBarExpanding}>
          {EditorComponent}
          {ViewerComponent}
        </div>
      </div>
      <StatusBar />
    </div>
  )
}
