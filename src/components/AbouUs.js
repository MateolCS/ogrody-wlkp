import Header from "./Header"
import Footer from "./Footer"
import InfoNav from "./InfoNav"
import Menu from "./Menu"
import Stripe from "./Stripe"
import Location from "./Location"
import { LocationLink, GreaterThan, LocationP } from "./styles/Location.styled"
import { Check, StripeContainer, StripeTxt, StripeContainerDesc, StripeContainerTitle } from "./styles/AboutUs.styled"
import { StyledSection, SectionTitle, TextContent, Container, Text, ParagraphTitle, Leaf, GreenRectangle, RectangleCheckP, RectangleCheck, ButtonLink} from "./styles/Utils.styled"
import aboutusImg  from '././../assets/aboutuscontent1.jpg'

const AbouUs = () => {

  return (
    <>
        <Header />
        <Menu pageTitle="O firmie"/>
        <Location>
            <LocationLink to="/">Ogrody-wlkp <GreaterThan/></LocationLink>
            <LocationP>O firmie</LocationP>
        </Location>
        <StyledSection>
            <Container>
                <Text>
                    <Text>
                        <ParagraphTitle>Wykonawca twojego ogrodu</ParagraphTitle>
                        <TextContent>
                        B&K to zespół młodych, energicznych ludzi, których pasje na co dzień spełniają się w realizacji projektów ogrodów oraz terenów zieleni. Działalność prowadzimy od 1999 roku. Dzięki połączeniu zamiłowania, wiedzy teoretycznej oraz praktycznej gwarantujemy profesjonalizm, wszechstronność i konkurencyjne ceny.
                        </TextContent>
                    </Text>
                    <Text>
                        <ParagraphTitle>Specjalizacja</ParagraphTitle>
                        <TextContent>
                        Specjalizacja naszej firmy to: projektowanie ogrodów, zakładanie ogrodów oraz ich pielęgnacja. Proponujemy odważne rozwiązania w kwestii szeroko pojętego kształtowania krajobrazu. Projektujemy z myślą o Państwa wygodzie oraz potrzebie przebywania w pięknym otoczeniu. Staramy się powiększyć Państwa przestrzeń życiową o komfortowe, tętniące życiem miejsce wyciszenia, relaksu oraz spotkań z najbliższymi.
                        </TextContent>
                    </Text>
                </Text>
                <img src={aboutusImg} alt="aboutusimg"/>
            </Container>
        </StyledSection>
        <Stripe justify={'space-around'} bgColor={'#f9f4f5'}>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Projektowanie ogrodów</StripeContainerTitle>
                    <StripeContainerDesc>Projektujemy zarówno małe ogrody przydomowe, jak i duze tereny zielone</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Zakładanie ogrodów</StripeContainerTitle>
                    <StripeContainerDesc>Budowa ogrodów małych, przydomowych i duzych terenów zielonych</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
            <StripeContainer>
                <Check/>
                <StripeTxt>
                    <StripeContainerTitle>Pielęgnacja ogrodów</StripeContainerTitle>
                    <StripeContainerDesc> Nawet najlepiej zaprojektowany i zbudowany ogród wymaga pielęgnacji</StripeContainerDesc>
                </StripeTxt>
            </StripeContainer>
        </Stripe>
        <StyledSection>
            <Container gap={'3rem'}>
                <GreenRectangle>
                    <SectionTitle>Projektujemy i urządzamy ogrody</SectionTitle>
                    <TextContent>
                    Tworzymy ogrody dopasowane do potrzeb i oczekiwań naszych klientów. Szczególny nacisk kładziemy na:
                    </TextContent>
                    <RectangleCheckP>
                        <RectangleCheck/>
                        Jakość
                    </RectangleCheckP>
                    <RectangleCheckP>
                        <RectangleCheck/>
                        Estetykę
                    </RectangleCheckP>
                    <RectangleCheckP>
                        <RectangleCheck/>
                        Funkcjonalność
                    </RectangleCheckP>
                    <TextContent>
                    Nasze ogrody są tak różne jak różne są oczekiwania naszych Klientów.
                    </TextContent>
                    <ButtonLink to={'/realizations'} txtColor={'#6a994e'} bgColor={'#fff'}>Zobacz nasze realizacje</ButtonLink>
                </GreenRectangle>
                <Text>
                    <SectionTitle>Ogrody i tereny zieleni kompleksowo</SectionTitle>
                    <TextContent>
                    Oferujemy usługi kompleksowe od projektu przez realizację aż po pielęgnację ogrodów. Nasze uługi ogrodnicze kierujemy zarówno do klientów indywidualnych jak i firm czy instytucji takich jak deweloperzy, adaministratorzy nieruchomości, urzędy miasta czy gminy.  
                    </TextContent>
                    <ParagraphTitle><Leaf/>Indywidualne projekty</ParagraphTitle>
                    <TextContent>
                    Stworzymy dla Ciebie indywidualny projekt ogrodu, idealnie dopasowany do Twoich potrzeb, zgodny z Twoimi oczekiwaniami i zgodnie z jego przeznaczeniem niezależnie od tego czy to ogród typowo wypoczynkowy czy rekreacyjno - wypoczynkowy.
                    </TextContent>
                    <ParagraphTitle><Leaf/>Solidne wykonanie</ParagraphTitle>
                    <TextContent>
                    Jesteśmy doświadczoną firmą, której pracownicy łączą pracę z pasją. Pasję i zamiłowanie do ogrodów widać w każdym z wykonanych przez nas ogrodów. Do każdego ogrodu podchodzimy indywidualnie. Wsyzstkie ogrody robimy tak, jakbyśmy robili je dla siebie.
                    </TextContent>
                    <ParagraphTitle><Leaf/>Profesjonalna pielegnacja</ParagraphTitle>
                    <TextContent>
                    Każdy ogród wymaga pielęgnacji od koszenia trawników, przez przycinanie i formowanie krzewów i drzew, aż po naworzenie czy zwalczanie chwastów. Ogród to miejsce szczególne, jeśli nam je powierzysz, zadbamy o to aby pozostało wyjątkowe.
                    </TextContent>
                </Text>
            </Container>
        </StyledSection>
        <InfoNav/>
        <Footer/>
    </>
  )
}

export default AbouUs
