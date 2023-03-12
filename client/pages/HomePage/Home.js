import React, { useState } from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
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
      {/* <InfoSection /> */}
      {/* <Hero /> */}
      
      <ToastContainer />
    </>
  )
}

export default Home