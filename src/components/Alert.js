import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { hideAlert } from './redux/actions';

const Alert = ({alert}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="alert alert-danger alert-dismissible" role="alert">
                {alert.message}
                <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"
                onClick={() => dispatch(hideAlert(alert.id))}
                ></button>
            </div>
        </div>
    )
}

Alert.propType = {
    alert: PropTypes.shape({
        message: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export default Alert