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
} from "../SignUpSection/SignUpElements";
import { Button } from "../ButtonElement";
import signUpImage from "../../images/svg-22.svg";
import { signUpSectionText } from "../../assets/Database";
import { smoothScrollSet } from "../../constants/smoothScrollSet";


const SignUpSection = () => {
  return (
    <GeneralContainer id="signup">
      <MainContainer>

        <LeftCol>
          <TextWrapper>
            <TopLine> {signUpSectionText.topline} </TopLine>
            <Title> {signUpSectionText.title} </Title>
            <Subtitle> {signUpSectionText.subtitle} </Subtitle>
            <BtnWrap>
              <Button to="home" primaryColor={false} darkText={false}
              {... smoothScrollSet}>
                {signUpSectionText.buttonText}
              </Button>
            </BtnWrap>
          </TextWrapper>
        </LeftCol>

        <RightCol>
          <ImgWrapper>
            <Image src={signUpImage} />
          </ImgWrapper>
        </RightCol>

      </MainContainer>
    </GeneralContainer>
  );
};

export default SignUpSection;
