import React from 'react';

const LoginForm = ({ isShowLogin }) => {
  
  return (
    <div className={`${!isShowFormLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <input type="text" name="username" className="login-box" />
            <label>Password</label>
            <input type="password" name="password" clasName="login-box" />
            <input type="submit" name="password" className="login-btn" />
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;