import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"

const ServicesSection = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard/>
                <ServicesCard/>
                <ServicesCard/>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
