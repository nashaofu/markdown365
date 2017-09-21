import React, { Component } from 'react'
import Markdown365Parser from 'markdown365-parser'
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

  render () {
    return (
      <div className="viewer">
        <div ref="viewer"></div>
      </div>
    )
  }
}
