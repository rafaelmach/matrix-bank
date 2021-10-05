import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
               
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #f9f9f9; 
    margin-bottom: 64px;

    /* COR F9F9F9 = 2 tons mais escuro que o branco 
       COR F7F7F7 = 3 tons mais escuro que o branco */

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`