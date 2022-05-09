import { AdContainer, AdStyled, AdTitle, AdTitleContainer, ContentContainer, GreenRectangle, Check, LinkStyled } from "./styles/Ad.styled"
import sketch from '././../assets/gardensketch.jpg';



const Ad = () => {
  return (
    <AdStyled>
      <AdContainer>
        <AdTitleContainer>
            <AdTitle txtColor="#000">Projektowanie i aranzacja</AdTitle>
            <AdTitle txtColor="#6a994e">Ogrodów i terenów zielonych</AdTitle>
        </AdTitleContainer>
        <p>
            O ogrodach wiemy wszystko. Zaprojektujemy i wykonamy Twój wymarzony ogród. Mamy doświadczenie. Zaufaj nam!
        </p>
        <ContentContainer>
            <img src={sketch} alt="garden-sketch"/>
            <GreenRectangle>
                <h3>Firma ogrodnicza B&K</h3>
                <p>
                Lata doświadczeń w branży ogrodniczej, na rynku od 1999 roku. Nasze usługi ogrodnicze to przede wszystkim:
                </p>
                <p><Check/>Projektowanie Ogrodów</p>
                <p><Check/>Zakładanie Ogrodów</p>
                <p><Check/>Pielęgnacja Ogrodów</p>
                <LinkStyled to={'/gardening-services'}>Zobacz pełną ofertę</LinkStyled>
            </GreenRectangle>
        </ContentContainer>
      </AdContainer>
    </AdStyled>
  )
}

export default Ad
