import React, { useRef } from "react"
import sideImage from "../../public/images/sign-up-page2.jpg";
import { Link, Outlet } from 'react-router-dom'

export function SignUp() {
  const fullName  = useRef(null);
  const email     = useRef(null);
  const username  = useRef(null);
  const password  = useRef(null);
  const confirmPW = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    let errors = false;

    // Client Validation

    // if () {
      // set email
    // }

    console.log(fullName.current.value);
    console.log(email.current.value);
    console.log(username.current.value);
    console.log(password.current.value);
    console.log(confirmPW.current.value);
  }

  return (
  <><div className="sidebar-container">
      <img className="logo" src={sideImage} alt="placeholder logo" />
      <h3 className="app-name">Create an account to get started!</h3>
      <div className="sidebar-form form-control">
        <form action="" id="sign-up-form">
          <label for="text">Your Name</label>
          <input required ref={fullName} type="name" id="name-field" placeholder="Enter your full name" />
          <label for="email">Email</label>
          <input ref={email} type="email" id="email-field" placeholder="Enter your email" />
          <label for="username">Username</label>
          <input ref={username} type="text" id="username-field" placeholder="Enter your username" />
          <label for="password">Password</label>
          <input ref={password} type="text" id="password-field" placeholder="Password" />
          <label for="password">Confirm Password</label>
          <input ref={confirmPW} type="text" id="confirmPW-field" placeholder="Confirm your password" />
          <input onClick={ e => handleClick(e) } type="submit" value="Create Your Account" className="btn" id="sign-up-form-submit" />
          <small>
            Already have an account?<Link to="/home">Signin</Link>
          </small>
          
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp;