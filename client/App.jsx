import React from 'react';
import GlobalStyle from './styles/globalStyles';

import { Route, Routes, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';


import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { InfoSec } from './components/InfoSection/InfoSection.elements';
import InfoSection from './components/InfoSection/InfoSection.js';


export default function App() {
    return (
      <>
        <GlobalStyle />
        <Sidebar />
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' exact element={Home} />
          {/* <Route path='/' exact element={AboutUs} />
          <Route path='/' exact element={Products} /> */}
          <Route path='/signUp' element={<SignUp />} />       
        </Routes>
        <InfoSection />
        <Footer />
        <ToastContainer />
      </> 
    )    
};

