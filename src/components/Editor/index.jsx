import React, { Component } from 'react'
import codemirror from 'codemirror'
import classnames from 'classnames'

import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/display/placeholder'
import 'codemirror/keymap/sublime'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/addon/scroll/simplescrollbars.css'

import './editor.styl'

export default class Editor extends Component {
  editor = null
  componentDidMount () {
    const { value } = this.props
    this.editor = codemirror(this.refs.editor, {
      value,
      mode: 'text/x-markdown',
      theme: 'xq-light',
      indentUnit: 2,
      smartIndent: true,
      tabSize: 4,
      indentWithTabs: true,
      keyMap: 'sublime',
      lineWrapping: true,
      scrollbarStyle: 'overlay',
      inputStyle: 'contenteditable',
      showCursorWhenSelecting: true,
      placeholder: '输入markdown',
      lineWiseCopyCut: true,
      autofocus: true,
      resetSelectionOnContextMenu: true
    })
    this.editor.on('change', () => {
      this.props.onChange(this.editor.getValue())
    })
  }

  componentDidUpdate () {
    const { value } = this.props
    if (this.editor.getValue() !== value) {
      this.editor.setValue(value)
    }
  }

  render () {
    const { viewerShow } = this.props
    const editor = classnames(
      'editor',
      {
        'editor-viewer-hide': !viewerShow
      }
    )
    return (
      <div className={editor}>
        <div ref="editor" className="editor-container"></div>
      </div>
    )
  }
}
