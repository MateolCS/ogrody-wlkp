import styled from 'styled-components'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
export const StyledMenu = styled.nav`
    background: url(${({ background }) => background}) no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledMenuTop = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #fff;

    

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        background-color: #6a994e;
        border-top: 2px solid #fff;
    }
`

export const StyledMenuBottom = styled.div`
    padding: 10rem 0;
    position: relative;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledMenuBottomTitle = styled.h1`
    color: #fff;
    font-size: 3rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`

export const StyledMenuBottomLink = styled(Link)`
    color: ${({txtColor}) => txtColor};
    background-color: ${({bgColor}) => bgColor};
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        padding: .5rem 1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: .7rem;
        padding-bottom: 10rem;
    }
`

export const LeftArrow = styled(BsFillArrowLeftSquareFill)`
    position: absolute;
    left: 2rem;
    color: #fff;
    font-size: 3rem;

    &:hover{
        cursor: pointer;
    }
`

export const RightArrow = styled(BsFillArrowRightSquareFill)`
    position: absolute;
    right: 2rem;
    color: #fff;
    font-size: 3rem;

    &:hover{
        cursor: pointer;
    }
`

export const HamburgerIcon = styled(FaBars)`
    font-size: 3.5rem;
    display: none;
    color: #fff;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: block;
        align-self: center;
        width: 10rem;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 6rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        img{
            padding-left: 1rem;
        }
    }
`
