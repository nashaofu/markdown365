import { applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// let enhancer = applyMiddleware(thunk)
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    // applyMiddleware(
    //   thunk
    // ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default enhancer
