import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';
import { CgBowl } from 'react-icons/cg';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
background: #101522;
height: 5rem;
/* margin-top: -5rem; */
display: flex; 
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 5rem;
z-index: 1;
width: 100%;
padding: 0 1.5rem;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 1.5rem;
font-weight: bold;
`;

export const NavIcon = styled(CgBowl)`
  font-size: 3rem;
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1.3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`








// export const NavItemBtn = styled.li`

//   @media screen and (max-width: 960px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 120px;
//   }
// `;



//   @media screen and (max-width: 960px) {
//     text-align: center;
//     padding: 2rem;
//     width: 100%;
//     display: table;
    
//     &:hover {
//       color: #4b59f7;
//       transition: all 0.3s ease;
//     }
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   padding: 8px 16px;
//   height: 100%;
//   width: 100%;
//   border: none;
//   outline: none;
// `;