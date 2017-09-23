import React, { Component } from 'react'
import classnames from 'classnames'
import Markdown365Parser from 'markdown365-parser'
import { shell } from 'electron'
import './viewer.styl'

export default class Viewer extends Component {
  viewer = null
  value = ''
  componentDidMount () {
    const { value } = this.props
    this.viewer = new Markdown365Parser({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      sanitizer: null,
      mangle: true,
      smartLists: false,
      silent: false,
      highlight: null,
      langPrefix: 'lang-',
      smartypants: false,
      headerPrefix: '',
      renderer: null,
      xhtml: false,
      $el: this.refs.viewer
    })
    this.value = value
    this.viewer.parse(value)
  }

  componentDidUpdate () {
    const { value } = this.props
    if (this.value !== value) {
      this.value = value
      this.viewer.parse(value)
    }
  }

  onClick = event => {
    let target = event.target
    // 在浏览器中打开链接
    while (target && this.refs.viewer.contains(target)) {
      if (target.tagName.toUpperCase() === 'A' && target.href) {
        event.preventDefault()
        shell.openExternal(target.href)
        break
      }
      target = target.parentElement
    }
  }

  render () {
    const { viewMode } = this.props
    const viewer = classnames(
      'viewer',
      {
        'viewer-mode-read': viewMode === 'readMode'
      }
    )
    return (
      <div className={viewer} onClick={this.onClick}>
        <div ref="viewer"></div>
      </div>
    )
  }
}
