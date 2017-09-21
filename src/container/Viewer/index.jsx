import React, { Component } from 'react'
import { connect } from 'react-redux'

import Viewer from '@/components/Viewer'

const mapStateToProps = state => {
  return {
    value: state.editor.value
  }
}

@connect(mapStateToProps)
export default class ViewerContainer extends Component {
  render () {
    const { value } = this.props
    return (
      <Viewer value={value} />
    )
  }
}
