import { StyledModalImg, LeftArrow, RightArrow, StyledModalImgContainer, Img, Close } from "./styles/ModalImg.styled"

const ModalImg = ({imgUrl}) => {
  return (
    <StyledModalImg>
      <StyledModalImgContainer>
        <Close/>
        <Img src={imgUrl} alt="modal img" />
        <LeftArrow />
        <RightArrow />
      </StyledModalImgContainer>
    </StyledModalImg>
  )
}

export default ModalImg
