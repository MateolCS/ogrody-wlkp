import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import SearchNav from "./SearchNav"

import { useParams } from "react-router-dom"
import {LocationLink, LocationP, GreaterThan} from "./styles/Location.styled"
import { Container, PageContent, PostInfo, PostLink, SearchResult, StyledSection, Title, TextContent} from "./styles/Utils.styled"
import {NewsData} from "./NewsData"
import { useEffect, useState } from "react"

const Search = () => {

    let {searchResult} = useParams()
    const [searchKeyword, setSearchKeyword] = useState(searchResult)
    const [searchResults, setSearchResults] = useState([])

    

    useEffect(()=>{
        const getResults = () => {
            if(searchKeyword === undefined){
                setSearchResults(NewsData)
            }
            else{
                setSearchResults(NewsData.filter(item => item.title.toLowerCase().includes(searchKeyword)))
            }
        }
        
        setSearchKeyword(searchResult)
        getResults()
    }, [searchResult, searchKeyword])

    console.log(searchResults)
    

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
                    {searchResults.map((post) => (
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
