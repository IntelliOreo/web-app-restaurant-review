import React from 'react';
import './style.css';
import { Route, Routes, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';


export default function App() {
    return (
     <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
      <Routes> 
        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        
      </Routes>
      <ToastContainer />
      </> 
    )    
};

