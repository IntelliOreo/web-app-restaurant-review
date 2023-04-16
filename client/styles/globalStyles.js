import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  outline: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Eudoxus Sans", sans-serif;
  scroll-behavior: smooth;

  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
    
  }
`;



export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? 'orange' : 'orange') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px') };
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px') };
outline: none;
border: none;
cursor: pointer;

&:hover {
  transition: all 0.3 ease-out;
  background: #fff;
  background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7') };
};

@media screen and (max-width: 960px) {
  width: 100%;
}
`

export default GlobalStyle;