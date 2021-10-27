import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
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

                            <FooterLink to="/signin"> Sobre Nós </FooterLink>
                            <FooterLink to="/signin"> Recomendações </FooterLink>
                            <FooterLink to="/signin"> Carreiras </FooterLink>
                            <FooterLink to="/signin"> Investidores </FooterLink>
                            <FooterLink to="/signin"> Termos de Serviço </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Fale com a gente </FooterLinkTitle>

                            <FooterLink to="/"> Contato </FooterLink>
                            <FooterLink to="/"> Suporte </FooterLink>
                            <FooterLink to="/"> Patrocínios </FooterLink>
                            <FooterLink to="/"> Ouvidoria </FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle> Vídeos </FooterLinkTitle>

                            <FooterLink to="/"> Na Mídia </FooterLink>
                            <FooterLink to="/"> Envie um vídeo </FooterLink>
                            <FooterLink to="/"> Agências </FooterLink>
                            <FooterLink to="/"> Influencers </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Produtos </FooterLinkTitle>

                            <FooterLink to="/"> Conta digital </FooterLink>
                            <FooterLink to="/"> Cartão de crédito </FooterLink>
                            <FooterLink to="/"> Matrix UltraGreen </FooterLink>
                            <FooterLink to="/"> Empréstimo </FooterLink>
                            <FooterLink to="/"> Matrix Vida </FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
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
