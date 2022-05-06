import Header from './Header'
import Footer from './Footer'
import Stripe from './Stripe'
import { StyledA } from './styles/A.styled'
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
      <Footer/>
    </>
  )
}

export default Home
