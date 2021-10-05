import { CardContainer, Image, Title, Description } from "./CardElements"

const ServicesCard = (props) => {
    return (
        // ServicesCard - abaixo
        <CardContainer> 
            
            {/* ServicesIcon = IMAGE */}
                <Image src={props.image}/> 
                {/* ServicesH2 = Title */}
                <Title> {props.title} </Title>
                {/* ServicesP = Description */}
                <Description> {props.description}</Description>
            
        </CardContainer>
    )
}

export default ServicesCard
