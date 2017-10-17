import { createActions } from 'redux-actions'

export const WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE'
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'
export const SET_VIEW_MODE = 'SET_VIEW_MODE'

export default createActions({
  [WINDOW_MAXIMIZE]: windowIsMaximize => windowIsMaximize,
  [SIDEBAR_TOGGLE]: sideBarExpanding => sideBarExpanding,
  [SET_VIEW_MODE]: viewMode => viewMode
})
