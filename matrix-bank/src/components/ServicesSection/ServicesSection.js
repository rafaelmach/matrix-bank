import axios from "axios";
import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesContainer, ServicesH1, ServicesWrapper } from "./ServicesSecElements"
import { useEffect, useState } from "react"
import Modal from "../Modal/Modal"


const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])

    const onClickCard = (id) => {
      if(id === "2"){
        setShowModal(!showModal)
      } 
    }

    useEffect(() => {
      axios
        .get("services.json")
        .then((resp) => {
          setData(resp.data.dataService)
        })
        .catch((error) => {
          alert(error)
        })
    }, [])
    
    
    const cards = data &&
    data.map((item) => {
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
