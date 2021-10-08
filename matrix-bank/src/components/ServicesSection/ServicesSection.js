import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"
import { dataServiceCards } from "../../assets/Database"

const ServicesSection = () => {

  // Quando for implementar o MODAL, basta deletar o bloco ELSE e colocar a chamada 
  // da função do MODAL no lugar do console.log, dentro do IF

    const onClickCard = (id) => {
      if(id === "2"){
        console.log("Cliquei no Card de Cartão de Crédito!")
      } else {
        console.log("Cliquei em qualquer um dos outros cards")
      }
    }
    
    const cards = dataServiceCards.map((item) => {
        return (
          <ServicesCard
            cardInfo={item}
            key={item.id}
            onClick={() => onClickCard(item.id)}
          />
        )
      })

    return (
        <ServicesContainer>
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>

                {cards}

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
