import styled from "styled-components";
import { MdClose } from "react-icons/md"


export const Background = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    transition: all 0.1s ease-in-out;
` 

export const ModalWrapper = styled.div`
    position: fixed;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 420px;
    width: 900px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 50px;
    z-index: 1000;
    border-radius: 4px;
    transition: all 0.1s ease-in-out;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3em 1.5em;
        height: 80%;
        width: 86%;
        top: 52%;
        left: 50%;
    }

    @media screen and (max-width: 480px) {
        padding: 5em 2em;
        height: 80%;
        width: 86%;
        top: 55%;
        left: 50%;
    }
`

export const ModalImg = styled.img`
    width: 95%;
    height: 80%;
    border-radius: 4px;
    background: #000;

    @media screen and (max-width: 1000px) {
        border-radius: 10px;
        width: 100%;
        max-width: 400px;
        padding: 1em;
        margin: 1.5em;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 40%;
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    margin-left: 3em;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }

    @media screen and (max-width: 1000px) {
        margin-left: 0;
    }
`

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    
`