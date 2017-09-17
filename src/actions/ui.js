import { createActions } from 'redux-actions'

export const WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE'

export default createActions({
  [WINDOW_MAXIMIZE]: windowIsMaximize => windowIsMaximize
})
