import Header from "./Header"
import Footer from "./Footer"
import InfoNav from "./InfoNav"
import Menu from "./Menu"
import Location from "./Location"
import { StyledSection, SectionTitle, TextContent, Container, Text, ParagraphTitle, Leaf, GreenRectangle, RectangleCheckP, RectangleCheck, ButtonLink, Title, Frame, TextList} from "./styles/Utils.styled"

const Contact = () => {
  return (
    <>
      <Header/>
      <Menu pageTitle="Kontakt"/>
      <Location></Location>
      <StyledSection>
        <Container direction={'column'}>
            <Title>Kontakt</Title>
            <Frame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19257.465493056716!2d16.965100381765772!3d52.89112470503965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47038ac4edfca4d1%3A0x9a3a64a9adfdd5bb!2s64-840%20Budzy%C5%84!5e0!3m2!1spl!2spl!4v1652275562178!5m2!1spl!2spl" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Frame>
            <Text>
                <ParagraphTitle>Kompleksowe rozwiązania z zakresu zagospodarowania terenów zieleni</ParagraphTitle>
                <TextList>
                    <li>Zasięg działania: Poznań, Piła, Budzyń, Chodzież, Gniezno, Szamotuły</li>
                    <li>Obszar działania: powiat poznański, pilski, chodzieski, wągrowiecki, obornicki, czarnkowsko-trzcianecki, gnieźnieński, złotowski, szamotulski.
                    </li>
                </TextList>
                <TextContent>
                Firma ogrodnicza B&K OGRODY – zakładanie ogrodów i projektowanie ogrodów Poznań, Piła, Wielkopolska. Pielęgnacja zieleni, urządzanie ogrodów i budowa terenów zieleni to filary działalności. Systemy nawadniające gwarantują optymalne nawadnianie ogrodu. Posiadamy najwyższej klasy sprzęt wielozadaniowy Anant – ładowarka, glebogryzarka, koparka wynajem. Zakładanie kratki trawnikowej, parkingi ekologiczne, urządzanie i budowa ogrodów, odwodnienia i drenaże, kratka trawnikowa i system nawadniania – serdecznie zapraszamy – system nawadniania, aranżacja zieleni i pielęgnacja ogrodów w Poznaniu i w Pile. Tereny zieleni, ogrody przydomowe – zadbaj o swój ogród przydomowy. Nasza oferta to nie tylko projektowanie i nawadnianie ogrodów (systemy nawadniania ogrodów) oraz terenów zieleni.
                </TextContent>
            </Text>
        </Container>
      </StyledSection>
      <InfoNav/>
      <Footer/>
    </>
  )
}

export default Contact
