import React, { useState, useContext } from 'react';
import GlobalStyle from './styles/globalStyles';

import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import Popup from 'reactjs-popup';

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
import ShowNotes from './pages/ShowNotes/ShowNotes';
import ShowMyNotes from './pages/ShowMyNotes/showMyNotes'
import AuthContext from '../client/pages/SignIn/AuthContext'
import SignInModal from '../client/components/Modals/SignInModal'
import AuthenticatedRoute from '../client/pages/SignIn/AuthRoute'

export default function App() {

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <GlobalStyle />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path="/ShowNotes" element={<ShowNotes />} />
        <Route
        path="/ShowMyNotes" element={ <ShowMyNotes />}/>
        </Routes>
        <InfoSection />
        <Footer />
        <ToastContainer />
      </AuthContext.Provider>
    </> 
  );    
};






// export default function App() {

//   const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
//   const [isOpen, setIsOpen] = useState(false)
//   const toggle = () => {
//     setIsOpen(!isOpen)
//   }

//   function check() {
//     const navigate = useNavigate()
//     // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
//     return (
//       <div>
//         { isAuthenticated ? navigate('/ShowMyNotes') : navigate('/')}
//       </div>
//     );
//   }

//   return (
//     <>
//       <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//         <GlobalStyle />
//         <Sidebar isOpen={isOpen} toggle={toggle}/>
//         <Navbar toggle={toggle}/>
//         <Hero />
//         <Routes>
//           <Route path='/' exact element={ <Home /> } />
//           <Route path='/signUp' element={ <SignUp /> } />    
//           <Route path="/ShowNotes" element={<ShowNotes />} /> 
//       <Route path="/ShowMyNotes" element={<check/>} />
//         </Routes>
//         <InfoSection />
//         <Footer />
//         <ToastContainer />
//       </AuthContext.Provider>
//     </> 
//   );    
// };
