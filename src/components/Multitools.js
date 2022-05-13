import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import InfoNav from './InfoNav'
import Location from './Location'
import SideNav from './SideNav'
import { LocationLink, GreaterThan, LocationP } from './styles/Location.styled'
import {Container, MainImg, PageContent, StyledSection, Text, TextContent, TextListOrd, Title, Grid} from './styles/Utils.styled'
import faceImg from '././../assets/multitools/multitoolsmainimg.jpg'
import {MultiToolsData} from './MultitoolsData'
import ModalImg from './ModalImg'
import { useState } from 'react'

const Multitools = () => {

    const [modalImg, setModalImg] = useState(null)
    const[displayModal, setDisplayModal] = useState(false)

    const showModal = (e) =>{
        setModalImg(Number(e.target.id))
        setDisplayModal(true)
    }

    
  return (
    <>
        <Header/>
        <Menu pageTitle="Sprzęt wielozadaniowy"/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze<GreaterThan/></LocationLink>
            <LocationP>Sprzęt wielozadaniowy</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <Title>Sprzęt wielozadaniowy</Title>
                    <MainImg src={faceImg} alt='main-img'/>
                    <Text>
                        <TextContent>
                        Gdzie duży nie może tam mały pomoże. Proponujemy Państwu wynajem wielozadaniowych, profesjonalnych maszyn Avant 635,  Avant 528 wraz z operatorem. Świadczymy usługi w zakresie:
                        </TextContent>
                        <TextListOrd>
                            <li>Wszelkiego rodzaju wykopów pod instalacje do 140cm</li>
                            <li>Niwelacja – wyrównanie terenu</li>
                            <li>Przygotowanie terenu pod chodniki, parkingi, kostkę brukową</li>
                            <li>Odśnieżanie</li>
                            <li>Wiercenie otworów pod słupy, ogrodzenia</li>
                            <li>Ładowanie materiałów o masie do 1300kg na wysokość do 2,80m</li>
                            <li>Spulchnianie gleby</li>
                            <li>wiele innych</li>
                        </TextListOrd>
                        <TextContent>
                        Sprzęt wielozadnaniowy Avant wynajem koparka, ładowarka, glebogryzarka
                        </TextContent>
                    </Text>
                    <Grid columns={'3'}>
                        {MultiToolsData.map((item) => (
                            <img id={item.id} key={item.id} src={item.url} alt={item.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Sprzęt wielozadaniowy'}/>
            </Container>    
        </StyledSection>
        <ModalImg pictures={MultiToolsData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal} />
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default Multitools
