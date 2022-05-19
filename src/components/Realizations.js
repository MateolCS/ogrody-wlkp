import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import Footer from './Footer'
import RealizationsGridItem from './RealizationsGridItem'

import {LocationLink, LocationP, GreaterThan} from './styles/Location.styled'
import {Container, StyledSection, Title, Grid} from './styles/Utils.styled'
import {RealizationsSubpageData} from './RealizationsSubpageData'


const Realizations = () => {
  return (
    <>
        <Header />
        <Menu pageTitle={'Realizacje'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna<GreaterThan/></LocationLink>
            <LocationP>Realizacje</LocationP>
        </Location>
        <StyledSection>
            <Container direction={'column'}>
                <Title>Realizacje</Title>
                <Grid columns={'4'}>
                {RealizationsSubpageData.map((item) => (
                    <RealizationsGridItem item={item} key={item.id}/>
                ))}
            </Grid>
            </Container>
            
        </StyledSection>
        <InfoNav />
        <Footer />
    </>
  )
}

export default Realizations
