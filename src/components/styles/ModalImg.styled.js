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
    width: 80rem;
    height: 60rem;
    margin: 0 auto;
    position: relative;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: auto;
        height: auto;
    }
`

export const Img = styled.img`
    display: block;
    width: 80%;
    height: 60%;
    margin: 10rem auto;
    border: 3px solid #fff;
`

export const LeftArrow = styled(FaArrowLeft)`
    position: absolute;
    top: 25%;
    left: 0;
    color: #fff;
    font-size: 4rem;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 2rem;
        top: 40%;
        left: 3rem;
    }
`

export const RightArrow = styled(FaArrowRight)`
    position: absolute;
    top: 25%;
    right: 0;
    color: #fff;
    font-size: 4rem;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 2rem;
        top: 40%;
        right: 3rem;
    }
`

export const Close = styled(FaWindowClose)`
    position: absolute;
    top: -2rem;
    right: 5rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
        top: .3rem;
        right: 3.1rem;
    }
`


