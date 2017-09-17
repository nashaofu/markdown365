import { combineReducers } from 'redux'
import ui from './ui'
import files from './files'

export default combineReducers({
  ui,
  files
})
