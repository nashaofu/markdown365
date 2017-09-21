import { createActions } from 'redux-actions'
import path from 'path'
import fs from 'fs'
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const EDIT = 'EDIT'

export default {
  ...createActions({
    [ADD]: file => file,
    [REMOVE]: file => file
  }),
  edit: file => async dispatch => {
    const filename = path.normalize(file.filename)
    fs.stat(filename, (error, stat) => {
      if (!error) {
        fs.readFile(filename, (err, buffer) => {
          if (!err) {
            dispatch({
              type: EDIT,
              payload: {
                file,
                value: buffer.toString()
              }
            })
          }
        })
      }
    })
  }
}
