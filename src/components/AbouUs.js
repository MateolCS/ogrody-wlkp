import Header from "./Header"
import Footer from "./Footer"
import InfoNav from "./InfoNav"
import Menu from "./Menu"
import Stripe from "./Stripe"
import Location from "./Location"
import { LocationLink, GreaterThan, LocationP } from "./styles/Location.styled"
import { Check, StripeContainer, StripeTxt, StripeContainerDesc, StripeContainerTitle } from "./styles/AboutUs.styled"
const AbouUs = () => {
  return (
    <>
        <Header />
        <Menu/>
        <Location>
            <LocationLink to="/">Ogrody-wlkp <GreaterThan/></LocationLink>
            <LocationP>O firmie</LocationP>
        </Location>
        <Stripe justify={'space-around'} bgColor={'#f9f4f5'}>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Projektowanie ogrodów</StripeContainerTitle>
                    <StripeContainerDesc>Projektujemy zarówno małe ogrody przydomowe, jak i duze tereny zielone</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Projektowanie ogrodów</StripeContainerTitle>
                    <StripeContainerDesc>Projektujemy zarówno małe ogrody przydomowe, jak i duze tereny zielone</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Projektowanie ogrodów</StripeContainerTitle>
                    <StripeContainerDesc>Projektujemy zarówno małe ogrody przydomowe, jak i duze tereny zielone</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
        </Stripe>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default AbouUs
