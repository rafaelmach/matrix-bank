import { AboutContainer, LeftCol, RightCol, TextWrapper, TopLine, 
Title, Subtitle, BtnWrap, ImgWrapper, Image, GeneralContainer } from './DiscoverElements'
import { Button } from "../ButtonElement"
import aboutImage from "../../images/svg-13.svg"
import { discoverSectionText } from '../../assets/Database'


const DiscoverSection = () => {
    return (
        <GeneralContainer>
          <AboutContainer>
                   <LeftCol>
                    <TextWrapper>
                       <TopLine> {discoverSectionText.topline} </TopLine>
                       <Title> {discoverSectionText.title} </Title>
                       <Subtitle> {discoverSectionText.subtitle} </Subtitle>
                       <BtnWrap>
                            <Button to="home"
                            primaryColor={false}
                            darkText={false}> {discoverSectionText.buttonText} </Button>
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
