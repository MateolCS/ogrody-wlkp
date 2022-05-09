import { ServicesPreviewStyled, ServicesContainer, ServicesGridItem, ServicesSectionGrid, ServicesSectionTitle, ServicesSection, More, ServicesGridItemTitle, ServicesGridItemTextarea} from "./styles/ServicesPreview.styled"
import { BasicServices, OtherServices } from "./ServicesPreviewData"
const ServicesPreview = () => {
  return (
    <ServicesPreviewStyled>
      <ServicesContainer>
        <ServicesSection>
            <ServicesSectionTitle>Podstawowe usługi ogrodnicze</ServicesSectionTitle>
            <ServicesSectionGrid>
                {BasicServices.map((service) => (
                    <ServicesGridItem key={service.id}>
                        <img src={`${service.imgUrl}`} alt={`${service.title}`}/>
                        <ServicesGridItemTitle to={service.path}>{service.title}</ServicesGridItemTitle>
                        <p>{service.desc}</p>
                        <More to={service.path}>Więcej</More>
                    </ServicesGridItem>
                ))}
            </ServicesSectionGrid>
        </ServicesSection>
        <ServicesSection>
            <ServicesSectionTitle>Pozostałe usługi</ServicesSectionTitle>
            <ServicesSectionGrid>
                {OtherServices.map((service) => (
                    <ServicesGridItem direction={'row'} key={service.id}>
                        <img src={service.imgUrl} alt={`${service.title}`}/>
                        <ServicesGridItemTextarea>
                        <ServicesGridItemTitle to={service.path}>{service.title}</ServicesGridItemTitle>
                        <p>{service.desc}</p>
                        </ServicesGridItemTextarea>
                    </ServicesGridItem>
                ))}
            </ServicesSectionGrid>
        </ServicesSection>
      </ServicesContainer>
    </ServicesPreviewStyled>
  )
}

export default ServicesPreview
