import cardImage from "../../images/svg-12.svg"
import { CardContainer, Image, Title, Description } from "./CardElements"

const ServicesCard = () => {
    return (
        // ServicesCard - abaixo
        <CardContainer> 
            
            {/* ServicesIcon = IMAGE */}
                <Image src={cardImage}/> 
                {/* ServicesH2 = Title */}
                <Title> Cartão de Crédito </Title>
                {/* ServicesP = Description */}
                <Description> Peça já seu Verdinho com anuidade zero e 5% de cash back.</Description>
            
        </CardContainer>
    )
}

export default ServicesCard
