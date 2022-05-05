import {StyledHeader, HeaderContainer, HeaderContent, HeaderA} from './styles/Header.styled'
import {FaHome, FaFacebook, FaYoutube, FaPhone} from 'react-icons/fa'


const Header = () => {
  return (
    <StyledHeader>
        <HeaderContainer>
            <h1> B&G Ogrody i Systemy Nawadniania</h1>
            <HeaderContent>
                <h2>
                    <FaHome/>
                    Budzyń woj. wielkopolskie
                </h2>
                <h2>
                    <FaPhone/>
                    604-342-038
                </h2>
                <h2>
                    <HeaderA src="https://facebook.com"><FaFacebook/></HeaderA>
                    <HeaderA src="https://youutube.com"><FaYoutube/></HeaderA>
                </h2>
            </HeaderContent>
        </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
