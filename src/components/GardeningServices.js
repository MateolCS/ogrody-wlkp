import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import { LocationLink, GreaterThan, LocationP } from './styles/Location.styled'
import { StyledSection, TextContent, Container, Text, ParagraphTitle, Title, Grid ,GridItem, ReadMore, TitleLink} from './styles/Utils.styled'
import {Services} from './ServicesPreviewData'

const GardeningServices = () => {

    
  return (
    <>
      <Header/>
      <Menu pageTitle="Usługi ogrodnicze"/>
      <Location>
        <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
        <LocationP>Usługi ogrodnicze</LocationP>
      </Location>
      <StyledSection>
          <Container direction={'column'}>
              <Title>Kompleksowe usługi ogrodnicze</Title>
              <TextContent>
              Świadczymy kompleksowe usługi ogrodnicze od projektowania ogordów przez ich budowę, aż po pielęgnację ogrodów i terenów zielonych. Projektujemy ogrody dopasowane do indywidualnych potrzeb i oczekiwań naszych Klientów. Nie obawiamy się wyzwań, dlatego projektujemy i budujemy zarówno małe ogrody, jak i duże tereny zielone takie jak parki miejskie czy cała infrastruktura zielona w przestrzeni miejskiej. Projektujemy, montujemy i serwisujemy automatyczne systemy nawadniania. Wykonujemy odwodnienia i drenaże, zakładamy trawniki z rolki jak i sadzone. Projektujemy i instalujemy systemy oświetlenia ogrodowego. Usługi kierujemy zarówno do klientów indywidualnych jak i firm oraz różnego rodzaju instytucji.
              </TextContent>
                <Grid columns={'3'}>
                    {Services.map(service => (
                        <GridItem key={service.id}>
                            <img src={service.imgUrl} alt={service.title}/>
                            <TitleLink to={service.path}>{service.title}</TitleLink>
                            <TextContent>{service.desc}</TextContent>
                            <ReadMore to={service.path}>Więcej</ReadMore>
                        </GridItem>
                    ))}
                </Grid>
          </Container>
      </StyledSection>
      <InfoNav/>
      <Footer/>
    </>
  )
}

export default GardeningServices
