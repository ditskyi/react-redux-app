import React from 'react'
import { Navigate} from 'react-router-dom'
import { connect } from 'react-redux'


function CustomRoute(props) {

  if (props.user) return props.children
  if (!props.user) return <Navigate to='/' />
}

const mapStateToProps = state => {
  return {
      user: state.app.user
  }
}

export default connect(mapStateToProps, null)(CustomRoute)



