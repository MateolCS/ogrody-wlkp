import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import Footer from './Footer'
import ModalImg from './ModalImg'
import SideNav from './SideNav'
import {LocationLink, LocationP, GreaterThan} from './styles/Location.styled'
import {StyledSection, Container, Title, PageContent, MainImg, TextContent, ParagraphTitle, Grid} from './styles/Utils.styled'
import {GetStartedData} from './GetStartedData'
import faceimg from '././../assets/getstarted/getstartedmainimg.jpg'
import {useState} from 'react'


const GetStarted = () => {

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
        <Menu pageTitle={'Zakładanie ogrodów'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/gardening-services'}>Usługi ogrodnicze <GreaterThan/></LocationLink>
            <LocationP>Zakładanie ogrodów</LocationP>
        </Location>
        <StyledSection>
            <Container direction={'row'}>
                <PageContent>
                    <Title>Zakładanie ogrodów</Title>
                    <MainImg src={faceimg} alt={'Zakładanie ogrodów'}/>
                    <ParagraphTitle>Zakładanie ogrodów</ParagraphTitle>
                    <TextContent>
                    Oferujemy kompleksowe zagospodarowanie wszelkich terenów zieleni poczynając od prac ziemnych instalacyjnych, takich jak nawadnianie, odwodnienie, oświetlenie poprzez budowę zbiorników wodnych oraz małej architektury, kończąc na zakładaniu trawnika i elementach wykończeniowych.
                    </TextContent>
                    <TextContent>
                    Proponujemy odważne rozwiązania w kwestii szeroko pojętego kształtowania krajobrazu. Projektujemy z myślą o Państwa wygodzie oraz potrzebie przebywania w pięknym otoczeniu. Staramy się powiększyć Państwa przestrzeń życiową o komfortowe, tętniące życiem miejsce wyciszenia, relaksu oraz spotkań z najbliższymi.
                    </TextContent>
                    <TextContent>
                    W ramach oferty Ogrody i tereny zieleni proponujemy Państwu usługi takie jak: zakładanie ogrodów, budowa terenów zieleni, urządzanie ogrodów, aranżacja zieleni. Serdecznei zapraszamy Państwa do skorzystania z bogatej oferty naszych usług – ogrody Poznań, Piła i okolice.
                    </TextContent>
                    <ParagraphTitle>Zakładanie ogrodów przykładowe realizacje</ParagraphTitle>
                    <Grid columns={'3'}>
                    {GetStartedData.map((item) => (
                            <img id={item.id} key={item.id} src={item.url} alt={item.url} onClick={showModal}/>
                        ))}
                    </Grid>
                </PageContent>
                <SideNav currentItem={'Zakładanie ogrodów'}/>
            </Container>
        </StyledSection>
        <ModalImg pictures={GetStartedData} imgUrl={modalImg} setModalImg={setModalImg} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
        <InfoNav />
        <Footer />
    </>
  )
}

export default GetStarted
