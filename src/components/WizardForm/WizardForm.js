import React from 'react'
import { connect } from 'react-redux';
import BasicDetails from './components/BasicDetails/BasicDetails';
import OtherInfo from './components/OtherInfo/OtherInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ResultDataForm from './resultDataForm/resultDataForm';

function WizardForm(props) {
  console.log('props_step_wizardform', props.step)
  // let step = 0;

  if(props.step===0){

    return (
    <BasicDetails /> );
    
    }
    else if(props.step===1){
    
    return (
    <PersonalInfo /> );
    
    }
    else if(props.step===2){
    
    return (
    <OtherInfo /> );
    }
    else if(props.step==3){
    
    return (
      <ResultDataForm />);
    }

}

const mapStateToProps = state => {
  return {
    step: state.step.step
  };
};


export default connect(mapStateToProps, null)(WizardForm)
// export default WizardForm