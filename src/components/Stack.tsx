import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import JavaScriptLogo from "../assets/images/JavaScriptLogo.png";
import TypeScriptLogo from "../assets/images/TypeScriptLogo.png";
import ReactLogo from "../assets/images/ReactLogo.png";
import ReduxLogo from "../assets/images/ReduxLogo.png";
import RecoilLogo from "../assets/images/RecoilLogo.png";
import StyledComponentsLogo from "../assets/images/StyledComponentsLogo.png";
import NotionLogo from "../assets/images/NotionLogo.png";
import SlackLogo from "../assets/images/SlackLogo.png";
import FigmaLogo from "../assets/images/FigmaLogo.png";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StackContainer = styled.div`
  padding: 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
  margin: 0 1rem 0 1rem;

  @media screen and (max-width: 450px) {
    padding: 2rem;
  }
`;

const StackTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 4.5rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.color.mainColor};
`;

const LanguageArea = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 2.5rem;

  :last-child {
    margin-bottom: 0;
  }

  > .stackTitle {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`;

const LanguageList = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  column-gap: 2rem;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
`;

const StackSetting = styled.div`
  display: flex;
  align-items: center;

  > .stackImg {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
  }

  > .starCount {
    display: flex;
    color: #faae05;
    margin-left: 1rem;
    column-gap: 0.2rem;
  }

  > .styled-components {
    /* border: 1px solid red; */

    @media screen and (max-width: 398px) {
      width: 6.5rem;
    }
  }
`;

function Stack() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

  return (
    <StackContainer data-aos='fade-up'>
      <StackTitle>Stack</StackTitle>
      <UnderBar></UnderBar>
      <LanguageArea>
        <div className='stackTitle'>Language</div>
        <LanguageList>
          <StackSetting>
            <img className='stackImg' src={JavaScriptLogo} alt='stackImg' />
            <div>JavaScript</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
          <StackSetting>
            <img className='stackImg' src={TypeScriptLogo} alt='stackImg' />
            <div>TypeScript</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
        </LanguageList>
      </LanguageArea>

      <LanguageArea>
        <div className='stackTitle'>Library & Framework</div>
        <LanguageList>
          <StackSetting>
            <img className='stackImg' src={ReactLogo} alt='stackImg' />
            <div>React</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
        </LanguageList>
      </LanguageArea>

      <LanguageArea>
        <div className='stackTitle'>State Management</div>
        <LanguageList>
          <StackSetting>
            <img className='stackImg' src={ReduxLogo} alt='stackImg' />
            <div>Redux</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStarHalf className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
          <StackSetting>
            <img className='stackImg' src={RecoilLogo} alt='stackImg' />
            <div>Recoil</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStarHalf className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
        </LanguageList>
      </LanguageArea>

      <LanguageArea>
        <div className='stackTitle'>Styling</div>
        <LanguageList>
          <StackSetting>
            <img className='stackImg' src={StyledComponentsLogo} alt='stackImg' />
            <div className='styled-components'>Styled Components</div>
            <div className='starCount'>
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStarFill className='starIcon' />
              <BsStar className='starIcon' />
              <BsStar className='starIcon' />
            </div>
          </StackSetting>
        </LanguageList>
      </LanguageArea>

      <LanguageArea>
        <div className='stackTitle'>Cooperation Tool</div>
        <LanguageList>
          <StackSetting>
            <img className='stackImg' src={NotionLogo} alt='stackImg' />
            <div>Notion</div>
          </StackSetting>
          <StackSetting>
            <img className='stackImg' src={SlackLogo} alt='stackImg' />
            <div>Slack</div>
          </StackSetting>
          <StackSetting>
            <img className='stackImg' src={FigmaLogo} alt='stackImg' />
            <div>Figma</div>
          </StackSetting>
        </LanguageList>
      </LanguageArea>
    </StackContainer>
  );
}

export default Stack;
