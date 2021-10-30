import ScrollToTop from "../../constants/scrollToTopSignIn"
import {
    Container, FormWrap, Icon, FormContent,
    Form, FormH1, FormLabel, FormInput, FormButton, Text
} from "./SigninElements"
import { motion, AnimatePresence } from "framer-motion"


const SignInPage = () => {
    return (
        <>
            <AnimatePresence>
                <ScrollToTop />
                <Container as={motion.div} initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            delay: 0.1, duration: 0.4
                        }
                    }}
                    exit={{
                        opacity: 0
                    }}>
                    <FormWrap>
                        <Icon to="/"> Matrix Bank </Icon>
                        <FormContent>
                            <Form action="#">
                                <FormH1> Faça login na sua conta </FormH1>
                                <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput type="email" required />
                                <FormLabel htmlFor="for">Senha</FormLabel>
                                <FormInput type="password" required />
                                <FormButton type="submit"> Entrar </FormButton>
                                <Text> Esqueci minha senha </Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </AnimatePresence>
        </>
    )
}

export default SignInPage
