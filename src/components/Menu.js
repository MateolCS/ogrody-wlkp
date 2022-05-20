import { StyledMenu, StyledMenuTop, StyledMenuBottom, StyledMenuBottomTitle, StyledMenuBottomLink, ButtonContainer, LeftArrow, RightArrow, MenuContainer, HamburgerIcon, StyledMenuSubtitle } from "./styles/Menu.styled"
import logo from "././../assets/logo.png"
import DesktopNav from "./DesktopNav"
import React, { useState} from "react"
import bg1 from "././../assets/bg1.jpg"
import bg2 from "././../assets/bg2.jpg"
import bg3 from "././../assets/bg3.jpg"
import standardBg from "././../assets/standardbg.jpg"
import { useLocation } from "react-router-dom"


export const MenuContext = React.createContext()


const Menu = ({pageTitle}) => {

    const location = useLocation()

    const [displayMenu, setDisplayMenu] = useState(false)
    const [background, setBackground] = useState(0)
    const backgroundVariants = [
        {
            background: bg1,
            title: "Projektowanie ogrodów",
            path: "/projects"
        },
        {
            background: bg2,
            title: "Zakładanie ogrodów",
            path: "/get-started"
        },
        {
            background: bg3,
            title: "Pielęgnacja ogrodów",
            path: "/gardens"
        }
    ]

    const changeBackgroundForward = () => {
        if (background === backgroundVariants.length - 1) {
            setBackground(0)
        } else {
            setBackground(background + 1)
        }
    }

    const changeBackgroundBackward = () => {
        if (background === 0) {
            setBackground(backgroundVariants.length - 1)
        } else {
            setBackground(background - 1)
        }
    }

    const showMenu = () => {
        setDisplayMenu(!displayMenu)
        console.log(displayMenu)
    }


  return (
    <StyledMenu background={location.pathname === '/' ? backgroundVariants[background].background : standardBg}>
      <StyledMenuTop>
        <MenuContext.Provider value={displayMenu}>
            <MenuContainer>
                <img src={logo} alt="logo" />
                <HamburgerIcon onClick={showMenu}/>
            </MenuContainer>
            <DesktopNav/>
        </MenuContext.Provider>
      </StyledMenuTop>
      <StyledMenuBottom>
            <StyledMenuBottomTitle>{location.pathname === '/' ? backgroundVariants[background].title : pageTitle}</StyledMenuBottomTitle>
            {location.pathname === '/' ?
                <>
                <ButtonContainer>
                    <StyledMenuBottomLink txtColor='green' bgColor='#fff' to={`${backgroundVariants[background].path}`} >Zobacz więcej</StyledMenuBottomLink>
                    <StyledMenuBottomLink txtColor='#fff' bgColor='green' to={'/contact'} >Kontakt</StyledMenuBottomLink>
                </ButtonContainer>
                <LeftArrow onClick={changeBackgroundBackward}/>
                <RightArrow onClick={changeBackgroundForward}/>
                </>
                :
                <StyledMenuSubtitle>{location.pathname === '/news' ? 'Wydarzenia,Nowości,Aktualności' : 'Firma Ogrodnicza B&K Ogrody i Systemy Nawadaniania'}</StyledMenuSubtitle>
            }
        </StyledMenuBottom>
    </StyledMenu>
  )
}

export default Menu
