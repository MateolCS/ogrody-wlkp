import styled from 'styled-components'

export const StyledInfoNav = styled.div`
    background-color: #e9ecef;
    padding: 3rem;
`

export const StyledInfoNavContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`