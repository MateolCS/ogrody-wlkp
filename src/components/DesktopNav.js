import { DesktopNavStyled, PrimaryList, SecondaryList, PrimaryListItemHover, TriangleDown} from './styles/DesktopNav.styled'
import { useState, useContext } from 'react'
import { MenuContext } from './Menu'

const DesktopNav = () => {

    const [hoverSecondList, setHoverSecondList] = useState(false)

    const toggleMenu = useContext(MenuContext)

    const toggleSecondList =() => {
        setHoverSecondList(!hoverSecondList)
        console.log(hoverSecondList)
    }

  return (
    <DesktopNavStyled>
      <PrimaryList show={toggleMenu}>
          <li>Home</li>
          <li>O Firmie</li>
          <PrimaryListItemHover onClick={toggleSecondList}>Oferta <TriangleDown/>
            <SecondaryList hoverSecondList={hoverSecondList} >
                <li>Produkty</li>
                <li>Produkty</li>
                <li>Produkty</li>
                <li>Produkty</li>
                <li>Produkty</li>
                <li>Produkty</li>
                <li>Produkty</li>
            </SecondaryList>
          </PrimaryListItemHover>
          <li>Realizacje</li>
          <li>Aktualności</li>
          <li>Kontakt</li>
      </PrimaryList>
    </DesktopNavStyled>
  )
}

export default DesktopNav
