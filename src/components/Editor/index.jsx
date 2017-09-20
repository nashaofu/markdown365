import React, { Component } from 'react'
import codemirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/display/placeholder'
import 'codemirror/keymap/sublime'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/addon/scroll/simplescrollbars.css'
import './editor.styl'
import Markdown365Parser from 'markdown365-parser'

export default class Editor extends Component {
  editor = null
  componentDidMount () {
    this.editor = codemirror(this.refs.editor, {
      value: '',
      mode: 'text/x-markdown',
      theme: 'xq-light',
      indentUnit: 2,
      smartIndent: true,
      tabSize: true,
      keyMap: 'sublime',
      lineWrapping: false,
      scrollbarStyle: 'overlay',
      inputStyle: 'contenteditable',
      showCursorWhenSelecting: true,
      placeholder: '输入markdown',
      lineWiseCopyCut: true,
      autofocus: true,
      resetSelectionOnContextMenu: true
    })
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
      $el: document.querySelector('#viewer')
    })
    this.editor.on('changes', () => {
      this.viewer.parse(this.editor.getValue())
    })
  }
  render () {
    return (
      <div className="editor">
        <div ref="editor" className="editor-container"></div>
      </div>
    )
  }
}
