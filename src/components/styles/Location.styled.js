import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
export const StyledLocation = styled.nav`
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 1rem;
    display: flex;
    align-items: center;
`

export const LocationLink = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    jusify-content: center;

    &:hover {
        font-weight: bold;
    }
`

export const LocationP = styled.p`
color: #000;
text-decoration: none;
font-size: 1rem;
`

export const  GreaterThan = styled(FaGreaterThan)`
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;
`