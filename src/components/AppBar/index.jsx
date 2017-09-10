import React from 'react'
import './app-bar.styl'

export default (props) => {
  return (
    <div className="app-bar">
      <div className="app-bar-files">
        <div className="app-bar-files-toggle">
          <button className="app-bar-button">
            <i className="icons-menu" />
          </button>
        </div>
        <div className="app-bar-files-panel">

        </div>
      </div>
      <div className="app-bar-title" title={props.title}>{props.title}</div>
      <div className="app-bar-window">
        <button className="app-bar-button">
          <i className="icons-menu" />
        </button>
        <button className="app-bar-button">
          <i className="icons-menu" />
        </button>
        <button className="app-bar-button">
          <i className="icons-menu" />
        </button>
      </div>
    </div>
  )
}
