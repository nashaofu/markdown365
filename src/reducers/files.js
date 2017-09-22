import { handleActions } from 'redux-actions'
import findIndex from 'lodash/findIndex'

import { OPEN_FILE, REMOVE_FILE, EDIT_FILE } from '@/actions/files'

const files = {
  files: [],
  active: {}
}
export default handleActions({
  [OPEN_FILE]: (state, { payload }) => {
    let files = []
    payload.forEach(file => {
      const index = findIndex(state.files, { filename: file.filename })
      if (index === -1) {
        files.push(file)
      }
    })
    return {
      ...state,
      files: [...state.files, ...files]
    }
  },

  [REMOVE_FILE]: (state, { payload }) => {
    const index = findIndex(state.files, { filename: payload.filename })
    if (index !== -1) {
      state.files.splice(index, 1)
    }
    return state
  },

  [EDIT_FILE]: (state, { payload }) => ({
    ...state,
    active: payload.file
  })
}, files)
