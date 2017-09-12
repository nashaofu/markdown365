import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'

import files from '../../actions/files'
import Files from '../../components/Files'

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

  onClick = () => {
    ipcRenderer.send('openfile')
    ipcRenderer.once('openfile', (e, files) => {
      console.log(files)
      this.props.add(files)
    })
  }
}
