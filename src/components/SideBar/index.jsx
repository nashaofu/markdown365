import React from 'react'
import classnames from 'classnames'
import Files from '@/container/Files'

import './side-bar.styl'

export default props => {
  const appBarFilesPanel = classnames(
    'side-bar-panel',
    {
      'side-bar-panel-active': props.active
    }
  )
  return (
    <div className="side-bar">
      <div className="side-bar-bar">
        <div className="side-bar-toggle">
          <button className="side-bar-button" onClick={props.onTogglePanel}>
            <i className="icons-menu" />
          </button>
          <button className="side-bar-button" onClick={props.onTogglePanel}>
            <i className="icons-menu" />
          </button>
        </div>
      </div>
      <div className={appBarFilesPanel}>
        <Files />
      </div>
    </div>
  )
}
