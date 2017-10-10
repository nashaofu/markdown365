import { createActions } from 'redux-actions'

export const EDITOR_ON_CHANGE = 'EDITOR_ON_CHANGE'
export const EDITOR_ON_SAVE = 'EDITOR_ON_SAVE'

export default createActions({
  [EDITOR_ON_CHANGE]: value => value,
  [EDITOR_ON_SAVE]: value => value
})
