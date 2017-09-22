import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from '@/reducers'

export default createStore(
  reducers,
  applyMiddleware(ReduxPromise)
)
