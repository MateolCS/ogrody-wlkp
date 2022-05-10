import styled from "styled-components"
import {BsCheckCircle} from "react-icons/bs"

export const Check = styled(BsCheckCircle)`
    color: #6a994e;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        color: #d4d2d5;
    }
`

export const StripeContainer = styled.div`
    display: flex;
    gap: .7rem;
`   

export const StripeTxt = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

export const StripeContainerTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #000;
`   


export const StripeContainerDesc = styled.p`
    font-size: .7rem;
    line-height: 1.5;
    color: #000;
`
