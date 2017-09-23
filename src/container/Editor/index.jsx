import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editor } from '@/actions'
import Editor from '@/components/Editor'

const mapStateToProps = state => {
  return {
    value: state.editor.value,
    viewMode: state.ui.viewMode
  }
}

const mapDispatchToProps = dispatch => ({
  editorOnChange: value => dispatch(editor.editorOnChange(value))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class EditorContainer extends Component {
  onChange = value => {
    this.props.editorOnChange(value)
  }

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
