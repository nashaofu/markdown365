import { createActions } from 'redux-actions'

export const CLOSE = 'CLOSE'
export const MAXIMIZE = 'MAXIMIZE'
export const RESTORE = 'RESTORE'
export const MINIMIZE = 'MINIMIZE'
export const SHOWPANEL = 'SHOW-PANEL'
export const HIDEPANEL = 'HIDE-PANEL'

export default createActions({
  [CLOSE]: () => true,
  [MAXIMIZE]: () => true,
  [RESTORE]: () => false,
  [MINIMIZE]: () => true,
  [SHOWPANEL]: () => true,
  [HIDEPANEL]: () => false
})
