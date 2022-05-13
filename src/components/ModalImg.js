import { StyledModalImg, LeftArrow, RightArrow, StyledModalImgContainer, Img, Close } from "./styles/ModalImg.styled"



const ModalImg = ({imgUrl, setDisplayModal, displayModal, setModalImg, pictures}) => {

  const closeModal = () =>{
    setDisplayModal(false)
    setModalImg(null)
  }

  const nextImg = () => {
    if(imgUrl === pictures.length-1){
      setModalImg(0)
    }
    else{
      console.log('next', imgUrl)
      setModalImg(imgUrl+1)
    }
  }

  const prevImg = () => {
    if(imgUrl === 0){
      setModalImg(pictures.length-1)
    }
    else{
      setModalImg(imgUrl-1)
    }
  }
  return (
    <>
      {displayModal && (
        <StyledModalImg>
        <StyledModalImgContainer>
          <Close onClick={closeModal}/>
          <Img src={pictures[imgUrl].url} alt="modal img" />
          <LeftArrow  onClick={prevImg}/>
          <RightArrow onClick={nextImg}/>
        </StyledModalImgContainer>
      </StyledModalImg>
      )}    
    </>
    
  )
}

export default ModalImg
