import { createActions } from 'redux-actions'
import path from 'path'
import fs from 'fs'
export const OPEN_FILE = 'OPEN_FILE'
export const REMOVE_FILE = 'REMOVE_FILE'
export const EDIT_FILE = 'EDIT_FILE'

export default createActions({
  [OPEN_FILE]: file => file,
  [REMOVE_FILE]: file => file,
  [EDIT_FILE]: async file => {
    const filename = path.normalize(file.filename)
    return await new Promise((resolve, reject) => {
      fs.stat(filename, (error, stat) => {
        if (error) {
          return reject(error)
        }
        fs.readFile(filename, (err, buffer) => {
          if (err) {
            return reject(err)
          }
          resolve({
            file,
            value: buffer.toString()
          })
        })
      })
    })
  }
})
