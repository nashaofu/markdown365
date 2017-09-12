import React from 'react'
import './files.styl'

export default props => {
  const files = props.files.map((file, i) => {
    return (
      <li className="files-item" key={i}>{file}</li>
    )
  })
  return (
    <ul className="files">
      {files}
      <li className="files-item" onClick={props.onClick}>添加文件</li>
    </ul>
  )
}
