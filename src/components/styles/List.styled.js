import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-size: 1.4rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #1d3557;
    }

    img{
        height: 10rem;
        margin: 0 auto;
    }

    p{
        text-align: center;
        color: #4a4e69;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #979dac;
    font-weight: 600;
    font-size: .9rem;

    &:hover{
        color: #5c677d;
        border-bottom: 2px solid #5c677d;
    }
`

export const ContactLink = styled.a`
    color: #6a994e;
    text-decoration: none;
    margin-left: .4rem;
`

export const GreenLi = styled.li`
    color: #6a994e;
    font-size: 1.5rem;
`