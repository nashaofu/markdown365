import React from 'react'
import './files.styl'

export default props => {
  const files = props.files.map((file, i) => {
    return (
      <li className="files-item" key={i}>asdas</li>
    )
  })
  return (
    <ul className="files">
      {files}
    </ul>
  )
}
