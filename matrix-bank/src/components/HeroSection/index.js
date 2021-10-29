import { useState, useEffect, useRef } from 'react'
import Video from "../../videos/video.mp4"
import {
    HeroContainer, HeroBg, VideoBg, HeroContent,
    HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroElements'
import { Button } from "../ButtonElement"
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import { init } from 'ityped'

const HeroSection = () => {
    const [hoverIcon, setHoverIcon] = useState(false)

    const onHover = () => {
        setHoverIcon(!hoverIcon)
    }

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1700,
            backSpeed: 60,
            strings: ["Sua conta digital", "Simples e fácil", "Você no controle", "Venha para a Matrix" ]
        })
    }, [])


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Bem vindo ao futuro!</HeroH1>
                <HeroP><span ref={textRef}></span></HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primaryColor="true"
                        darkText="true"
                        {...smoothScrollSet}
                    >Abra sua conta {hoverIcon ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
