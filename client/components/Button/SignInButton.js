import { StyledButton } from './Button.elements';

const SignInButton = ({ children, props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default SignInButton