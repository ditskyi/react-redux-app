import React from 'react'
import styles from '../styles.css'
import { connect } from 'react-redux'
import { stepUp, stepDown } from '../../../redux/stepActions'
import { Field, reduxForm } from 'redux-form'

let OtherInfoForm = (props) => {

  return (
    <form className="msform" onSubmit={props.handleSubmit}>
      <ul id="progressbar">
          <li className="active" id="account"><strong>Account</strong></li>
          <li className="active" id="personal"><strong>Personal</strong></li>
          <li className="active" id="other"><strong>Other</strong></li>
          <li id="confirm"><strong>Finish</strong></li>
      </ul>
      <div className="progress mb-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <fieldset>
        <div className="form-card">
          <div className="row">
            <div className="col-7">
              <h2 className="fs-title">Other Information:</h2>
            </div>
            <div className="col-5">
              <h2 className="steps">Step 3 - 4</h2>
            </div>
          </div> 
          <label className="fieldlabels">Address</label> 
          <Field component="input" type="text" name="address" /> 
          <label className="fieldlabels">Upload Your Photo:</label> 
          <Field component="input" type="file" name="pic" accept="image/*" /> 
          <label htmlFor="LinkedIn" className="fieldlabels">LinkedIn</label>
          <Field component="input" type="url" name="LinkedIn"
            placeholder="https://example.com"
            pattern="https://.*" size="30"
            required />
          <label htmlFor="floatingTextarea" className="fieldlabels">Comments</label>
          <Field component="textarea" className="form-control" placeholder="Leave a comment here" name="comments" id="floatingTextarea" />
        </div> 
        <button type="submit" className="next action-button">Submit</button> 
        <button type="button" className="previous action-button-previous" onClick={() => props.stepDown(props.step)}>Previous</button>
      </fieldset>
    </form>
  )
}

OtherInfoForm = reduxForm({
  // a unique name for the form
  form: 'OtherInfo'
})(OtherInfoForm)

const mapStateToProps = state => {
  return {
    step: state.step.step
  };
};

const mapDispatchToProps = {
  stepDown
}

OtherInfoForm = connect(mapStateToProps, mapDispatchToProps)(OtherInfoForm)

export default OtherInfoForm