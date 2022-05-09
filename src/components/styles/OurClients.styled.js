import styled from 'styled-components'

export const OurClientsStyled = styled.div`
    width: 100%;
    font-size: 1rem;
`

export const OurClientsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        padding: 1rem;
    }
`

export const OurClientsGallery = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const GalleryTitle = styled.h2`
    border-bottom: 2px solid #ccc;
    font-size: 2rem;
    padding-bottom: .3rem;
`

export const GalleryPhotos = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
`

export const GalleryPhoto = styled.img`
    border: 2px solid #e5e5e5;

    &:hover {
        cursor: pointer;
        border: 2px solid #6a994e;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 95%;
    }
`

export const GalleryDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-size: 2rem;
    }

    p{
        font-weight: 400;
        color: #6c757d;
        line-height: 1.5;
    }
`