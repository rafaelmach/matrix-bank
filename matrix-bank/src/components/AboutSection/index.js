import React from 'react'
import { AboutContainer, LeftCol, RightCol, TextWrapper, TopLine, Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer } from './AboutElements'
import { Button } from "../ButtonElement"
import aboutImage from "../../images/svg-01.svg"


const AboutSection = () => {
    return (
        <GeneralContainer>
          <AboutContainer>
                   <LeftCol>
                    <TextWrapper>
                       <TopLine> PREMIUM BANK </TopLine>
                       <Title>Unlimited Transactions with zero fees</Title>
                       <Subtitle>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</Subtitle>
                       <BtnWrap>
                            <Button to="home"
                            primaryColor="true"
                            darkText="true">Get Started </Button>
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
