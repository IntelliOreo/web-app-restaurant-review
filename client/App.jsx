import React from 'react';

import styles from './style.css';

import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';


export default function App() {
    return (
      
      
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    
    )    
};

