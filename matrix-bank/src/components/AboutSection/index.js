import {
  AboutContainer, LeftCol, RightCol, TextWrapper, TopLine,
  Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer
} from './AboutElements'
import { Button } from "../ButtonElement"
import aboutImage from "../../images/svg-13.svg"
import { aboutSectionText } from '../../assets/Database'
import { smoothScrollSet } from '../../constants/smoothScrollSet'

const AboutSection = () => {
  return (
    <GeneralContainer id="about">
      <AboutContainer>
        
        <LeftCol>
          <TextWrapper>
            <TopLine> {aboutSectionText.topline} </TopLine>
            <Title> {aboutSectionText.title} </Title>
            <Subtitle> {aboutSectionText.subtitle} </Subtitle>
            <BtnWrap>
              <Button to="home"
                primaryColor={true}
                darkText={true}
                {... smoothScrollSet}
                > {aboutSectionText.buttonText}
                
                 </Button>
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
