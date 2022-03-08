import React, { useState, useEffect } from 'react'
import styles from './styles.css'
import { connect } from 'react-redux'
import { signInUser, isnLogin } from '../redux/actions'
import AlertForm from '../alertForm'
import { useNavigate } from "react-router-dom";

const AuthForm = ({ alerts, user, signInUser, isnLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

const submitAuthHandler = event => {
  event.preventDefault();

  signInUser(email, password)
}

useEffect(() => {
  if(user) 
  return navigate('/posts') 
}, [user])

 const ActionTypeHandler = event => {
  event.preventDefault();
  return isnLogin()
 } 

  return (
    <div className='container' style={styles}>
    {alerts && <AlertForm />}
      <div className='text-center'>
        <div className="bg-white border border-light rounded-2 d-inline-flex p-3 justify-content-center mt-4">
          <form onSubmit={submitAuthHandler} >
            <img className="mb-4 rounded" src="./img/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3">Please sign in</h1>
            <div className='form-floating mb-3'>
              <input type="email" 
                id="inputEmail" 
                className="form-control" 
                placeholder="name@example.com" 
                required 
                value={email} 
                onChange={email => setEmail(email.target.value)}  
              />
              <label htmlFor="inputEmail">Email address</label>
            </div>
            <div className='form-floating'>
              <input type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Password" 
                required 
                value={password} 
                onChange={pas => setPassword(pas.target.value)}  
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-3 fs-6 text text-muted">Don't have an account? <a href="/" onClick={ActionTypeHandler}  className="text-decoration-none">Create an account</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  signInUser, isnLogin
}

const mapStateToProps = state => ({
  alerts: state.app.alerts,
  user: state.app.user
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)