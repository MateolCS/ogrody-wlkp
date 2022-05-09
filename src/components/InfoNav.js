import { StyledInfoNav, StyledInfoNavContainer } from "./styles/InfoNav.styled"
import { StyledLink, ContactLink, GreenLi } from './styles/List.styled'
import {FaEnvelope, FaFacebook, FaYoutube, FaPhone, FaHome} from 'react-icons/fa'
import logo from '././../assets/logo.png'
import List from './List'
const InfoNav = () => {
  return (
    <StyledInfoNav>
      <StyledInfoNavContainer>
        <List>
            <img src={logo} alt="ogrody-wlkp-logo" />
            <p>
            Świadczymy usługi dla Firm, Instytucji Publicznych i Klientów Indywidualnych. Zapraszamy do współpracy!
            </p>
          </List>
          <List>
            <h3>Usługi</h3>
            <ul>
              <li><StyledLink to="/gardening-services/services">Projektowanie ogrodów</StyledLink></li>
              <li><StyledLink to="/gardening-services/how-to-start">Zakładanie ogrodu</StyledLink></li>
              <li><StyledLink to="/gardening-services/how-to-continue">Pielęgnacja ogrodu</StyledLink></li>
              <li><StyledLink to="/gardening-services/lights">Oświetlenie ogrodu</StyledLink></li>
              <li><StyledLink to="/gardening-services/hydration">Nawadnianie ogrodów</StyledLink></li>
              <li><StyledLink to="/gardening-services/dihydration">Odwodnienia i drenaze</StyledLink></li>
              <li><StyledLink to="/gardening-services/surfaces">Nawierzchnie utwardzone</StyledLink></li>
              <li><StyledLink to="/gardening-services/gear">Sprzęt wielozadaniowy</StyledLink></li>
              <li><StyledLink to="/gardening-services/wood">Drewno kominkowe</StyledLink></li>
            </ul>
          </List>
          <List>
            <h3>Menu</h3>
            <ul>
              <li><StyledLink  to="/aboutus">O firmie</StyledLink></li>
              <li><StyledLink to="/news">Aktualności</StyledLink></li>
              <li><StyledLink to="/contact">Kontakt</StyledLink></li>
              <li><StyledLink to="/gardening-services">Usługi ogrodnicze</StyledLink></li>
              <li><StyledLink to="/oursolutions">Realizacje</StyledLink></li>
            </ul>
          </List>
          <List>
            <h3>Kontakt</h3>
            <ul>
              <li><FaPhone/>Tomasz Kujawa: <ContactLink href='tel:604-342-038'>604-342-038</ContactLink></li>
              <li><FaPhone/>Michal Borowicz: <ContactLink href='tel:660-709-582'>660-709-582</ContactLink></li>
              <li><FaEnvelope/> <ContactLink href='mailto:biuro@ogrody-wlkp.pl'>660-709-582</ContactLink></li>
              <li><FaHome/> Budzyń woj. wielkopolskie</li>
              <GreenLi><FaFacebook/> <FaYoutube/></GreenLi>
            </ul>
          </List>
      </StyledInfoNavContainer>
    </StyledInfoNav>
  )
}

export default InfoNav
