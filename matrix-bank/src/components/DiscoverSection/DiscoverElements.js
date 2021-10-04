import styled from "styled-components"

export const GeneralContainer = styled.div`
    background-color: #eee;
    
`

export const AboutContainer = styled.div`
    
    color: #010606;
    background: #eee;
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);

    /* DESKTOP - ALTURA AJUSTA PELO TAMANHO DA TELA DO USUÁRIO = vh
    TABLET - ALTURA FIXA = 720 px
    CELULARES - ALTURA FIXA = 720 px
     */

    max-width: 1100px;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 720px;
    }

`

export const LeftCol = styled.div`
    flex: 0.5;
    
    @media screen and (max-width: 480px) {
        margin-bottom: 10px;
        
    }
`

export const RightCol = styled.div`
    flex: 0.5;

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }


    @media screen and (max-width: 480px) {
        margin-bottom: 15px;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    max-width: 555px;
    height: 100%;
    align-items: center;
    justify-content: left;
    
`

export const Image = styled.img`
    width: 80%;
    margin-top: 1.8em;
    
    @media screen and (max-width: 768px) {
        margin-top: 2em;
        width: 80%
    }

    @media screen and (max-width: 480px) {
        margin-top: 1em;
        width: 100%
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-inline: auto; 
    width: min(90%, 70.5rem);

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 25px;
    }
    
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    

    @media screen and (max-width: 480px) {
        font-size: 1.875rem;
    }


    // Iphone 5 - Telas bem pequenas !!!
    @media screen and (max-width: 320px) {
        font-size: 1.5625rem;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.125rem;
    line-height: 24px;
    color: #010606;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 35px;

    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        margin-bottom: 15px;

    }

    @media screen and (max-width: 480px) {
        margin-bottom: 10px;

    }
`

