import React, { Component, useState } from 'react';
import styles from './style.css';

// Testing solutions for multi-page App
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

//  End of testing block

function App() {
    return(
      <>
        <Router>
          <Switch>
            <Route className="main" exact path="/" component={SignIn} />

            <Route className="signUp" exact path="SignUp" component={SignUp}/>
          
            <Redirect to="/" />
          </Switch>

        </Router>
      </>
      
    );


}

export default App;