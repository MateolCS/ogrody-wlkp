import styled from 'styled-components'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const AdStyled = styled.section`
    width: 100%;
`

export const AdContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    text-align: center;
`

export const AdTitleContainer = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }

`

export const AdTitle = styled.h2`
    color: ${({txtColor}) => txtColor};
`

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;

        img{
            width: 100%;
        }
    }
`

export const GreenRectangle = styled.div`
    padding: 0 3rem;
    background-color: #6a994e;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;

    h3{
        font-size: 1.3rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        padding: 2rem 2.5rem;

    }
`

export const Check = styled(FaCheck)`
    padding-right: .5rem;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    background-color: #fff;
    color: #6a994e;
    padding: .5rem 1rem;
`