import React from 'react'
import './app-bar.styl'
import Files from '../../container/Files'

export default props => {
  return (
    <div className="app-bar">
      <div className="app-bar-files">
        <div className="app-bar-files-toggle">
          <button className="app-bar-button">
            <i className="icons-menu" />
          </button>
        </div>
        <div className="app-bar-files-panel">
          <div className="app-bar-files-panel-container">
            <Files />
          </div>
        </div>
      </div>
      <div className="app-bar-title" title={props.title}>{props.title}</div>
      <div className="app-bar-window">
        <button className="app-bar-button">
          <i className="icons-window-minimize" />
        </button>
        <button className="app-bar-button">
          <i className="icons-window-restore" />
        </button>
        <button className="app-bar-button">
          <i className="icons-window-close" />
        </button>
      </div>
    </div>
  )
}
