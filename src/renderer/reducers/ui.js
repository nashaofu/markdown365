import { handleActions } from 'redux-actions'
import {
  WINDOW_MAXIMIZE,
  SIDEBAR_TOGGLE,
  SET_VIEW_MODE
} from '@/actions/ui'

// 初始值
const ui = {
  windowIsMaximize: false,
  sideBarExpanding: false,
  viewMode: 'previewMode'
}

export default handleActions({
  [WINDOW_MAXIMIZE]: (state, { payload }) => ({ ...state, windowIsMaximize: payload }),
  [SIDEBAR_TOGGLE]: (state, { payload }) => ({ ...state, sideBarExpanding: payload }),
  [SET_VIEW_MODE]: (state, { payload }) => ({ ...state, viewMode: payload })
}, ui)
