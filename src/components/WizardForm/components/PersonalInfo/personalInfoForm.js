import React from 'react'
import { connect } from 'react-redux'
import { stepUp, stepDown } from '../../../redux/stepActions'
import { Field, reduxForm } from 'redux-form'

let PersonalInfoForm = (props) => {

return (
  <form className="msform" onSubmit={props.handleSubmit}>
    <ul id="progressbar">
        <li className="active" id="account"><strong>Account</strong></li>
        <li className="active" id="personal"><strong>Personal</strong></li>
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
            <h2 className="fs-title">Personal Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 2 - 4</h2>
          </div>
        </div> 
        <label htmlFor='age' className="fieldlabels">Favorite color</label>
        <Field component='select' name="color" className="form-control" id='age'>
          <option></option>
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
          <option value="000000">Black</option>
          <option value="800080">Purple</option>
          <option value="FFFF00">Yellow</option>
          <option value="FFFFFF">White</option>
        </Field>
        <label className="fieldlabels">Contact No.: *</label> 
        <Field component='input' type="tel" name="phone" pattern="^\+38\d{10}"/> 
        <label className="fieldlabels">Date of Birth: *</label> 
        <Field component='input' type="date" name="birth_date" />
        <div>
          <p className="fieldlabels">Select a sex:</p>
          <Field component='input' type="radio" id="sex" name="sex" value="Male" />
          <label className="fieldlabels" htmlFor="Male">Male</label>
          <Field component='input' type="radio" id="sex" name="sex" value="Female" />
          <label className="fieldlabels" htmlFor="Female">Female</label>
        </div>
      </div> 
      <button type="submit" name="next" className="next action-button">Next</button>
      <button type="button" name="previous" className="previous action-button-previous" onClick={() => props.stepDown(props.step)}>Previous</button>
    </fieldset>
  </form>
  )
}

PersonalInfoForm = reduxForm({
  // a unique name for the form
  form: 'PersonalInfo'
})(PersonalInfoForm)

const mapStateToProps = state => {
  return {
    step: state.step.step
  };
};

const mapDispatchToProps = {
  stepDown
}

PersonalInfoForm = connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm)

export default PersonalInfoForm
