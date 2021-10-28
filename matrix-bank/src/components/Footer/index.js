import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { toggleHome } from "../../constants/scrollToTop"
import { smoothScrollSet } from "../../constants/smoothScrollSet"
import {
    FooterContainer, FooterWrap, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
    FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,
    WebsiteRights, SocialIcons, SocialIconLink
} from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle> Matrix Bank </FooterLinkTitle>

                            <FooterLink to="home" {... smoothScrollSet}> Sobre Nós </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Recomendações </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Carreiras </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Investidores </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Termos de Serviço </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Fale com a gente </FooterLinkTitle>

                            <FooterLink to="home" {... smoothScrollSet}> Contato </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Suporte </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Patrocínios </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Ouvidoria </FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle> Vídeos </FooterLinkTitle>

                            <FooterLink to="home" {... smoothScrollSet}> Na Mídia </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Envie um vídeo </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Agências </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Influencers </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Produtos </FooterLinkTitle>

                            <FooterLink to="home" {... smoothScrollSet}> Conta digital </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Cartão de crédito </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Matrix UltraGreen </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Empréstimo </FooterLink>
                            <FooterLink to="home" {... smoothScrollSet}> Matrix Vida </FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            Matrix Bank
                        </SocialLogo>
                        <WebsiteRights> Matrix Bank © {new Date().getFullYear()} - Todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                           <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                           </SocialIconLink>
                           <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                               <FaFacebook />
                           </SocialIconLink>
                           <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                               <FaYoutube />
                           </SocialIconLink>
                           <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                               <FaTwitter />
                           </SocialIconLink>
                           <SocialIconLink href="https://www.linkedin.com/in/rafael-fmachado/" target="_blank" aria-label="Linkedin">
                               <FaLinkedin />
                           </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
