import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  NavBtn,
} from './Navbar.elements';

const Navbar = ({ toggle,  }) => {
  
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
            <NavBtn>
              <Link to='/signIn'>
                <SignInButton >
                  Sign In
                </SignInButton>
               
              </Link>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      
    </>
  )
}

export default Navbar;
