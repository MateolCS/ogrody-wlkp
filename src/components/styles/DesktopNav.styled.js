import styled from 'styled-components'
import {FaCaretDown} from 'react-icons/fa'

export const DesktopNavStyled = styled.nav`
    color: #fff;
    width: 40%;
    position: relative;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

export const PrimaryList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;

    >li{
        &:hover{
            cursor: pointer;
            color: #000814;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: ${({show}) => show ? 'flex' : 'none'};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin: 0 auto;
        
        li{
            padding: 1rem;
            width: 100%;
            text-align: center;
        }
    }
`

export const SecondaryList = styled.ul`
    padding-top: 1rem;
    list-style: none;
    display: ${({hoverSecondList}) => hoverSecondList ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: -26.7rem;
    left: 3rem;
    background-color: #6a994e;
    z-index: 1;

    li{
        padding: 0.5rem;
        width: 10rem;
        text-align: center;
        border-bottom: 1px solid #fff;
        color: #fff;

        &:hover{
            cursor: pointer;
            color: #000814;
        }
    }



    li:nth-of-type(7){
        border-bottom: none;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        position: relative;
        bottom: 0;
        left: 0;
    }
`

export const PrimaryListItemHover = styled.li`
    display: flex;
    flex-direction: column;
    gap: .4rem;
    position: relative;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: flex;;
        flex-direction: column;
        gap: .4rem;
        text-align: center;
    }
`

export const TriangleDown = styled(FaCaretDown)`
    align-self: center;
    position: absolute;
    top: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        top: 30px;
        display: none;
    }
`

