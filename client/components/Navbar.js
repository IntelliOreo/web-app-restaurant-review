import React, { useState } from 'react';
import { Button } from './Button';
import Dropdown from './Dropdown';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBeer } from 'react-icons/fa';

import {GiRocketThruster, TiHomeOutline} from 'react-icons/gi';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <GiRocketThruster className='navbar-icon'/>
              Reviews.io
            </Link>
            <div className='menu-icon' onClick={handleClick} >
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink 
                  to='/' 
                  className={({ isActive}) => 
                  'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink 
                  to='/about' 
                  className={({ isActive}) => 
                  'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink 
                  to='/contact' 
                  className={({ isActive}) => 
                  'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item sign-in'>
                <NavLink 
                  to='/signIn' 
                  className={({ isActive}) => 
                  'nav-links' + (isActive ? ' activated' : '')
                  }
                  onClick={closeMobileMenu}
                >
                  Sign In
                </NavLink>
              </li>

            </ul>
          </div>                
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;