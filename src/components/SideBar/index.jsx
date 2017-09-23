import React from 'react'
import classnames from 'classnames'
import Files from '@/container/Files'
import { lang } from '@/js/lang'

import './side-bar.styl'

export default props => {
  const appBarFilesPanel = classnames(
    'side-bar-panel',
    {
      'side-bar-panel-expanding': props.sideBarExpanding
    }
  )

  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div className="side-bar-container-toggle">
          <button
            className="side-bar-button"
            onClick={props.onSidebarToggle}
            title={lang.sidebarToggle}
          >
            <i className="icons-menu" />
          </button>
        </div>
        <div className="side-bar-container-open-file">
          <button
            className="side-bar-button"
            onClick={props.onOpenFile}
            title={lang.openFile}
          >
            <i className="icons-open-file" />
          </button>
        </div>
        <div className="side-bar-container-settings">
          <button
            className="side-bar-button"
            title={lang.settings}
          >
            <i className="icons-settings" />
          </button>
        </div>
      </div>
      <div className={appBarFilesPanel}>
        <Files />
      </div>
    </div>
  )
}
