import React, { Component } from 'react'
import { lang } from '@/js/lang'

import './status-bar.styl'

export default class StatusBar extends Component {
  state = {
    viewModesPanelStatus: false
  }

  viewModes = [
    'writeMode', // 写作模式
    'readMode', // 阅读模式
    'previewMode' // 预览模式
  ]

  componentDidMount () {
    window.addEventListener('click', this.onClickOut)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onClickOut)
  }

  onToggleViewModesPanel = () => {
    this.setState({
      viewModesPanelStatus: !this.state.viewModesPanelStatus
    })
  }

  onSelectViewMode = viewMode => {
    if (viewMode !== this.props.viewMode) {
      this.props.onSelectViewMode(viewMode)
    }
    this.setState({
      viewModesPanelStatus: false
    })
  }

  onClickOut = event => {
    if (!this.refs.view.contains(event.target)) {
      this.setState({
        viewModesPanelStatus: false
      })
    }
  }

  render () {
    const { viewModesPanelStatus } = this.state
    const { viewMode } = this.props
    const Modes = this.viewModes.map(item => {
      const check = item === viewMode && <i className="icons-check" />
      return (
        <li key={item} onClick={() => this.onSelectViewMode(item)}>
          {check}
          <span>{lang[item]}</span>
        </li>
      )
    })
    const ModesPanel = <ul className="status-bar-view-modes-panel">{Modes}</ul>
    return (
      <div className="status-bar">
        <div ref="view" className="status-bar-view">
          <button
            className="status-bar-button"
            onClick={this.onToggleViewModesPanel}
            title={lang.viewMode}
          >
            <i className="icons-visibility" />
          </button>
          {viewModesPanelStatus && ModesPanel}
        </div>
      </div>
    )
  }
}
