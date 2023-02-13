import React, { useState } from 'react';
import styled from 'styled-components';
import Img from '../../../public/images/web-app-logo.png'
import { Link } from 'react-router-dom';

// previos imports
// import Img from '../../../public/images/web-app-logo.png'
// import { Link, 
//   NavLink } 
//   from 'react-router-dom';
// import './Navbar.css';
// import { FaBeer } from 'react-icons/fa';

// import {GiRocketThruster, TiHomeOutline} from 'react-icons/gi';
// import {FaBars, FaTimes} from 'react-icons/fa';
// import {IconContext} from 'react-icons/lib';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;


const NavbarWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: url(${Img}) no-repeat left top;
  background-size: 60px 60px;
  cursor: pointer;
`;

const Brand = styled.h1`
  font-size: 40px;
  padding-left: 10px;
  font-family: "Eudoxus Sans", sans-serif;
  justify-self: stretch;
`;
const Nav = styled.div`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;

const Search = styled.div`
  right: 235px;
  position: absolute;
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

const Input = styled.input`
  color: #000;
  width: 196px;
  borders: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #000;
    
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SignUp = styled.a`
  width: 110px;
  color: #000;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
  border: 1px solid black
`;

const LogIn = styled.a`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: RGBA(255, 165, 0, 1);
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;



function Navbar() {
    return(
        <NavbarContainer>
          <NavbarWrap>
            <Logo />
            <Brand>
              REVIEWS.IO
            </Brand>
            <Nav>
              <NavLink to='/'>HOME</NavLink>
              <NavLink to='/'>ABOUT</NavLink>
              <NavLink to='/'>PRODUCTS</NavLink>
              <NavLink to='/'>CONTACT</NavLink>
            </Nav>
            <Search>
              <SearchWrap>
                <Input type='text' placeholder='Create a review' />
              </SearchWrap>
            </Search>
            <ButtonContainer>
              <SignUp className='sign-up-button'>SIGN UP</SignUp>
              <LogIn>LOG IN</LogIn>
            </ButtonContainer>
          </NavbarWrap>
        </NavbarContainer>
  
  
  
  // Previous working nav bar 
  
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // return (
  //   <>
  //     <IconContext.Provider value={{ color: '#fff'}}>
  //       <nav className='navbar'>
  //         <div className='navbar-container container'>
            
  //           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
  //             <img className="navbar-logo-image" src={ logo } alt="placeholder logo"/>
  //             Reviews.io
  //           </Link>
  //           <div className='menu-icon' onClick={handleClick} >
  //             {click ? <FaTimes /> : <FaBars />}
  //           </div>
  //           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  //             <li className='nav-item'>
  //               <NavLink 
  //                 to='/' 
  //                 className={({ isActive}) => 
  //                 'nav-links' + (isActive ? ' activated' : '')
  //                 }
  //                 onClick={closeMobileMenu}
  //               >
  //                 Home
  //               </NavLink>
  //             </li>
  //             <li className='nav-item'>
  //               <NavLink 
  //                 to='/about' 
  //                 className={({ isActive}) => 
  //                 'nav-links' + (isActive ? ' activated' : '')
  //                 }
  //                 onClick={closeMobileMenu}
  //               >
  //                 About
  //               </NavLink>
  //             </li>
  //             <li className='nav-item'>
  //               <NavLink 
  //                 to='/contact' 
  //                 className={({ isActive}) => 
  //                 'nav-links' + (isActive ? ' activated' : '')
  //                 }
  //                 onClick={closeMobileMenu}
  //               >
  //                 Contact
  //               </NavLink>
  //             </li>
  //             <li className='nav-item sign-in'>
  //               <NavLink 
  //                 to='/signIn' 
  //                 className={({ isActive}) => 
  //                 'nav-links' + (isActive ? ' activated' : '')
  //                 }
  //                 onClick={closeMobileMenu}
  //               >
  //                 Sign In
  //               </NavLink>
  //             </li>

  //           </ul>
  //         </div>                
  //       </nav>
  //     </IconContext.Provider>
  //   </>
  )
}

export default Navbar;