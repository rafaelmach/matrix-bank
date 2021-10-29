import styled from "styled-components"
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md"

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100vh;
    position: relative;
    z-index: 1;
      
    /* Abaixo o código que escurece o vídeo ... */
    
    :before {
        
        content: "";
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
   
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    padding: 15px;
    

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 0px;
    color: #fff;
    font-size: 40px;
    text-align: center;
    max-width: 768px;
    padding: 10px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }

    .ityped-cursor {
                    font-size: 2.2rem;
                    opacity: 1;
                    -webkit-animation: blink 0.5s infinite;
                    -moz-animation: blink 0.5s infinite;
                    animation: blink 0.5s infinite;
                    animation-direction: alternate;
                }
                 
                @keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
                 
                @-webkit-keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
                 
                @-moz-keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`