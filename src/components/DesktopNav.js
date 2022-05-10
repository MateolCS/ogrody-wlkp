import { DesktopNavStyled, PrimaryList, SecondaryList, PrimaryListItemHover, TriangleDown, NavLink} from './styles/DesktopNav.styled'
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
          <li><NavLink to={'/home'}>Home</NavLink></li>
          <li><NavLink to={'/aboutus'}>O Firmie</NavLink></li>
          <PrimaryListItemHover onClick={toggleSecondList}><NavLink to={'/services'}>Oferta</NavLink> <TriangleDown/>
            <SecondaryList hoverSecondList={hoverSecondList} >
                <li><NavLink smaller to={'/projects'}>Projektowanie ogrodów</NavLink></li>
                <li><NavLink smaller to={'/get-started'}>Zakladanie ogrodów</NavLink></li>
                <li><NavLink smaller to={'/gardens'}>Pielęgnacja ogrodów</NavLink></li>
                <li><NavLink smaller to={'/hydration'}>Nawadnianie ogrodów</NavLink></li>
                <li><NavLink smaller to={'/lights'}>Oświetlenie ogrodów</NavLink></li>
                <li><NavLink smaller to={'/dihydration'}>Odwodnienia i drenaze</NavLink></li>
                <li><NavLink smaller to={'/brick'}>Nawiezchnie utwardzone</NavLink></li>
                <li><NavLink smaller to={'/multi-tool'}>Sprzęt wielozadaniowy</NavLink></li>
                <li><NavLink smaller to={'/wood'}>Drewno kominkowe</NavLink></li>
            </SecondaryList>
          </PrimaryListItemHover>
          <li><NavLink to={'/realizations'}>Realizacje</NavLink></li>
          <li><NavLink to={'/news'}>Aktualności</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </PrimaryList>
    </DesktopNavStyled>
  )
}

export default DesktopNav
