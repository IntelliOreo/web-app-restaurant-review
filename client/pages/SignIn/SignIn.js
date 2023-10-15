import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Rename the import here
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import NekoLogo from '../../../public/images/web-app-logo.png';
import axios  from 'axios'
import AuthContext from './AuthContext'

const SignIn = ({ onClose }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate(); // Rename the navigate function here
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

    if (errors) return;

    // Send to Backend
    axios.post('/api/user/signIn', {
      username: username.current.value,
      password: password.current.value,
    })
    .then(function (response) {
      const userId = response.data.userId;
      localStorage.setItem('userId', userId);

      // Update the isAuthenticated state to true
      setIsAuthenticated(true);

      // Close Modal
      if (onClose) {
        onClose();
      }

      // Redirect to ShowNotes page
      navigate('/ShowMyNotes'); // Use navigate() here

    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
  <main className="sidebar-container">
    <img src={NekoLogo} style={{ width: "8rem", }}/>
    <h1>Reviews.io</h1>
    <section className="sidebar-form">
      <button className="btn">
        <img src="#" alt=""/>
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
  </main>
  )
}

export default SignIn;
