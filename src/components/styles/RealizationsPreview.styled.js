import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const StyledRealizationsPreview = styled.section`
    width: 100%;
    background-color: #e9ecef;
`

export const RealizationsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    padding: 3rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
    }
`

export const RealizationsTitle = styled.h2`
    font-size: 2rem;
    border-bottom: 2px solid #ccc;
    position: relative;
    padding-bottom: .7rem;

    ::before {
        content: '';
        position: absolute;
        bottom: -1px;
        width: 30px;
        border-bottom: 4px solid #6a994e;
    }
`

export const RealizationsGrid = styled.div`
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
`

export const SeeMore = styled(Link)`
    color: #fff;
    background-color: #6a994e;
    padding: .6rem .7rem;
    width: 15rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    align-self: center;
    margin-top: 1rem;
    font-weight: bold;
`

export const RealizationsPreviewItemStyled = styled.div`
    background: url(${({bg}) => bg}) no-repeat center;
    height: 12rem;
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    &:hover {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) no-repeat center, url(${({bg}) => bg}) no-repeat center;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 22rem;
        height: 16rem;
    }
`

export const RealizationLink = styled(Link)`
    color: #fff;
    padding: 1rem 1.2rem;
    border-radius: 50%;
    border: 2px solid #fff;
    display: ${({hover}) => hover};
    transition: all linear .3s;
`

export const RealizationTitle = styled.h5`
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    display: ${({hover}) => hover};
    transition: all linear.3s;
`