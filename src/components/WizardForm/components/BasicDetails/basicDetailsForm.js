import React from 'react'
import { connect } from 'react-redux'
import { stepUp } from '../../../redux/stepActions'
import { Field, reduxForm } from 'redux-form'

let BasicDetailsForm = (props) => {

  return (
    <form className="msform" onSubmit={props.handleSubmit}>
      <ul id="progressbar">
          <li className="active" id="account"><strong>Account</strong></li>
          <li id="personal"><strong>Personal</strong></li>
          <li id="other"><strong>Other</strong></li>
          <li id="confirm"><strong>Finish</strong></li>
      </ul>
      <div className="progress mb-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <fieldset>
        <div className="form-card">
          <div className="row">
            <div className="col-7">
              <h2 className="fs-title">Account Information:</h2>
            </div>
            <div className="col-5">
              <h2 className="steps">Step 1 - 4</h2>
            </div>
          </div> 
          <label className="fieldlabels">First Name: *</label> 
          <Field type="text" name="fname" component="input"/> 
          <label className="fieldlabels">Last Name: *</label> 
          <Field type="text" name="lname" component="input"/> 
          <label className="fieldlabels">Email: *</label> 
          <Field type="email" name="email" component="input"/>
          <label className="fieldlabels">Password: *</label> 
          <Field type="password" name="pwd" component="input"/>  
        </div> 
        <button type="submit" className="next action-button">Next</button>
    </fieldset>
    </form>
  )
}

BasicDetailsForm = reduxForm({
  // a unique name for the form
  form: 'BasicDetails'
})(BasicDetailsForm)

export default BasicDetailsForm
