import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import SideNav from './SideNav'
import Footer from './Footer'
import ModalImg from './ModalImg'
import faceimg from '././../assets/projects/projectsmainimg.jpg'

import { LocationLink, GreaterThan, LocationP } from './styles/Location.styled'
import { StyledSection, Container, PageContent, Title, MainImg, TextContent, Grid } from './styles/Utils.styled'
import {ProjectsData} from './ProjectsData'
import { useState } from 'react'

const Projects = () => {

    const [modalImg, setModalImg] = useState(null)
    const[displayModal, setDisplayModal] = useState(false)

    const showModal = (e) =>{
        setModalImg(Number(e.target.id))
        setDisplayModal(true)
    }

  return (
    <>
        <Header />
        <Menu pageTitle={'Projektowanie ogrodów'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze <GreaterThan/></LocationLink>
            <LocationP>Projektowanie ogrodów</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <Title>Projektowanie ogrodów</Title>
                    <MainImg src={faceimg} alt='projektowanie ogrodów'/>
                    <TextContent>
                    Wykonujemy indywidualne projekty wszelkich terenów zieleni, włączając w to ich infrastrukturę, czyli ogrodzenia, tarasy, murki, ścieżki, altany, place zabaw, miejsca do grillowania, oczka wodne, skwery, elementy małej architektury ogrodowej, a także systemy nawadniania.
                    </TextContent>
                    <TextContent>
                    Jako profesjonalna firma ogrodnicza jesteśmy w stanie zaprojektować zarówno mały ogród przydomowy jak i duże, miejskie tereny zieleni. Wszystkich zainteresowancyh naszą ofertą zapraszamy do kontaktu z nami – zakładanie ogrodów i projektowanie ogrodów Poznań, Piła, Budzyń, Wielkopolskie i okolice.
                    </TextContent>
                    <Grid columns={'3'}>
                        {ProjectsData.map((project) => (
                            <img id={project.id} key={project.id} src={project.url} alt={project.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Projektowanie ogrodów'}/>
            </Container>
        </StyledSection>
        <ModalImg pictures={ProjectsData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal} />

        <InfoNav />
        <Footer />
      
    </>
  )
}

export default Projects
