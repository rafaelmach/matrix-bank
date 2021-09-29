import React from 'react'
import { AboutContainer, LeftCol, RightCol, TextWrapper, TopLine, Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer } from './AboutElements'
import { Button } from "../ButtonElement"
import aboutImage from "../../images/svg-13.svg"


const AboutSection = () => {
    return (
        <GeneralContainer>
          <AboutContainer>
                   <LeftCol>
                    <TextWrapper>
                       <TopLine> BANCO PREMIUM </TopLine>
                       <Title>Transações ilimitadas e tarifa zero</Title>
                       <Subtitle>Tenha acesso ao nosso aplicativo exclusivo que permite o envio de transações ilimitadas sem cobrança de taxas</Subtitle>
                       <BtnWrap>
                            <Button to="home"
                            primaryColor="true"
                            darkText="true"> Acessar </Button>
                        </BtnWrap> 
                    </TextWrapper>
                   </LeftCol>

                   <RightCol>
                    <ImgWrapper>
                      <Image src={aboutImage} />
                    </ImgWrapper>
                   </RightCol>
          </AboutContainer>  
        </GeneralContainer>
    )
}

export default AboutSection
