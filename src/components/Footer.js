import { StyledFooter, FooterContainer, FooterLink } from "./styles/Footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
        <FooterContainer>
            <FooterLink to={'/privacy-politics'}>Polityka prywatności</FooterLink>
            <p>&copy; 2019 B&K Ogrody i Systemy Nawadniania</p>
        </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
