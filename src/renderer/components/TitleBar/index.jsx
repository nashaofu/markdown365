import React from 'react'
import classnames from 'classnames'
import { lang } from '@/js/lang'
import './title-bar.styl'

export default props => {
  const windowMaximizeToggleIcon = classnames({
    'icons-window-restore': props.windowIsMaximize,
    'icons-window-maximize': !props.windowIsMaximize
  })

  return (
    <div className="title-bar">
      <div className="title-bar-title" title={props.title}>{props.title}</div>
      <div className="title-bar-window">
        <button
          className="title-bar-button"
          onClick={props.onWindowMinimize}
          title={lang.windowMinimize}
        >
          <i className="icons-window-minimize" />
        </button>
        <button
          className="title-bar-button"
          onClick={props.onWindowMaximizeToggle}
          title={lang.windowMaximizeToggle}
        >
          <i className={windowMaximizeToggleIcon} />
        </button>
        <button
          className="title-bar-button"
          onClick={props.onWindowClose}
          title={lang.windowClose}
        >
          <i className="icons-window-close" />
        </button>
      </div>
    </div>
  )
}
