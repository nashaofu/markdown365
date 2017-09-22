import { handleActions } from 'redux-actions'

import { EDITOR_ON_CHANGE } from '@/actions/editor'
import { EDIT_FILE } from '@/actions/files'

// 初始值
const editor = {
  value: ''
}

export default handleActions({
  [EDITOR_ON_CHANGE]: (state, { payload }) => ({ ...state, value: payload }),
  [EDIT_FILE]: (state, { payload }) => ({ ...state, value: payload.value })
}, editor)
