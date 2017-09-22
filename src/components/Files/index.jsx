import React from 'react'
import classnames from 'classnames'
import './files.styl'

export default props => {
  let files = (
    <li className="files-open-file">
      <div className="files-open-file-title">没有打开的文件</div>
      <button className="files-open-file-button" onClick={props.onOpenFile}>打开文件</button>
    </li>
  )
  if (props.files.length) {
    files = props.files.map((file, i) => {
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
  }
  return (
    <ul className="files">
      {files}
    </ul>
  )
}
