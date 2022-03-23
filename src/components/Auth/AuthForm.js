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
      <div className='text-center d-flex justify-content-center'>
        <div className="bg-white border border-light rounded-2 p-3 mt-4 mb-4 w">
          <form onSubmit={submitAuthHandler} >
            <div className='pb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" focusable="false" role="img" width="100" height="100">
                <path fill="#0d6efd" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"/>
                <path fill="#fff" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"/>
              </svg>
            </div>
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