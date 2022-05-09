import {RealizationsPreviewItemStyled, RealizationLink, RealizationTitle } from './styles/RealizationsPreview.styled'
import { FaLink } from 'react-icons/fa'
import { useState } from 'react'
const RealizationsPreviewItem = ({realizations}) => {

    const [hover, setHover] = useState('none')

    const handleMouseEnter = () => {
        setHover('block')
    }

    const handleMouseLeave = () => {
        setHover('none')
    }

  return (
    <RealizationsPreviewItemStyled bg={realizations.imgUrl} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <RealizationLink hover={hover} to={realizations.path}><FaLink/></RealizationLink>
        <RealizationTitle hover={hover} >{realizations.title}</RealizationTitle>
    </RealizationsPreviewItemStyled>
  )
}

export default RealizationsPreviewItem
