import fs from 'fs'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

import { editor } from '@/actions'
import Editor from '@/components/Editor'

const mapStateToProps = state => {
  return {
    value: state.editor.value,
    viewMode: state.ui.viewMode,
    active: state.files.active
  }
}

const mapDispatchToProps = dispatch => ({
  editorOnChange: value => dispatch(editor.editorOnChange(value)),
  editorOnSave: saved => dispatch(editor.editorOnSave(saved))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class EditorContainer extends Component {
  onChange = value => {
    this.props.editorOnChange(value)
    this.props.editorOnSave(false)
    this.autoSave(value)
  }

  autoSave = debounce(value => {
    if (this.props.active) {
      const { filename } = this.props.active
      if (filename) {
        fs.writeFile(filename, value, error => {
          if (!error) {
            this.props.editorOnSave(true)
          }
        })
      }
    }
  }, 1000)

  render () {
    const { value, viewMode } = this.props
    return (
      <Editor
        value={value}
        viewMode={viewMode}
        onChange={this.onChange}
      />
    )
  }
}
