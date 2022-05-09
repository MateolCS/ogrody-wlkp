import Header from './Header'
import Footer from './Footer'
import Stripe from './Stripe'
import InfoNav from './InfoNav'
import { StyledA } from './styles/A.styled'
import CompanyStatus from './CompanyStatus'

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
      <CompanyStatus/>
      <Stripe bgColor={'#6a994e'} justify={'center'}>
        <p>Ogrody Poznanń, Piła, Budzyn, Wielkopolska. Z myślą ogodzie i potrzebie przebywania w pieknym otoczeniu</p>
      </Stripe>
      <OurClients/>
      <InfoNav/>
      <Footer/>
    </>
  )
}

export default Home
