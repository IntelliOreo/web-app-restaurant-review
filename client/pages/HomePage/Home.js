import React, { useState } from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';



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