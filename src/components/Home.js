import Header from './Header'
import Footer from './Footer'
import Stripe from './Stripe'
import InfoNav from './InfoNav'
import List from './List'
import { StyledA } from './styles/A.styled'
import {Link} from 'react-router-dom';
import {FaEnvelope, FaFacebook, FaYoutube, FaPhone, FaHome} from 'react-icons/fa'

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
        <p>Ogrody Poznanń, Piła, Budzyn, Wielkopolska. Z myślą ogodzie i potrzebieprzebywania w pieknym otoczeniu</p>
      </Stripe>
      <InfoNav>
        <List>
          <h3>Usługi</h3>
          <ul>
            <li><Link to="/gardening-services/services">Projektowanie ogrodów</Link></li>
            <li><Link to="/gardening-services/how-to-start">Zakładanie ogrodu</Link></li>
            <li><Link to="/gardening-services/how-to-continue">Pielęgnacja ogrodu</Link></li>
            <li><Link to="/gardening-services/lights">Oświetlenie ogrodu</Link></li>
            <li><Link to="/gardening-services/hydration">Nawadnianie ogrodów</Link></li>
            <li><Link to="/gardening-services/dihydration">Odwodnienia i drenaze</Link></li>
            <li><Link to="/gardening-services/surfaces">Nawierzchnie utwardzone</Link></li>
            <li><Link to="/gardening-services/gear">Sprzęt wielozadaniowy</Link></li>
            <li><Link to="/gardening-services/wood">Drewno kominkowe</Link></li>
          </ul>
        </List>
        <List>
          <h3>Menu</h3>
          <ul>
            <li><Link  to="/aboutus">O firmie</Link></li>
            <li><Link to="/news">Aktualności</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/gardening-services">Usługi ogrodnicze</Link></li>
            <li><Link to="/oursolutions">Realizacje</Link></li>
          </ul>
        </List>
        <List>
          <h3>Kontakt</h3>
          <ul>
            <li><FaPhone/>Tomasz Kujawa: <a href='tel:604-342-038'>604-342-038</a></li>
            <li><FaPhone/>Michal Borowicz: <a href='tel:660-709-582'>660-709-582</a></li>
            <li><FaEnvelope/> <a href='mailto:biuro@ogrody-wlkp.pl'>660-709-582</a></li>
            <li><FaHome/> Budzyń woj. wielkopolskie</li>
            <li><FaFacebook/> <FaYoutube/></li>
          </ul>
        </List>
      </InfoNav>
      <Footer/>
    </>
  )
}

export default Home
