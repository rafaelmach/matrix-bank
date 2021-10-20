import { useRef } from "react"
import { Background, CloseModalButton, ModalContent, ModalImg, ModalWrapper} from './ModalElements'
import ModalImage from "../../images/credit_card.png"
import ReactDom from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef()

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return ReactDom.createPortal(
         <>
         <AnimatePresence>
         {showModal ? (
            <Background ref={modalRef} onClick={closeModal} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
            exit={{
                opacity: 0
            }}>
                <ModalWrapper as={motion.div}  initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {
                        delay: 0.1, duration: 0.1
                    }
                    }} exit={{
                        opacity: 0
                    }}>
                    <ModalImg src={ModalImage} alt="Imagem de um Cartão de Crédito"
                    as={motion.img}  initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: {
                        delay: 0.5, duration: 0.5
                    }
                    }}
                    exit={{ x: -100, opacity: 0 }}
                    />  
                    <ModalContent as={motion.div} initial={{ x: 150, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1, transition: {
                        delay: 0.5, duration: 0.5
                    }
                    }}
                    exit={{ x: 100, opacity: 0 }}>
                        <h1>Matrix Green</h1>
                        <p>O único cartão de crédito com 5% de cashback. Peça já!</p>
                        <button>Eu quero</button>
                    </ModalContent>
                    <CloseModalButton aria-label="Fechar o Modal" 
                    onClick={() => setShowModal(!showModal)}/>
                </ModalWrapper> 
            </Background>

         ) : null }
         </AnimatePresence>
            </>,
            document.getElementById("portal")
    )
}

export default Modal
