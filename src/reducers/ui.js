import { handleActions } from 'redux-actions'
import {
  WINDOW_MAXIMIZE
} from '@/actions/ui'

// 初始值
const ui = {
  windowIsMaximize: false
}

export default handleActions({
  [WINDOW_MAXIMIZE]: (state = {}, { payload }) => ({ ...state, windowIsMaximize: payload })
}, ui)
