import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: #184e77;
    color: #fff;
`

export const FooterContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    aling-items: center;
    justify-content: space-between;
    padding: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        width: 100%;
        text-align: center;
        gap: .7rem;
        margin-bottom: 10.4rem;
    }
`

