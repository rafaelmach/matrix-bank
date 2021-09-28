import styled from "styled-components"

export const GeneralContainer = styled.div`
    background-color: #010606;
    
`

export const AboutContainer = styled.div`
    
    color: #fff;
    background: #010606;
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);

    /* DESKTOP - ALTURA AJUSTA PELO TAMANHO DA TELA DO USUÁRIO = vh
    TABLET - ALTURA FIXA = 680 px
    CELULARES - ALTURA FIXA = 680 px
     */

    /* height: 680px; */
    max-width: 1100px;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 

    @media screen and (max-width: 768px) {
        /* background: grey; */
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 680px;
        /* height: 100%; */
        /* height: calc(100vh - 80px); */
        
        
    }

    @media screen and (max-width: 480px) {
        /* background: lightsteelblue; */
        /* height: calc(100vh - 80px); */
        
    }

`

export const LeftCol = styled.div`
    flex: 0.5;
    
   
    
    /* padding: 0 30px; */
    @media screen and (max-width: 480px) {
        margin-bottom: 10px;
        

    }
`

export const RightCol = styled.div`
    flex: 0.5;
    /* width: 100%; */
    /* background-color: blue; */
    /* padding: 0 30px; */

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
    max-width: 80%; 
    margin-top: 1.8em;
    

    @media screen and (max-width: 768px) {
        margin-top: 2em;
        width: 60%
        
    }

    @media screen and (max-width: 480px) {
        margin-top: 1em;
        width: 80%
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 400px; */
    width: 100%;
    height: 100%;
    /* margin-left: 30px; */
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
    color: #f7f8fa;
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
    color: #fff;
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









    /* @media screen and (max-width: 768px) {
       padding: 100px 0;  */
    


// export const InfoWrapper = styled.div
//     display: grid;
//     z-index: 1;
//     height: 860px;
//     width: 100%;
//     max-width: 1100px;
//     margin-right: auto;
//     margin-left: auto;
//     padding: 0 24px;
//     justify-content: center;
// `

// export const InfoRow = styled.div`
//     display: grid;
//     grid-auto-columns: minmax()(auto, 1fr);
//     align-items: center;
//     grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

//     @media screen and (max-width: 768px) {
//         grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
//     }
// `

// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `
// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `  
// export const TextWrapper = styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-bottom: 60px;
// `
// export const TopLine = styled.p`
//     color: #01bf71;
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;
// `

// export const Heading = styled.h1`
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

//     @media screen and (max-width: 480px) {
//         font-size: 32px;
//     }
// `
// export const Subtitle = styled.p`
//     max-width: 440px;
//     margin-bottom: 35px;
//     font-size: 18px;
//     line-height: 24px;
//     color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
// `
// export const BtnWrap = styled.div`
//     display: flex;
//     justify-content: flex-start;
// `
// export const ImgWrap = styled.div`
//     max-width: 555px;
//     height: 100%;
// `
// export const Img = styled.img`
//     width: 100%;
//     margin: 0 0 10px 0;
//     padding-right: 0;
// `
 




