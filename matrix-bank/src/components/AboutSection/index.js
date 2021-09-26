import React from 'react'
import { Button } from 'react-scroll'
import { AboutContainer, LeftCol, RightCol, TextWrapper, TopLine, Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer } from './AboutElements'


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
                            <Button to="home" />
                        </BtnWrap> 
                    </TextWrapper>
                   </LeftCol>

                   <RightCol>
                    <ImgWrapper>
                      <Image />
                    </ImgWrapper>
                   </RightCol>
          </AboutContainer>  
        </GeneralContainer>
    )
}

export default AboutSection
