import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../Modals/Modal';
import { SignInButton } from '../Button/Button.elements';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButtonContainer,
} from './Navbar.elements';
import SignIn from '../../pages/SignIn/SignIn';
const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const Navbar = ({ toggle,  }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Nav>
        <NavbarContainer> 
          <NavLogo to="/">
            <NavIcon />
            REVIEWS.IO
          </NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signUp">Sign Up</NavLinks>
            </NavItem>
            <NavButtonContainer  onClick={() => console.log('clicked')}>            
              <SignInButton onClick={() => setIsOpen(true)}>Sign In</SignInButton>
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <SignIn />
              </Modal>                         
            </NavButtonContainer>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      
    </>
  )
}

export default Navbar;
