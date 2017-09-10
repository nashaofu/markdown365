import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
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
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
