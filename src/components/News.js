import Header from './Header'
import Menu from './Menu'
import Location from './Location'
import InfoNav from './InfoNav'
import Footer from './Footer'
import news1 from '././../assets/news/news1.jpg'

import { LocationLink, LocationP, GreaterThan } from './styles/Location.styled'
import {Container, MainImg, PageContent, StyledSection, Title, SearchNav, SearchNavInputBox, SearchButton, TextList, PrivacyLink, PostInfo, PostLink, TextContent, Grid, Comments, CommentsInfo} from './styles/Utils.styled'
import { useState } from 'react'
import { GrassData } from './GrassData'

const News = () => {

    const [search, setSearch] = useState('')

    const GetSearchValue = (e) => {
        e.preventDefault()
        console.log(search)
        setSearch('')
    }

  return (
    <>
        <Header />
        <Menu pageTitle={'Aktualności'}/>
        <Location>
            <LocationLink to={'/'}>Ogrody-Wlkp<GreaterThan/></LocationLink>
            <LocationP>Aktualności</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent>
                    <MainImg src={news1}/>
                    <PostInfo>
                        <li>13 marca 2019</li>
                        <li>By juzzer</li>
                        <li><PostLink to={'/news'}>News</PostLink></li>
                        <li><PostLink to={'/news'}>0 comments</PostLink></li>
                    </PostInfo>
                    <Title>Trawnik w jeden dzień</Title>
                    <TextContent>
                        Czy można założyć ogród w jeden dzień? Udowadniamy, że jest to możliwe.
                    </TextContent>
                    <Grid columns={'3'}>
                        {GrassData.map((item) => (
                            <img key={item.id} src={item.img} alt={item.id}/>
                        ))}
                    </Grid>
                    <Comments>
                        <CommentsInfo>Comments for this post are closed</CommentsInfo>
                    </Comments>
                </PageContent>
                <SearchNav>
                    <SearchNavInputBox>
                    <input type="text" placeholder="Szukaj..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <SearchButton onClick={GetSearchValue}>Szukaj</SearchButton>
                    </SearchNavInputBox>
                    <Title fSize={'1.5rem'}>Ostatnie wpisy</Title>
                    <TextList>
                        <li><PrivacyLink to={'/news'}>Trawnik w jeden dzień</PrivacyLink></li>
                    </TextList>
                    <Title fSize={'1.5rem'}>Kategorie</Title>
                    <TextList>
                        <li><PrivacyLink to={'/news'}>News</PrivacyLink></li>
                    </TextList>
                </SearchNav>
            </Container>
        </StyledSection>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default News
