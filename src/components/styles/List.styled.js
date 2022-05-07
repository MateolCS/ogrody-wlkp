import styled from 'styled-components'

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-size: 1.4rem;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        a{
            text-decoration: none;
            color: #979dac;
            font-weight: 600;
            font-size: .9rem
        }

        a:hover{
            color: #5c677d;
            border-bottom: 2px solid #5c677d;
        }
    }

    
`