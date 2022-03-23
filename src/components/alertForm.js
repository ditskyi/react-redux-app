import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Alert from './Alert'

function AlertForm ({alerts}) {
    if(!alerts.length) return null;
    else
       return alerts.map(alert => <Alert alert={alert} key={alert.id} />)
}

const mapStateToProps = state => {
    return {
        alerts: state.app.alerts
    }
}

AlertForm.propType = {
    alerts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapStateToProps, null)(AlertForm)