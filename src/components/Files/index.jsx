import React from 'react'
import classnames from 'classnames'
import './files.styl'

export default props => {
  const files = props.files.map((file, i) => {
    const fileItem = classnames(
      'files-item',
      {
        'files-item-active': file.filename === props.active.filename
      }
    )
    return (
      <li
        className={fileItem}
        key={i}
        title={file.filename}
        onClick={() => props.onSelect(file)}
      >
        <div className="files-item-filename">{file.basename}</div>
      </li>
    )
  })
  return (
    <ul className="files">
      {files}
    </ul>
  )
}
