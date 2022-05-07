import { StyledInfoNav, StyledInfoNavContainer } from "./styles/InfoNav.styled"

const InfoNav = ({children}) => {
  return (
    <StyledInfoNav>
      <StyledInfoNavContainer>
        {children}
      </StyledInfoNavContainer>
    </StyledInfoNav>
  )
}

export default InfoNav
