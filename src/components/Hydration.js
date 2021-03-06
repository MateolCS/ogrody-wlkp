import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import { LocationLink, LocationP, GreaterThan } from "./styles/Location.styled"
import { StyledSection, TextContent, Container, ParagraphTitle, Title, Grid, PageContent, MainImg} from "./styles/Utils.styled"
import {HydrationData} from './HydrationData'
import hydrationmainpicture from '././../assets/hydration/hydrationmainpicture.jpg'
import ModalImg from "./ModalImg"
import { useState } from "react"
import SideNav from "./SideNav"

const Hydration = () => {

    const [modalImg, setModalImg] = useState(null)
    const[displayModal, setDisplayModal] = useState(false)

    const showModal = (e) =>{
        setModalImg(Number(e.target.id))
        setDisplayModal(true)

        console.log(e.target.id)
    }

  return (
    <>
        <Header/>
        <Menu pageTitle="Nawadnianie ogrodów"/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze <GreaterThan/></LocationLink>
            <LocationP>Nawadnianie ogrodów</LocationP>
        </Location>
        <StyledSection>
            <Container direction={'row'} mobileDirection={'column-reverse'}>
                <PageContent>
                    <Title>Nawadnianie ogrodów</Title>
                    <MainImg src={hydrationmainpicture} alt="hydrationmainpicture"/>
                    <ParagraphTitle>Nawadnianie ogrodów</ParagraphTitle>
                    <TextContent>
                    Nowoczesne nawadnianie ogrodu – projektujemy oraz zakładamy systemy automatycznego nawadniania ogrodów i terenów zielonych takich jak parki miejskie, czy boiska sportowe. Projektujemy i montujemy profesjonalne systemy nawadniania ogródów zarówno w nowych obiektach, jak i obiektach już istniejących. Systemy nawadniające pozwalają na optymalny rozwój roślin w ogrodzie i zmieniają mikroklimat. Rozbijane krople wody, jonizując powietrze ujemnie, wpływając korzystnie na nasze samopoczucie, szczególnie w upalne dni, kiedy wszyscy myślimy o ochłodznie.
                    </TextContent>
                    <TextContent>
                    Aby umożliwić naszym klientom wykorzystanie alternatywnych źródeł pobierania wody oferujemy również wiercenie studni głębinowych, budowę stacji pomp oraz hydroforni. Chętnie podejmujemy wyzwania nawadniania nawet najbardziej nietypowych obszarów zieleni, takich jak obiekty sportowe, ogrody skalne, ogrody warzywne, szkółki produkcyjne roślin. Naszym Klientom zapewniamy profesjonalne, trwałe i niezawodne nawadnianie ogrodów Poznań, Piła, Chodzież, Budzyń, woj. wielkopolskie.
                    </TextContent>
                    <TextContent>
                    Nasza oferta to wysokiej jakości systemy nawadniania ogrodów. Wszystkie osoby zainteresowane naszą ofertą związaną z nawadnianiem ogrodów prosimy o kontakt. Oferujemy firmowe systemy nawadniające, na które udzielamy gwarancji. Projektujemy i zakładamy systemy nawadniania ogrodów Poznań, Piła i okolice.
                    </TextContent>
                    <ParagraphTitle>Nawadnianie ogrodów przykładowe realizacje</ParagraphTitle>
                    <Grid columns={'3'}>
                        {HydrationData.map((item) => (
                            <img id={item.id} key={item.id} src={item.url} alt={item.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Nawadnianie ogrodu'}/>
            </Container>
        </StyledSection>
        <ModalImg pictures={HydrationData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default Hydration
