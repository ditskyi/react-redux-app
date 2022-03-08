import React from 'react'
import { connect } from 'react-redux'
import AuthForm from './AuthForm'
import CreateAccountForm from './CreateAccountForm'


function LoginForm({login}) {
  if(login) {
    return <AuthForm />
  } else return <CreateAccountForm />
  
}

const mapStateToProps = state => ({
  login: state.app.login

})

export default connect(mapStateToProps, null)(LoginForm)

