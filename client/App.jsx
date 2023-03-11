import React, { useState } from 'react';
import GlobalStyle from './styles/globalStyles';

import { Route, Routes, } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection.js';
import Footer from './components/Footer/Footer';

import Home from './pages/HomePage/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

export default function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
      <>
        <GlobalStyle />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <Routes>
          <Route path='/' exact element={ Home } />
          <Route path='/SignIn' exact element={ SignIn  } />
          {/* <Route path='/SignUp' element={ <SignUp /> } />        */}
        </Routes>
        <InfoSection />
        <Footer />
        <ToastContainer />
      </> 
    )    
};

