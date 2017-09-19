import { handleActions } from 'redux-actions'
import findIndex from 'lodash/findIndex'

import { ADD, REMOVE, EDIT } from '@/actions/files'

const files = {
  files: [],
  active: {}
}
export default handleActions({
  [ADD]: (state, { payload }) => {
    let files = []
    let active = {}
    payload.forEach(file => {
      const index = findIndex(state.files, { filename: file.filename })
      active = file
      if (index === -1) {
        files.push(file)
      }
    })
    return {
      ...state,
      files: [...state.files, ...files],
      active
    }
  },

  [REMOVE]: (state, { payload }) => {
    const index = findIndex(state.files, { filename: payload.filename })
    if (index !== -1) {
      state.files.splice(index, 1)
    }
    return state
  },

  [EDIT]: (state, { payload }) => ({
    ...state,
    active: payload
  })
}, files)
