import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppBar from './components/AppBar'
import Editor from './components/Editor'
import Viewer from './components/Viewer'

const App = () => {
  return (
    <Provider>
      <AppBar title="你好世界！.md" />
      <Editor />
      <Viewer />
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
