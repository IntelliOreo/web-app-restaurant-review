import React, { useState,useRef } from "react"
import sideImage from "../../public/images/sign-up-page2.jpg";
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios';

export function SignUp() {
  const fullName  = useRef(null);
  const email     = useRef(null);
  const username  = useRef(null);
  const password  = useRef(null);
  const confirmPW = useRef(null);
  const [newUser, setNewUser] = useState({});
  const [users, setUsers] = useState([]);


    const onAddUser = (e) => {
      e.preventDefault();
      console.log('here');
      const newUserTemplete = {
       name: fullName.current.value,
       username: username.current.value,
       email: email.current.value,
       password: password.current.value,
       userId: uuid(),
      };
      setNewUser( newUserTemplete );
      setUsers([ newUserTemplete, ...users]);
      

      const url = 'http://localhost:3000/api/user/signUp'
      axios.post(
        url,
        newUserTemplete,
        )
        .then(function(response){
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }
      );
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
          <button onClick={ e => onAddUser(e) } value="Create Your Account" className="btn" id="sign-up-form-submit"></button>
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