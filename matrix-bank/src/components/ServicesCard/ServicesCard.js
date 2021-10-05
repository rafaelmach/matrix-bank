import { CardContainer, Image, Title, Description } from "./CardElements"

const ServicesCard = ({cardInfo}) => {
    return (
        // ServicesCard - abaixo
        <CardContainer> 
            
            {/* ServicesIcon = IMAGE */}
                <Image src={cardInfo.image}/> 
                {/* ServicesH2 = Title */}
                <Title> {cardInfo.title} </Title>
                {/* ServicesP = Description */}
                <Description> {cardInfo.desc}</Description>
            
        </CardContainer>
    )
}

export default ServicesCard
