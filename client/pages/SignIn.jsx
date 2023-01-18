import React, { useRef } from "react";
import logo from "../../public/images/web-app-logo.png";

const SignIn = () => {
  const username = useRef(null);
  const password = useRef(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
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
          <label htmlFor="password">Password</label>
          <input ref={ password } type="text" name="password" id="password-field" placeholder="Password"/>
          <div className="checkbox-container">
            <input type="checkbox" id="remember"/>
            <label  htmlFor="remember">Remember me</label>
            <a href="#">Forgot Password</a>
          </div>  
          <input onClick={ e => handleClick(e) } type="submit" value="Login" className="btn" id="login-form-submit"/>
          <small>
            Don't have an account? <a href="sign-up.html">Sign up</a>
          </small>          
        </form>
      </div>       
    </section>
  </div>
  )
}

export default SignIn;