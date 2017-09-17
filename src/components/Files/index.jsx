import React from 'react'
import './files.styl'

export default props => {
  const files = props.files.map((file, i) => {
    return (
      <li className="files-item" key={i} title={file.filename}>
        <div className="files-item-basename">{file.basename}</div>
        <div className="files-item-filename">{file.filename}</div>
      </li>
    )
  })
  return (
    <ul className="files">
      {files}
    </ul>
  )
}
