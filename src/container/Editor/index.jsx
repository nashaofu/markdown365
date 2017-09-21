import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editor } from '@/actions'
import Editor from '@/components/Editor'

const mapStateToProps = state => {
  return {
    value: state.editor.value
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(editor.onChange(value))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class EditorContainer extends Component {
  onChange = value => {
    this.props.onChange(value)
  }

  render () {
    const { value } = this.props
    return (
      <Editor value={value} onChange={this.onChange} />
    )
  }
}
