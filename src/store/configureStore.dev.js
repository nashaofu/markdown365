import { createStore, compose, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from '@/reducers'
// import state from './state'

const store = createStore(
  reducers,
  // state,
  compose(
    applyMiddleware(ReduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('@/reducers', async () => {
    const nextRootReducer = await import('@/reducers')
    store.replaceReducer(nextRootReducer.default)
  })
}
export default store
