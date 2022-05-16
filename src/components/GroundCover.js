import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import SideNav from "./SideNav"
import ModalImg from "./ModalImg"
import { useState } from "react"
import faceimg from '././../assets/groundcover/groundcovermainimg.jpg'

import { LocationLink, LocationP, GreaterThan } from "./styles/Location.styled"
import { StyledSection, Container, Title, PageContent, MainImg, ParagraphTitle, TextList, TextListOrd, TextContent, Grid } from "./styles/Utils.styled"
import { GroundCoverData } from "./GroundCoverData"

const GroundCover = () => {

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
        <Menu  pageTitle={'Nawierzchnie utwardzone'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze<GreaterThan/></LocationLink>
            <LocationP>Nawierzchnie utwardzone</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <Title>Nawierzchnie utwardzone</Title>
                    <MainImg src={faceimg} alt="nawierzchnie utwardzone"/>
                    <ParagraphTitle>Budujemy</ParagraphTitle>
                    <TextList>
                        <li>Nawierzchnie brukowe</li>
                        <li>Nawierzchnie z kruszyw</li>
                        <li>Nawierzchnie z kratki trawnikowej</li>
                        <li>Nawierzchnie z podkładów kolejowych, drewna, betonu, kamienia</li>
                    </TextList>
                    <ParagraphTitle>Zapewniamy kompleksowośc usług</ParagraphTitle>
                    <TextListOrd>
                        <li>Prace geodezyjne</li>
                        <li>Niwelacje terenu</li>
                        <li>Korytowanie</li>
                        <li>Naniesienie warstwy nośnej, podbudowy</li>
                        <li>Zakładanie</li>
                        <li>Wypełnienie</li>
                    </TextListOrd>
                    <TextContent>Budujemy: podjazdy, chodniki, ścieżki, tarasy, mury oporowe, schody, parkingi...</TextContent>
                    <Grid columns={'3'}>
                        {GroundCoverData.map((item) => (
                            <img id={item.id} key={item.id} src={item.url} alt={item.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Nawierzchnie utwardzone'}/>
            </Container>
        </StyledSection>
        <InfoNav />
        <ModalImg pictures={GroundCoverData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
        <Footer />
      
    </>
  )
}

export default GroundCover
