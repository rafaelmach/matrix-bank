import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"
import { dataServiceCards } from "../../assets/Database"
import { useState } from "react"
import Modal from "../Modal/Modal"

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false)

    const onClickCard = (id) => {
      if(id === "2"){
        console.log("Cliquei no Card de Cartão de Crédito!")
        setShowModal(!showModal)
        console.log("CLICADO !!!", showModal)
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
        <ServicesContainer id="services">
          <Modal showModal={showModal} setShowModal={setShowModal} />
            <ServicesH1>Serviços Digitais</ServicesH1>
            <ServicesWrapper>

                {cards}

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
