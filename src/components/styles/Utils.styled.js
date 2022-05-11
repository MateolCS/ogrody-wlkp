import styled from "styled-components"
import { FaLeaf, FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"

export const StyledSection = styled.section`
    width: 100%;
    background-color: ${({bgColor}) => bgColor ? bgColor : '#fff'};
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: ${({gap}) => gap ? gap : '1rem'};
    padding: 2rem 0;

    img{
        max-width: 40rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }

`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
`

export const TextContent = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`

export const ParagraphTitle = styled.h4`
    font-size: 1.5rem;
`

export const GreenRectangle = styled.div`
    padding: 2rem;
    background-color: #6a994e;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: left;
    justify-content: center;
`

export const Leaf = styled(FaLeaf)`
    color: #6a994e;
    margin-right: .5rem;
`

export const RectangleCheckP = styled.p`
    color: #fff;
    font-size: 1.1rem;
`

export const RectangleCheck = styled(FaCheck)`
    margin-right: 1rem;
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    color: ${({txtColor}) => txtColor};
    background-color: ${({bgColor}) => bgColor};
    padding: 1rem;
`