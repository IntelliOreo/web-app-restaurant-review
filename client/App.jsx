import React from 'react';
import './style.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Navbar from './components/Navbar'

export default function App() {
    return (
     <>
      <Navbar />
      <Routes> 
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        
      </Routes>
      <ToastContainer />
      </> 
    )    
};

