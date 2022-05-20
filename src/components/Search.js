import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import SearchNav from "./SearchNav"

import { useParams } from "react-router-dom"
import {LocationLink, LocationP, GreaterThan} from "./styles/Location.styled"
import { Container, PageContent, PostInfo, PostLink, SearchResult, StyledSection, Title, TextContent } from "./styles/Utils.styled"
import {NewsData} from "./NewsData"

const Search = () => {

    let {searchResult} = useParams()
    console.log(searchResult)

  return (
    <>
        <Header/>
        <Menu pageTitle="Wyniki wyszukiwania"/>
        <Location>
            <LocationLink to="/">Strona główna <GreaterThan/></LocationLink>
            <LocationLink to={'/news'}>Aktualności<GreaterThan/></LocationLink>
            <LocationP>Wyniki wyszukiwania dla {searchResult}</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <PageContent gap={'2rem'}>
                    {NewsData.map((post) => (
                        post.title.toLowerCase().includes(searchResult.toLowerCase()) && 
                        <SearchResult key={post.id}>
                            <PostInfo>
                                <li>{post.date}</li>
                                <li>{post.author}</li>
                                <li><PostLink to={'/news'}>News</PostLink></li>
                                <li><PostLink to={'/news'}>0 comments</PostLink></li>
                            </PostInfo>
                            <Title>{post.title}</Title>
                            {post.description && <TextContent>{post.description}</TextContent>}
                        </SearchResult>
                    ))}
                </PageContent>
                <SearchNav/>
            </Container>
        </StyledSection>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default Search
