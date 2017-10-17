import { combineReducers } from 'redux'
import ui from './ui'
import files from './files'
import editor from './editor'

export default combineReducers({
  ui,
  files,
  editor
})
