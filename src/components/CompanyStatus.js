import { StyledCompanyStatus, StyledCompanyStatusContainer, CompanyStatusDesc, CompanyStatusTitle,CompanyStatusDescItem, ImgContainer, GreenLeaf, ReadMore, TextContainer} from "./styles/CompanyStatus.styled"
import grass from '././../assets/grass.jpg'
const CompanyStatus = () => {
  return (
    <StyledCompanyStatus>
      <StyledCompanyStatusContainer>
        <CompanyStatusDesc>
            <CompanyStatusTitle>Nasze Atuty</CompanyStatusTitle>
            <CompanyStatusDescItem>
              <h3> <GreenLeaf/> Kreatywne pomysły</h3>
              <p>Projektujemy ogrody z myślą o Państwa wygodzie oraz potrzebie przebywania w pięknym otoczeniu.</p>
            </CompanyStatusDescItem>
            <CompanyStatusDescItem>
              <h3><GreenLeaf/> Indywidualne podejście</h3>
              <p>Do każdego ogrodu podchodzimy indywidualnie. Wsłuchujemy się w oczekiwania klientów, dzięki czemu dobieramy optymalne dla nich rozwiązania.</p>
            </CompanyStatusDescItem>
            <CompanyStatusDescItem>
              <h3> <GreenLeaf/> Wiedza i doświadczenie</h3>
              <p>Posiadamy wiedzę teoretyczną, umiejętności praktyczne oraz pasję, które pozwalają nam nieustannie się roziwjać i podnosić jakość usług. </p>
            </CompanyStatusDescItem>
        </CompanyStatusDesc>
        <CompanyStatusDesc>
            <CompanyStatusTitle>Zmieniamy świat na zielono</CompanyStatusTitle>
            <ImgContainer>
              <img src={grass} alt="grass" />
              <TextContainer>
                <p>
                Opowiedz nam o swoim wymarzonym ogrodzie. Czym dla Ciebie jest ogród i jakie ma pełnić fuknkcje? Czego oczekujesz od ogrodu. Do czego będzie służył? Do wypoczynku, czy również do rekreacji? A może masz małe dzieci i potrzebujesz placu zabaw? Marzy Ci się taras, a może urocze oczko wodne? Odpowedz nam na kilka pytań a zaprojektujemy wymarzony ogród dla Ciebie. Jesteśmy doświadczoną firmą, która wykonała już wiele ogrodów. Z przyjemnością zbudujemy ogród dla Ciebie. Pozwól nam zmienić Twój świat na zielony!
                </p>
                <ReadMore to={'/aboutus'}>Więcej o nas</ReadMore>
              </TextContainer>
              
            </ImgContainer>
            
        </CompanyStatusDesc>
      </StyledCompanyStatusContainer>
    </StyledCompanyStatus>
  )
}

export default CompanyStatus
