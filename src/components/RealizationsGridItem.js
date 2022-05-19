import {RealizationsPreviewItemStyled, RealizationLink, RealizationTitle } from './styles/RealizationsPreview.styled'
import { FaLink } from 'react-icons/fa'
import { useState } from 'react'
const RealizationsGridItem = ({item}) => {
  console.log(item)

    const [hover, setHover] = useState('none')

    const handleMouseEnter = () => {
        setHover('block')
    }

    const handleMouseLeave = () => {
        setHover('none')
    }

  return (
    <RealizationsPreviewItemStyled bg={item.imgUrl} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <RealizationLink hover={hover} to={`/realizations/${item.id}`}><FaLink/></RealizationLink>
        <RealizationTitle hover={hover} >{item.title}</RealizationTitle>
    </RealizationsPreviewItemStyled>
  )
}

export default RealizationsGridItem
