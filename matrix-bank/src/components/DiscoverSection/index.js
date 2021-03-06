import {
  MainContainer,
  LeftCol,
  RightCol,
  TextWrapper,
  TopLine,
  Title,
  Subtitle,
  BtnWrap,
  ImgWrapper,
  Image,
  GeneralContainer,
} from "./DiscoverElements";
import { Button } from "../ButtonElement";
import discoverImage from "../../images/svg-2.svg";
import { discoverSectionText } from "../../assets/Database";
import { smoothScrollSet } from "../../constants/smoothScrollSet";

const DiscoverSection = () => {
  return (
    <GeneralContainer id="discover">
      <MainContainer>

        <LeftCol>
          <ImgWrapper>
            <Image src={discoverImage} />
          </ImgWrapper>
        </LeftCol>

        <RightCol>
          <TextWrapper>
            <TopLine> {discoverSectionText.topline} </TopLine>
            <Title> {discoverSectionText.title} </Title>
            <Subtitle> {discoverSectionText.subtitle} </Subtitle>
            <BtnWrap>
              <Button to="home" primaryColor={false} darkText={false}
              {... smoothScrollSet}>
                {discoverSectionText.buttonText}
              </Button>
            </BtnWrap>
          </TextWrapper>
        </RightCol>

      </MainContainer>
    </GeneralContainer>
  );
};

export default DiscoverSection;
