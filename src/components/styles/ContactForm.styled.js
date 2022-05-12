import styled from 'styled-components'
import { FaPhone } from 'react-icons/fa'
export const StyledForm = styled.form`
    display: flex;
    gap: 1rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
        width: 100%;
    }
`

export const ColumInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledInput = styled.input`
    background-color: #e9ecef;
    border: 1px solid #adb5bd;
    color: #adb5bd;
    padding: 1rem;
    margin-left: ${({mLeft}) => mLeft ? mLeft : '0'};

    &:focus{
        outline: 2px solid #495057;
    }
`

export const StyledTextarea = styled.textarea`
    background-color: #e9ecef;
    border: 1px solid #adb5bd;
    color: #adb5bd;
    padding: .5rem;
    width: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: 10rem;
    }
`

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FormInputsContainer = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`
export const Checkboxes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .3rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        gap: .6rem;
    }
`

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: .5rem;

    &:focus{
        outline: 1px solid #495057;
    }
`

export const SubmitButton = styled.input.attrs({ type: 'submit' })`
    background-color: #6a994e;
    color: #fff;
    padding: .5rem 1rem;
    border: 1px solid #6a994e;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    width: 20%;
    align-self: flex-end;

    &:focus{
        outline: 2px solid #386641;
    }

    &:hover{
        outline: 2px solid #386641;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

export const FormList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    width: 100%;
    text-align: center;
`

export const Phone = styled(FaPhone)`
    margin-right: .5rem;
`

export const AlignedLabel = styled.label`
    align-self: flex-end;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        align-self: center;
        text-align: center;
    }
`

export const CenteredParagraph = styled.p`
    align-self: center;
`
