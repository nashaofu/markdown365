import React from 'react'
import AppBar from '@/container/AppBar'
import SideBar from '@/container/SideBar'
import Editor from '../Editor'
import Viewer from '../Viewer'

import './app.styl'

export default props => {
  return (
    <div>
      <AppBar />
      <div className="app-container">
        <SideBar />
        <Editor />
        <Viewer />
      </div>
    </div>
  )
}
