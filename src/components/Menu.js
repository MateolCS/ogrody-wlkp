import { StyledMenu, StyledMenuTop, StyledMenuBottom, StyledMenuBottomTitle, StyledMenuBottomLink, ButtonContainer, LeftArrow, RightArrow, MenuContainer, HamburgerIcon } from "./styles/Menu.styled"
import logo from "././../assets/logo.png"
import DesktopNav from "./DesktopNav"
import React, { useState} from "react"
import bg1 from "././../assets/bg1.jpg"
import bg2 from "././../assets/bg2.jpg"
import bg3 from "././../assets/bg3.jpg"


export const MenuContext = React.createContext()


const Menu = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [background, setBackground] = useState(0)
    const backgroundVariants = [
        {
            background: bg1,
            title: "Projektowanie ogrodow",
            path: "/projects"
        },
        {
            background: bg2,
            title: "Zakładanie ogrodow",
            path: "/get-started"
        },
        {
            background: bg3,
            title: "Pielęgnacja ogrodow",
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
    <StyledMenu background={backgroundVariants[background].background}>
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
            <StyledMenuBottomTitle>{backgroundVariants[background].title}</StyledMenuBottomTitle>
            <ButtonContainer>
                <StyledMenuBottomLink txtColor='green' bgColor='#fff' to={`${backgroundVariants[background].path}`} >Zobacz więcej</StyledMenuBottomLink>
                <StyledMenuBottomLink txtColor='#fff' bgColor='green' to={'/contact'} >Kontakt</StyledMenuBottomLink>
            </ButtonContainer>
            <LeftArrow onClick={changeBackgroundBackward}/>
            <RightArrow onClick={changeBackgroundForward}/>
        </StyledMenuBottom>
    </StyledMenu>
  )
}

export default Menu
