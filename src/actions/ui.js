import { createActions } from 'redux-actions'

export const WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE'
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

export default createActions({
  [WINDOW_MAXIMIZE]: windowIsMaximize => windowIsMaximize,
  [SIDEBAR_TOGGLE]: sideBarExpanding => sideBarExpanding
})
