import { connect } from 'react-redux'
import Files from '../../components/Files'

const mapStateToProps = state => {
  return {
    files: state.files
  }
}

const mapDispatchToProps = action => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Files)
