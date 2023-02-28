import React, { useState, useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Button } from '../../styles/globalStyles';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
 } 
  from './Navbar.elements';


const Navbar = ({ handleLoginClick }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const handleMainClick = () => {
    handleLoginClick()
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              REVIEWS.IO
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu} >Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu} >About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu} >Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Button onClick={handleMainClick} >SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink >
                    <Button onClick={closeMobileMenu} >SIGN IN</Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>


          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
