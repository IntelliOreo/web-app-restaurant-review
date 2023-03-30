import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#FFa500' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;


  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#FFa500')};
  }
`

export const SignInButton = styled.button`
  width: ${props => props.full ? '100%' : null};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: #FFa500;
  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background-color: #fff;}
`;