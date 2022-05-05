import {StyledHeader, HeaderContainer, HeaderContent} from './styles/Header.styled'
import {FaHome, FaFacebook, FaYoutube, FaPhone} from 'react-icons/fa'


const Header = () => {
  return (
    <StyledHeader>
        <HeaderContainer>
            <h1>B&K Ogrody i Systemy Nawadniania</h1>
            <HeaderContent>
                <h1>
                    <FaHome/>
                    Budzyń woj. wielkopolskie
                </h1>
                <h1>
                    <FaPhone/>
                    604-342-038
                </h1>
                <h1>
                    <FaFacebook/>
                    <FaYoutube/>
                </h1>
            </HeaderContent>
        </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
