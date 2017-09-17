import path from 'path'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'
import { files } from '@/actions'
import Files from '@/components/Files'

const mapStateToProps = state => {
  return {
    files: state.files
  }
}

const mapDispatchToProps = dispatch => ({
  addFiles: file => dispatch(files.add(file))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class FilesContainer extends Component {
  componentWillMount () {
    ipcRenderer.addListener('open-file', this.addFiles)
  }

  componentWillUnmount () {
    ipcRenderer.removeListener('open-file', this.addFiles)
  }

  onClick = () => {
    ipcRenderer.send('open-file')
  }

  addFiles = (e, files) => {
    if (files) {
      files = files.map(file => ({
        filename: file,
        basename: path.basename(file)
      }))
      this.props.addFiles(files)
    }
  }

  render () {
    const { files, add, remove, edit } = this.props
    return (
      <Files
        files={files}
        onAdd={add}
        onRemove={remove}
        onEdit={edit}
        onClick={this.onClick}
      />
    )
  }
}
