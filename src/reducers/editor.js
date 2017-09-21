import { handleActions } from 'redux-actions'

import { ON_CHANGE } from '@/actions/editor'
import { EDIT } from '@/actions/files'

// 初始值
const editor = {
  value: ''
}

export default handleActions({
  [ON_CHANGE]: (state, { payload }) => ({ ...state, value: payload }),
  [EDIT]: (state, { payload }) => ({ ...state, value: payload.value })
}, editor)
