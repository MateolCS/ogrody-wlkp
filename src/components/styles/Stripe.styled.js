import styled from 'styled-components'

export const StyledStripe = styled.div`
    font-size: 1.2rem;
    background-color: ${({bgColor}) => bgColor};
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: ${({justify}) => justify};
    color: #fff;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: .7rem;
        text-align: center;
        line-height: 1.5;

        div{
            width: 100%;
        }
    }

    
`