import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import SideNav from "./SideNav"
import ModalImg from "./ModalImg"
import faceimg from '././../assets/dihydration/dihydrationmainimg.jpg'
import { useState } from "react"

import { LocationLink, GreaterThan, LocationP } from "./styles/Location.styled"
import { StyledSection, Container, PageContent, Title, MainImg, TextContent, Grid, TextListOrd } from "./styles/Utils.styled"
import { DihydrationData } from "./DihydrationData"

const Dihydration = () => {

    const [modalImg, setModalImg] = useState(null)
    const[displayModal, setDisplayModal] = useState(false)

    const showModal = (e) =>{
        setModalImg(Number(e.target.id))
        setDisplayModal(true)

        console.log(e.target.id)
    }


  return (
    <>
        <Header />
        <Menu pageTitle={'Odwodnienia i drenaze'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna<GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze<GreaterThan/></LocationLink>
            <LocationP>Odwodnienia i drenaze</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <Title>Odwodnienia i drenaze</Title>
                    <MainImg src={faceimg} alt="Odwodnienia i drenaze"/>
                    <TextContent>
                    Nasza firma zajmuje się drenowaniem terenów zagrożonych negatywnym działaniem wody. Odnawiamy tereny przeznaczone pod tereny zieleni, kostkę brukową i inne utwardzenia, wykonujemy odwodnienia budynków itp. Przed rozpoczęciem prac wykonujemy szczegółowe projekty instalacji, określamy warunki wodno-glebowe i dobieramy odpowienie warstwy odsączające.
                    </TextContent>
                    <TextContent>
                    Najbardziej popularne i najczęściej wykonywane prace:
                    </TextContent>
                    <TextListOrd mrgBot={'2rem'}>
                        <li>Drenaże opaskowe – utrzymują szybkie odporowadzenie nadmiaru wód, wokół fundamentów budynków</li>
                        <li>Zagospodarowanie wody deszczowej z rynien, poprzez skierowanie jej do odpowiednich odbiorników</li>
                        <li>Odwodnianie terenu – sieć drenów pozwala na korzystanie z ogrodu, bez względu na poziom opadów, jak również zapewnia roślinom odpowiednie warunki powietrzno – wodne</li>
                    </TextListOrd>
                    <Grid columns={'3'}>
                    {DihydrationData.map((item) => (
                            <img id={item.id} key={item.id} src={item.url} alt={item.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Odwodnienia i drenaze'}/>
            </Container>
        </StyledSection>
        <InfoNav />
        <ModalImg pictures={DihydrationData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
        <Footer/>
      
    </>
  )
}

export default Dihydration
