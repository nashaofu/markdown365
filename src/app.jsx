import React from 'react'
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar'
import Editor from './components/Editor'
import Viewer from './components/Viewer'

const App = () => {
  return (
    <div>
      <AppBar title="你好世界！.md" />
      <Editor />
      <Viewer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
