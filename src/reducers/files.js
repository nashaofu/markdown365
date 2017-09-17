import { handleActions } from 'redux-actions'
import { ADD, REMOVE } from '@/actions/files'

export default handleActions({
  [ADD]: (state = [], { payload }) => [...state, ...payload],

  [REMOVE]: (state = [], { payload }) => [...state, ...payload]
}, [])
