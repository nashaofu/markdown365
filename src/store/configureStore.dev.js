import { createStore, compose } from 'redux'

import reducers from '../reducers'

const store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', async () => {
    const nextRootReducer = await import('../reducers')
    store.replaceReducer(nextRootReducer.default)
  })
}
export default store
