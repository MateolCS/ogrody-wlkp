import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: #6a994e;
    color: #fff;
    padding: .7rem 0;
    font-size: .7rem;
`

export const HeaderContainer = styled.div`
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        width: 100%;
        gap: .7rem;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        width: 100%;
        gap: .7rem;

        h2{
            gap: 1rem;
        }
    }
`

export const HeaderA = styled.a`
    color: #fff;
    font-size: 2rem;

    &:hover {
        color: #2c6e49;
    }
`


