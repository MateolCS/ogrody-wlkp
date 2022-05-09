import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ServicesPreviewStyled = styled.section`
    width: 100%;
`

export const ServicesContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ServicesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
`

export const ServicesSectionTitle = styled.h2`
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

export const ServicesSectionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-top: 1rem;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const More = styled(Link)`
    color: #6a994e;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;

    
`

export const ServicesGridItemTitle = styled(Link)`
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
`

export const ServicesGridItem = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    gap: 1rem;
`

export const ServicesGridItemTextarea = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4rem;
`