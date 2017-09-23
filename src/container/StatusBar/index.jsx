import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ui } from '@/actions'
import StatusBar from '@/components/StatusBar'

const mapStateToProps = state => {
  return {
    viewMode: state.ui.viewMode
  }
}

const mapDispatchToProps = dispatch => ({
  setViewMode: viewMode => dispatch(ui.setViewMode(viewMode))
})
@connect(mapStateToProps, mapDispatchToProps)
export default class StatusBarContainer extends Component {
  onSelectViewMode = viewMode => {
    if (viewMode !== this.props.viewMode) {
      this.props.setViewMode(viewMode)
    }
  }
  render () {
    const { viewMode } = this.props
    return (
      <StatusBar
        viewMode={viewMode}
        onSelectViewMode={this.onSelectViewMode}
      />
    )
  }
}
