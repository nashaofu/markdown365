import React from 'react'
import AppBar from '@/container/AppBar'
import Editor from '../Editor'
import Viewer from '../Viewer'

export default props => {
  return (
    <div>
      <AppBar />
      <Editor />
      <Viewer />
    </div>
  )
}
