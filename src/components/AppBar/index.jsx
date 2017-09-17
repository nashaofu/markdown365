import React from 'react'
import classnames from 'classnames'
import './app-bar.styl'

export default props => {
  const windowMaximizeToggleIcon = classnames({
    'icons-window-restore': props.windowIsMaximize,
    'icons-window-maximize': !props.windowIsMaximize
  })

  return (
    <div className="app-bar">
      <div className="app-bar-title" title={props.title}>{props.title}</div>
      <div className="app-bar-window">
        <button className="app-bar-button" onClick={props.onWindowMinimize}>
          <i className="icons-window-minimize" />
        </button>
        <button className="app-bar-button" onClick={props.onWindowMaximizeToggle}>
          <i className={windowMaximizeToggleIcon} />
        </button>
        <button className="app-bar-button" onClick={props.onWindowClose}>
          <i className="icons-window-close" />
        </button>
      </div>
    </div>
  )
}
