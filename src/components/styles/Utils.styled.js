import styled from "styled-components"
import { FaLeaf, FaCheck, FaUser, FaCaretLeft, FaCaretRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import {AiOutlineBars} from "react-icons/ai"

export const StyledSection = styled.section`
    width: 100%;
    background-color: ${({bgColor}) => bgColor ? bgColor : '#fff'};
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: ${({gap}) => gap ? gap : '1rem'};
    padding: 2rem 0;
    flex-direction: ${({direction}) => direction ? direction : 'row'};

    img{
        max-width: 40rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-direction: ${({mobileDirection}) => mobileDirection ? mobileDirection : 'column'};
    }

`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
`

export const TextContent = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`

export const ParagraphTitle = styled.h4`
    font-size: 1.5rem;
`

export const GreenRectangle = styled.div`
    padding: 2rem;
    background-color: #6a994e;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: left;
    justify-content: center;
`

export const Leaf = styled(FaLeaf)`
    color: #6a994e;
    margin-right: .5rem;
`

export const RectangleCheckP = styled.p`
    color: #fff;
    font-size: 1.1rem;
`

export const RectangleCheck = styled(FaCheck)`
    margin-right: 1rem;
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    color: ${({txtColor}) => txtColor};
    background-color: ${({bgColor}) => bgColor};
    padding: 1rem;
`

export const Title = styled.h2`
    font-size: 2rem;
    border-bottom: 1px solid #ccc;
    position: relative;
    padding-bottom: .7rem;

    ::before {
        content: '';
        position: absolute;
        bottom: -1px;
        width: 30px;
        border-bottom: 4px solid #6a994e;
    }
`

export const Frame = styled.iframe`
    width: 100%;
    height: 30rem;
    border: 2px solid #ccc;
`

export const TextList = styled.ul`
    margin-left: 2rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${({columns}) => columns}, 1fr);
    gap: 1rem;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }

    img{
        cursor: pointer;
    }
`

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ReadMore = styled(Link)`
    color: #6a994e;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
`

export const TitleLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2rem;
`

export const SideNavStyled = styled.nav`
    width: 40%;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`

export const SideNavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .3rem;
`

export const SideNavListItem = styled.li`
    background-color: #ccc;
    color: #595959;
    padding: .5rem 1rem;

    a{
        color: #595959;
    }

    &:hover {
        background-color: #6a994e;
        
        a{
            color: #fff;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        padding: 1rem 2rem;
    }
`

export const CurrenSideNavListItem = styled.li`
    background-color: #6a994e;
    color: #fff;
    padding: .5rem 1rem;

    a{
        color: #fff;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        padding: 1rem 2rem;
    }
`

export const SideLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;

`

export const PageContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const PageContentContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 4rem
`

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const MainImg = styled.img`
    width: 100%;
    margin-bottom: 1rem;
    align-self: center;
`

export const TextListOrd = styled.ol`
    margin-left: ${({mLeft}) => mLeft ? mLeft : '2rem'};
    margin-bottom: ${({mrgBot}) => mrgBot};

    >li{
        padding-bottom: ${({paddingBot}) => paddingBot ? paddingBot : ''};
    }
`

export const TextListAlf = styled.ul`
    list-style: lower-latin;
`

export const PrivacyLink = styled.a`
    text-decoration: none;
    color: #6a994e;
`

export const UserIcon = styled(FaUser)`
    color: #000;
    margin-right: .5rem;
    color: #495057;
`

export const CategoryIcon = styled(AiOutlineBars)`
    color: #000;
    margin-right: .5rem;
    color: #495057;
    font-weight: bold;
`

export const PageSwap = styled(Link)`
    text-decoration: none;
    background-color: #e9ecef;
    color: #495057;
    padding: .5rem 1rem;
`

export const TriangleRight = styled(FaCaretRight)`
    color: #495057;
    margin-left: .2rem;
`

export const TriangleLeft = styled(FaCaretLeft)`
    color: #495057;
    margin-right: .2rem;
`

export const RealizationInfo = styled.div`
    background-color: #e9ecef;
    color: #495057;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`
export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

