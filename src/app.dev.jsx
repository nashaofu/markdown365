import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './container/App'

const render = App => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./container/App', async () => {
    const nextApp = await import('./container/App')
    render(nextApp.default)
  })
}
