import { handleActions } from 'redux-actions'
import {
  WINDOW_MAXIMIZE,
  SIDEBAR_TOGGLE
} from '@/actions/ui'

// 初始值
const ui = {
  windowIsMaximize: false,
  sideBarExpanding: false
}

export default handleActions({
  [WINDOW_MAXIMIZE]: (state, { payload }) => ({ ...state, windowIsMaximize: payload }),
  [SIDEBAR_TOGGLE]: (state, { payload }) => ({ ...state, sideBarExpanding: payload })
}, ui)
