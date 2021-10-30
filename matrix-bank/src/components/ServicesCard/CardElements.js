import styled from "styled-components";

export const CardContainer = styled.div`
    background: #fcfcfc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.07);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Image = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const Title = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const Description = styled.p`
    font-size: 1rem;
    text-align: center;
`


