import { useState, useEffect, useRef } from 'react'
import Video from "../../videos/video.mp4"
import {
    HeroContainer, HeroBg, VideoBg, HeroContent,
    HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight
} from './HeroElements'
import { Button } from "../ButtonElement"
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import { init } from 'ityped'
import { motion, AnimatePresence } from "framer-motion"

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
        <AnimatePresence>
        <HeroContainer id="home"
        as={motion.div} initial={{ opacity: 0 }}
        animate={{
            opacity: 1, transition: {
                delay: 0.1, duration: 0.3
            }
        }}
        exit={{
            opacity: 0
        }}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent
            as={motion.div} initial={{ y: -200, opacity: 0 }}
            animate={{
                y: 0, opacity: 1, transition: {
                    delay: 0.3, duration: 1
                }
            }}
            >
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
        </AnimatePresence>
    )
}

export default HeroSection
