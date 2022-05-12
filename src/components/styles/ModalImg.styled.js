import styled from 'styled-components'
import {FaArrowRight, FaArrowLeft, FaWindowClose} from 'react-icons/fa'


export const StyledModalImg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`

export const StyledModalImgContainer = styled.div`
    width: 100%;
`

export const Img = styled.img`
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin:  15rem auto;
    border: 3px solid #fff;
`

export const LeftArrow = styled(FaArrowLeft)`
    position: absolute;
    top: 50%;
    left: 0;
    color: #fff;
    font-size: 4rem;
`

export const RightArrow = styled(FaArrowRight)`
    position: absolute;
    top: 50%;
    right: 0;
    color: #fff;
    font-size: 4rem;
`

export const Close = styled(FaWindowClose)`
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #fff;
    font-size: 2rem;
`


