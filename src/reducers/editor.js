import { handleActions } from 'redux-actions'

import {
  EDITOR_ON_CHANGE,
  EDITOR_ON_SAVE
} from '@/actions/editor'
import { EDIT_FILE } from '@/actions/files'

// 初始值
const editor = {
  value: '',
  saved: false
}

export default handleActions({
  [EDITOR_ON_CHANGE]: (state, { payload }) => ({ ...state, value: payload }),
  [EDITOR_ON_SAVE]: (state, { payload }) => ({ ...state, saved: payload }),
  [EDIT_FILE]: (state, { payload }) => ({ ...state, value: payload.value })
}, editor)
