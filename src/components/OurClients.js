import { OurClientsStyled, OurClientsContainer } from "./styles/OurClients.styled"
import { OurClientsGallery, GalleryTitle, GalleryPhotos, GalleryPhoto, GalleryDescription } from "./styles/OurClients.styled"
import { OurClientsData } from "./OurClientsData"
const OurClients = () => {
  return (
    <OurClientsStyled>
      <OurClientsContainer>
        <OurClientsGallery>
            <GalleryTitle>Nasi Klienci</GalleryTitle>
            <GalleryPhotos>
                {OurClientsData.map((client, index) =>(
                    <GalleryPhoto key={index} src={client} alt="client" />
                ))}
            </GalleryPhotos>
            <GalleryDescription>
                <h3>Ogrody Poznań, Piła, Budzyń i okolice</h3>
                <p>
                    Frima ogrodnicza B&K Ogrody i Systemy Poznań, Piła, Budzyń i okolice. Jesteśmy profesjonalną firmą ogrodniczą działającą przede wszystkim w województwie Wielkopolskim. Działamy głównie w takich miastach jak Poznań, Piła, Budzyń, ale nie tylko. W zakeresie naszej działalności mieszczą się takie usługi ogrodnicze jak: projektowanie ogrodów, aranżacja ogrodów, pielęgnacja ogrodów oraz budowa i zakładanie ogrodów i terenów zieleni. Ponadto wykonujemy także systemy nawadniania i odwodnienia. W naszej ofercie znajdą Państwo również inne usługi ogrodnicze, jak zakładanie trawników, koszenie trawników czy oświetlenie ogrodu. Nasza podstawowa działalność to jednak przede wszystkim projektowanie ogrodów, zakładanie ogrodów, pielęgnacja ogrodów i budowa terenów zielonych.
                </p>
                <p>
                Dysponujemy profesjonalnym sprzętem Avant, który wykorzystujemy dla własnych potrzeba, ale także oferujemy wynajem sprzętu ogrodniczego, takiego jak: glebogryzarka, ładowarka, koparka wynajem. Kratka trawnikowa, parkingi ekologiczne, nawadnianie, odwodnienia, drenaże oraz aranżacja i pielęgnacja ogrodów oraz terenów zieleni takich jak parki miejskie czy trawniki miejskie. Projektowanie ogrodów Poznań, Piła, Wielkopolska - zapraszamy do współpracy w zakresie ogrody przydomowe, tereny zieleni, urządzanie ogrodów. Każdy ogród przydomowy może być piękny, do każdego ogrodu możemy zamontować system nawadniania, dzięki któremu mogą Państwo zapomnieć o podlewaniu. W naszej ofercie znajdą Państwo również wysokiej jakości drewno kominkowe - drewno kominkowe Poznań, drewno kominkowe Piła - zapraszamy po drewno do kominka.
                </p>
            </GalleryDescription>
        </OurClientsGallery>
      </OurClientsContainer>
    </OurClientsStyled>
  )
}

export default OurClients
