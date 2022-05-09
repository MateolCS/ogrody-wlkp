import { StyledRealizationsPreview, RealizationsContainer, RealizationsTitle, RealizationsGrid, SeeMore, } from "./styles/RealizationsPreview.styled"
import {RealizationsData} from './RealizationsData.js'
import RealizationsPreviewItem from "./RealizationsPreviewItem"


const RealizationsPreview = () => {
  
  return (
    <StyledRealizationsPreview>
        <RealizationsContainer>
            <RealizationsTitle>Realizacje</RealizationsTitle>
            <RealizationsGrid>
                {RealizationsData.map((realization) => (
                  <RealizationsPreviewItem key={realization.id} realizations={realization}/>
                ))}
            </RealizationsGrid>
            <SeeMore to="/realizations">Zobacz wszystkie</SeeMore>
        </RealizationsContainer>
    </StyledRealizationsPreview>
  )
}

export default RealizationsPreview
