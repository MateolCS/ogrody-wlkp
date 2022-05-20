import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import Footer from './Footer'

import { LocationLink, LocationP, GreaterThan } from './styles/Location.styled'
import {Container, Content, Grid, PageContent, PageContentContainer, RealizationInfo, StyledSection, Title, UserIcon, CategoryIcon, ButtonArea, PageSwap, TriangleLeft, TriangleRight} from './styles/Utils.styled'
import {RealizationsSubpageData} from './RealizationsSubpageData'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Realization = () => {


    let { id } = useParams()

    const [realization, setRealization] = useState(RealizationsSubpageData[id])
    const photos = realization.photos

    useEffect(() => {
        updateRealization()
    })

    const updateRealization = () => {
        setRealization(RealizationsSubpageData[id])
    }


  return (
    <>
        <Header />
        <Menu pageTitle={RealizationsSubpageData[id].title}/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/realizations'}>Realizacje <GreaterThan/></LocationLink>
            <LocationP>{RealizationsSubpageData[id].title}</LocationP>
        </Location>
        <StyledSection>
            <Container> 
                <PageContent>
                    <Title>{RealizationsSubpageData[id].title}</Title>
                    <PageContentContainer>
                        <Content>
                            <RealizationInfo>
                                {RealizationsSubpageData[id].investor && <h3><UserIcon/> Inwestor: {RealizationsSubpageData[id].investor}</h3>}
                                <h3><CategoryIcon/>{RealizationsSubpageData[id].category}</h3>
                            </RealizationInfo>
                            {RealizationsSubpageData[id].description.length !== 0 && 
                            <p>{RealizationsSubpageData[id].description.text}</p>
                            }
                            <ButtonArea>
                                {id !== '0' && <PageSwap to={`/realizations/${id-1}`}><TriangleLeft/> Poprzednia strona</PageSwap>}
                                {id !== RealizationsSubpageData.length && <PageSwap to={`/realizations/${Number(id)+1}`}>Następna strona <TriangleRight/></PageSwap>}
                            </ButtonArea>
                        </Content>
                        {photos.length !== 0 && 
                            <Grid columns={1}>
                                {photos.map((photo) => (
                                    <img key={photo.id} src={photo} alt={photo.title}/>
                                ))}
                            </Grid>
                        }
                    </PageContentContainer>
                    
                </PageContent>
                
            </Container>
        </StyledSection>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default Realization
