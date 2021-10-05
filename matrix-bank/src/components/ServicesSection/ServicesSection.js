import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"
import { dataServiceCards } from "../../assets/Database"

const ServicesSection = () => {
    
    const cards = dataServiceCards.map((item) => {
        return (
          <ServicesCard
            cardInfo={item}
            key={item.id}
            // onClick={() => onClickCard(recipe.recipe_id)}
          />
        )
      })

    return (
        <ServicesContainer>
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                {/* <ServicesCard/>
                <ServicesCard/>
                <ServicesCard/> */}
                {cards}
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
