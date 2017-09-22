import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editor } from '@/actions'
import Editor from '@/components/Editor'

const mapStateToProps = state => {
  return {
    value: state.editor.value,
    viewerShow: state.ui.viewerShow
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
    const { value, viewerShow } = this.props
    return (
      <Editor
        value={value}
        viewerShow={viewerShow}
        onChange={this.onChange}
      />
    )
  }
}
