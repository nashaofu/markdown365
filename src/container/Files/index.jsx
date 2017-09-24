import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import { files, editor } from '@/actions'
import Files from '@/components/Files'

const mapStateToProps = state => {
  return {
    files: state.files.files,
    active: state.files.active
  }
}

const mapDispatchToProps = dispatch => ({
  editFile: file => dispatch(files.editFile(file)),
  removeFile: file => dispatch(files.removeFile(file)),
  editorOnChange: value => dispatch(editor.editorOnChange(value))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class FilesContainer extends Component {
  onOpenFile = () => {
    ipcRenderer.send('open-file')
  }

  onSelect = file => {
    if (file.filename !== this.props.active.filename) {
      this.props.editFile(file)
    }
  }

  onRemove = file => {
    this.props.removeFile(file)
    if (file.filename === this.props.active.filename) {
      this.props.editorOnChange('')
    }
  }

  render () {
    const { files, active } = this.props
    return (
      <Files
        files={files}
        active={active}
        onOpenFile={this.onOpenFile}
        onSelect={this.onSelect}
        onRemove={this.onRemove}
      />
    )
  }
}
