import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  render () {
    const { files } = this.props
    return (
      <Files
        files={files}
      />
    )
  }
}
