import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify'
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import  CreateNew from '../../components/CreateNew'
// import ShowMyNotes from '../../components/showMyNotes';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      
      <ToastContainer />
    </>
  )
}

export default Home;