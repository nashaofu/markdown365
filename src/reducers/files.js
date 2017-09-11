import { handleActions } from 'redux-actions'
import { ADD, REMOVE } from '../actions/files'

export default handleActions({
  [ADD]: (state = [], action) => ({
    filse: [...state, ...action.payload]
  }),

  [REMOVE]: (state, action) => ({
    filse: [...state, ...action.payload]
  })
}, [])
