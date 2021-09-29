import { AboutContainer, LeftCol, RightCol, TextWrapper, TopLine, 
Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer } from './DiscoverElements'
import { Button } from "../ButtonElement"
import aboutImage from "../../images/svg-13.svg"
import { aboutSectionText } from '../../assets/Database'


const DiscoverSection = () => {
    return (
        <GeneralContainer>
          <AboutContainer>
                   <LeftCol>
                    <TextWrapper>
                       <TopLine> {aboutSectionText.topline} </TopLine>
                       <Title> {aboutSectionText.title} </Title>
                       <Subtitle> {aboutSectionText.subtitle} </Subtitle>
                       <BtnWrap>
                            <Button to="home"
                            primaryColor={false}
                            darkText={false}> {aboutSectionText.buttonText} </Button>
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

export default DiscoverSection
