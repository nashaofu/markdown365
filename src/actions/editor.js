import { createActions } from 'redux-actions'

export const EDITOR_ON_CHANGE = 'EDITOR_ON_CHANGE'

export default createActions({
  [EDITOR_ON_CHANGE]: value => value
})
