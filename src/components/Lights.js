import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import SideNav from "./SideNav"
import { LocationLink, GreaterThan, LocationP } from "./styles/Location.styled"
import { Container, MainImg, PageContent, StyledSection, Title, TextContent, Grid } from "./styles/Utils.styled"
import faceImg from "../assets/lights/lightsmainimg.jpg"
import { LightsData } from "./LightsData"
import { useState } from "react"
import ModalImg from "./ModalImg"

const Lights = () => {

    const [modalImg, setModalImg] = useState(null)
    const[displayModal, setDisplayModal] = useState(false)

    const showModal = (e) =>{
        setModalImg(Number(e.target.id))
        setDisplayModal(true)
    }

  return (
    <>
        <Header />
        <Menu pageTitle="Oświetlenie ogrodu" />
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze<GreaterThan/></LocationLink>
            <LocationP>Oświetlenie Ogrodu</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <Title>Oświetlenie ogrodu</Title>
                    <MainImg src={faceImg} alt="ligts img"/>
                    <TextContent>
                    Oferujemy kompleksową ofertę oświetlenia ogrodu, budynków i innych elementów architektury. W oparciu o nowoczesne technologie tworzymy niepowtarzalny klimat, jednocześnie pozwalając na bezobsługową, automatyczną i oszczędną eksploatację systemu.Tworzymy projekty instalacji oświetleniowych, w naszej ofercie znajdują się setki opraw, urządzeń sterujących i wiele innych produktów, dzięki którym Państwa ogród stanie się niebanalny i niepowtarzalny.
                    </TextContent>
                    <Grid columns={'3'}>
                        {LightsData.map((light) => (
                            <img id={light.id} key={light.id} src={light.url} alt={light.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Oświetlenie ogrodu'}/>
            </Container>
        </StyledSection>
        <ModalImg pictures={LightsData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal} />
        <InfoNav />
        <Footer />
      
    </>
  )
}

export default Lights
