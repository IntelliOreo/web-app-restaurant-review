import React, { useRef, useState } from "react";
import logo from "../../../public/images/web-app-logo.png";
import { Link, Outlet } from 'react-router-dom'
import {toast} from 'react-toastify'

const SignIn = () => {
  
  const username = useRef(null);
  const [usernameError, setUsernameError] = useState('')
  const password = useRef(null);
  const [passwordError, setPasswordError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    let errors = false;
    // Client Validation

    if (username.current.value.trim() === '' || !username.current.value) {
      setUsernameError('Username cannot be empty')
      errors = true
    }
    
    if (password.current.value.trim() === '' || !username.current.value) {
      setPasswordError('Password cannot be empty')
      errors = true
    }

    if (errors) return
    // Send to Backend
    try {
      console.log(username.current.value);
      console.log(password.current.value);

      // Call the API to login user

      toast.success(`Welcome ${username.current.value}`)

    } catch (error) {
      console.log(error)
      toast.error('SERVER ERROR')
      return
    }


    
    
  }
  
  return (
  <div className="sidebar-container">
    <img className="logo" src={ logo } alt="placeholder logo"/>
    <h2 className="app-name">Reviews.io</h2>
    <section className="sidebar-form">
      <button className="btn">
        <img src="public/images/web-app-logo.png" alt=""/>
        Log in with Google
      </button>
      <small>or</small>
      <div className="form-control ">
        <form action="" id="login-form" >
          <label htmlFor="username">Username</label>
          <input ref={ username } type="text" name="username" id="username-field" placeholder="Enter your username"/>
          <span className="error">{usernameError}</span>
          <br></br>
          <label htmlFor="password">Password</label>
          <input ref={ password } type="password" name="password" id="password-field" placeholder="Password"/>
          <span className="error">{passwordError}</span>
          <div className="checkbox-container">
            <input type="checkbox" id="remember"/>
            <label  htmlFor="remember">Remember me</label>
            <a href="#">Forgot Password</a>
          </div>  
          <input onClick={ e => handleClick(e) } type="submit" value="Login" className="btn" id="login-form-submit"/>
          <small>
            Don't have an account? <Link to="SignUp">Sign up</Link>
          </small>          
        </form>
      </div>       
    </section>
  </div>
  )
}

export default SignIn;