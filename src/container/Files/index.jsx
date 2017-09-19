import React, { Component } from 'react'
import { connect } from 'react-redux'
import { files } from '@/actions'
import Files from '@/components/Files'

const mapStateToProps = state => {
  return {
    files: state.files.files,
    active: state.files.active
  }
}

const mapDispatchToProps = dispatch => ({
  edit: file => dispatch(files.edit(file))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class FilesContainer extends Component {
  onSelect = file => {
    if (file.filename !== this.props.active.filename) {
      this.props.edit(file)
    }
  }
  render () {
    const { files, active } = this.props
    return (
      <Files
        files={files}
        active={active}
        onSelect={this.onSelect}
      />
    )
  }
}
