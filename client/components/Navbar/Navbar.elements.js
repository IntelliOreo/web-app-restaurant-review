import styled from 'styled-components';
import { CgBowl } from 'react-icons/cg';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
background: #101522;
height: 5rem;
margin-top: -5rem;
display: flex; 
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 7600px) {
  transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 4rem;
z-index: 1;
width: 100%;
padding: 0 1.5rem;
max-width: 1215px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.6rem;
display: flex;
align-self: center;
margin-left: 1.5rem;
font-weight: bold;
`;

export const NavIcon = styled(CgBowl)`
  font-size: 2rem;
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 880px) {
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
    border-bottom: 2px solid #FFa500;
  }
`

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  font-size: 1rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #FFa500;
  }

  /* @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    } */
  /* } */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignInButton = styled.button`
  border-radius: 50px;
  background: #FFa500;
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
