import React from 'react'
import classnames from 'classnames'
import './app-bar.styl'
import Files from '@/container/Files'

export default props => {
  const appBarFilesPanel = classnames(
    'app-bar-files-panel',
    {
      'app-bar-files-panel-show': props.showPanel
    }
  )

  const iconsWindowToggleMaximize = classnames({
    'icons-window-restore': props.maximize,
    'icons-window-maximize': !props.maximize
  })

  return (
    <div className="app-bar">
      <div className="app-bar-files">
        <div className="app-bar-files-toggle">
          <button className="app-bar-button" onClick={props.onTogglePanel}>
            <i className="icons-menu" />
          </button>
        </div>
        <div className={appBarFilesPanel}>
          <div className="app-bar-files-panel-container">
            <Files />
          </div>
        </div>
      </div>
      <div className="app-bar-title" title={props.title}>{props.title}</div>
      <div className="app-bar-window">
        <button className="app-bar-button" onClick={props.onMinimize}>
          <i className="icons-window-minimize" />
        </button>
        <button className="app-bar-button" onClick={props.onToggleMaximize}>
          <i className={iconsWindowToggleMaximize} />
        </button>
        <button className="app-bar-button" onClick={props.onClose}>
          <i className="icons-window-close" />
        </button>
      </div>
    </div>
  )
}
