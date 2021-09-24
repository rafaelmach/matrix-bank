import {useState} from 'react'
import Video from "../../videos/video.mp4"
import { HeroContainer, HeroBg, VideoBg, HeroContent,
HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from "../ButtonElement"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
              <HeroH1>Você no controle. Sua conta digital, simples e fácil.</HeroH1>  
              <HeroP>Abra já sua conta e ganhe o cartão de crédito Matrix Green</HeroP>
              <HeroBtnWrapper>
                  <Button to="signup" onMouseEnter={onHover} 
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  >Abra sua conta {hover ? <ArrowForward /> : <ArrowRight />}</Button>
              </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
