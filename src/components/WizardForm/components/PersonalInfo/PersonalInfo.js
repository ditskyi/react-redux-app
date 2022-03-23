import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles.css'
import { stepUp, stepDown } from '../../../redux/stepActions'
import PersonalInfoForm from './personalInfoForm'

function PersonalInfo(props) {

  const onSubmit = (formData) => {
    console.log('personal-data', formData)
    props.stepUp(props.step)
  }

  return (
    <div className="container-fluid" style={styles}>
      <div className="row justify-content-center">
        <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sign Up Your User Account</h2>
            <p>Fill all form field to go to next step</p>
            <PersonalInfoForm onSubmit={onSubmit}/>  
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    step: state.step.step
  };
};

const mapDispatchToProps = {
  stepUp, stepDown
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)