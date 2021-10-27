import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"
import { dataServiceCards } from "../../assets/Database"
import { useState } from "react"
import Modal from "../Modal/Modal"

// DESAFIO: Criar um Modal diferente para cada um dos CARDS, criar um array com as
// informações dos Modais, e fazer um MAP no dataModal assim como fiz nos cards.


const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false)


  // Quando for implementar o MODAL, basta deletar o bloco ELSE e colocar a chamada 
  // da função do MODAL no lugar do console.log, dentro do IF

    const onClickCard = (id) => {
      if(id === "2"){
        console.log("Cliquei no Card de Cartão de Crédito!")
        setShowModal(!showModal)
        console.log("CLICADO !!!", showModal)
      } 
      // else {
      //   console.log("Cliquei em qualquer um dos outros cards")
      // }
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
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>

                {cards}

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
