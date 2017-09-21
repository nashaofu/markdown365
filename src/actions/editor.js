import { createActions } from 'redux-actions'

export const ON_CHANGE = 'ON_CHANGE'

export default createActions({
  [ON_CHANGE]: value => value
})
