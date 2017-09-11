import { createActions } from 'redux-actions'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const EDIT = 'EDIT'

export default createActions({
  [ADD]: file => file,
  [REMOVE]: file => file,
  [EDIT]: file => file
})
