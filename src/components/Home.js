import Header from './Header'
import Footer from './Footer'
import Stripe from './Stripe'
import InfoNav from './InfoNav'
import List from './List'
import { StyledA } from './styles/A.styled'
import {FaEnvelope, FaFacebook, FaYoutube, FaPhone, FaHome} from 'react-icons/fa'
import logo from '././../assets/logo.png'
import { StyledLink, ContactLink, GreenLi } from './styles/List.styled'
import OurClients from './OurClients'
const Home = () => {
  return (
    <>
      <Header/>
      <Stripe bgColor={'#184e77'} justify={'space-between'}>
        <p>Szukasz inspiracji? Chcesz dowiedzieć sie więcej? Napisz lub zadzwoń</p>
        <div>
          <StyledA href="mailto:abc@gmail.com" txtColor={'#6a994e'} bgColor={'#fff'}>Napisz do Nas</StyledA>
          <StyledA href="tel:604-342-038" txtColor={'#fff'} bgColor={'#6a994e'}>Zadzwoń do Nas</StyledA>
        </div>
      </Stripe>
      <Stripe bgColor={'#6a994e'} justify={'center'}>
        <p>Ogrody Poznanń, Piła, Budzyn, Wielkopolska. Z myślą ogodzie i potrzebie przebywania w pieknym otoczeniu</p>
      </Stripe>
      <OurClients/>
      <InfoNav>
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
      </InfoNav>
      <Footer/>
    </>
  )
}

export default Home
