import styled from "styled-components";

export const StyledA = styled.a`
    padding: 1rem;
    margin-left: 1rem;
    color: ${({ txtColor }) => txtColor};
    background-color: ${({ bgColor }) => bgColor};
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: .9rem;
    }
`