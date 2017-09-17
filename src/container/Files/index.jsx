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
    ipcRenderer.on('openfile', this.addFiles)
  }

  componentWillUnmount () {
    ipcRenderer.on('openfile', this.addFiles)
  }

  onClick = () => {
    ipcRenderer.send('openfile')
  }

  addFiles = (e, files) => {
    if (files) {
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
