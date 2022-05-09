import styled from 'styled-components'
import { FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const StyledCompanyStatus = styled.div`
    width: 100%;
`

export const StyledCompanyStatusContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const CompanyStatusItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const CompanyStatusDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 400;
    line-height: 1.3;

`

export const CompanyStatusTitle = styled.h2`
    font-size: 2rem;
    border-bottom: 1px solid #ccc;
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

export const CompanyStatusDescItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ImgContainer = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`
export const GreenLeaf = styled(FaLeaf)`
    color: #6a994e;
`

export const ReadMore = styled(Link)`
    color: #6a994e;
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    width: 60%;

    &:hover {
        border-bottom: 2px solid #6a994e;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        text-align: center;
        width: 100%;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`