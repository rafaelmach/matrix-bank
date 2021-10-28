import ScrollToTop from "../../constants/scrollToTopSignIn"
import {
    Container, FormWrap, Icon, FormContent,
    Form, FormH1, FormLabel, FormInput, FormButton, Text
} from "./SigninElements"

const SignInPage = () => {
    return (
        <>
        <ScrollToTop />
        <Container>
            <FormWrap>
                <Icon to="/"> Matrix Bank </Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> Faça login na sua conta </FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit"> Entrar </FormButton>
                        <Text> Esqueci minha senha </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignInPage
