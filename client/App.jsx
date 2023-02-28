import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';
import './styles/loginstyle.css'
import { Route, Routes, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home'
import LoginForm from './components/LoginForm/LoginForm'

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import InfoSection from './components/InfoSection/InfoSection.js';


export default function App() {
  
  const [isShowLogin, setIsShowLogin] = useState(false)

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

    return (
      <>
        <GlobalStyle />
        <Navbar handleLoginClick={handleLoginClick} />

        <Hero />
        <Routes>
          <Route path='/' exact element={Home} />
          {/* <Route path='/' exact element={AboutUs} />
          <Route path='/' exact element={Products} /> */}
          <Route path='/signIn' element={<LoginForm />} />       
        </Routes>
        <InfoSection />
        <Footer />
        
        
        
        <ToastContainer />
      </> 
    )    
};

