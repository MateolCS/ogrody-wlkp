import { SideNavStyled, SideNavList, CurrenSideNavListItem, SideLink, SideNavListItem } from "./styles/Utils.styled"
import { Services } from './ServicesPreviewData'
const SideNav = ({currentItem}) => {
  return (
    <SideNavStyled>
        <SideNavList>
            {Services.map((service) => (
                service.title === currentItem ? (
                    <CurrenSideNavListItem key={service.id}>
                        <SideLink to={service.path}>{service.title}</SideLink>
                    </CurrenSideNavListItem>
                ) : (
                    <SideNavListItem key={service.id}>
                        <SideLink to={service.path}>{service.title}</SideLink>
                    </SideNavListItem>
                )
            ))}
        </SideNavList>
    </SideNavStyled>
  )
}

export default SideNav
