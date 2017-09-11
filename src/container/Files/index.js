import React, { Component } from 'react'
import { connect } from 'react-redux'

import files from '../../actions/files'
import Files from '../../components/Files'

const mapStateToProps = state => {
  return {
    files: state.files
  }
}

const mapDispatchToProps = action => ({
  ...files
})

@connect(mapStateToProps, mapDispatchToProps)
export default class FilesContainer extends Component {
  render () {
    const { files, add, remove, edit } = this.props
    console.log(this.props)
    return (
      <Files
        files={files}
        onAdd={add}
        onRemove={remove}
        onEdit={edit}
      />
    )
  }
}
