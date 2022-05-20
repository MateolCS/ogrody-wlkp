import {Title, SearchNavStyled, SearchNavInputBox, SearchButton, TextList, PrivacyLink} from './styles/Utils.styled'

import { useState } from 'react'

const SearchNav = () => {

    const [search, setSearch] = useState('')

    const GetSearchValue = (e) => {
        e.preventDefault()
        console.log(search)
        setSearch('')
    }

  return (
    <SearchNavStyled>
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
    </SearchNavStyled>
  )
}

export default SearchNav
