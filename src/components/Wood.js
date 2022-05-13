import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import { LocationLink, LocationP, GreaterThan } from './styles/Location.styled'
import InfoNav from './InfoNav'
import Footer from './Footer'
import { StyledSection, Title, Container, MainImg, PageContent, TextContent, SideNav, SideNavList, SideNavListItem, CurrenSideNavListItem, SideLink } from './styles/Utils.styled'
import woodImg from '././../assets/wood.jpg'
import { Services } from './ServicesPreviewData'

const Wood = () => {
  return (
    <>
      <Header/>
      <Menu pageTitle="Drewno kominkowe"/>
      <Location>
        <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
        <LocationLink to={'/gardening-services'}>Usługi ogrodnicze <GreaterThan/></LocationLink>
        <LocationP>Drewno kominkowe</LocationP>
      </Location>
      <StyledSection>
          <Container direction={'row'}>
              <PageContent>
                <Title>Drewno kominkowe</Title>
                <MainImg src={woodImg} alt="Drewno kominkowe"/>
                <TextContent>
                Oferujemy drewno kominkowe na sprzedaż. Jeśli chcesz kupic dobrej jakości drewno do kominka to skontaktuj się z nami i sprawdź naszą ofertę na drewno do kominka.
                </TextContent>
              </PageContent>
              <SideNav>
                    <SideNavList>
                        {Services.map((service) => (
                            service.title === 'Drewno kominkowe' ? (
                                <CurrenSideNavListItem key={service.id}>
                                    <SideLink to={service.path}>{service.title}</SideLink>
                                </CurrenSideNavListItem>
                            ) : (
                                <SideNavListItem key={service.id}>
                                    <SideLink to={service.path}>{service.title}</SideLink>
                                </SideNavListItem>
                            )
                        ))}
                    </SideNavList>
                </SideNav>
          </Container>
      </StyledSection>
      <InfoNav/>
      <Footer/>
    </>
  )
}

export default Wood
