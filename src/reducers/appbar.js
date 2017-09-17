import { handleActions } from 'redux-actions'
import {
  CLOSE,
  MAXIMIZE,
  RESTORE,
  MINIMIZE,
  SHOWPANEL,
  HIDEPANEL
} from '@/actions/appbar'

// 初始值
const appbar = {
  close: false,
  maximize: false,
  minimize: false,
  showPanel: false
}

export default handleActions({
  [CLOSE]: (state = {}, { payload }) => ({ ...state, close: payload }),

  [MAXIMIZE]: (state = {}, { payload }) => ({ ...state, maximize: payload }),

  [RESTORE]: (state = {}, { payload }) => ({ ...state, maximize: payload }),

  [MINIMIZE]: (state = {}, { payload }) => ({ ...state, minimize: payload }),

  [SHOWPANEL]: (state = {}, { payload }) => ({ ...state, showPanel: payload }),

  [HIDEPANEL]: (state = {}, { payload }) => ({ ...state, showPanel: payload })
}, appbar)
