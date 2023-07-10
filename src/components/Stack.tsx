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

const StackContainer = styled.section`
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
  margin-bottom: 2rem;

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
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
`;

const StackSetting = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const StackDetailTitleArea = styled.div`
  display: flex;
  align-items: center;

  > .stackImg {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
  }

  > .stackDetailTitle {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const StackDetailInfo = styled.div`
  font-size: 1rem;

  > .bold {
    font-weight: 600;
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
            <StackDetailTitleArea>
              <img className='stackImg' src={JavaScriptLogo} alt='stackImg' />
              <div className='stackDetailTitle'>JavaScript</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              런타임에 컴파일되는 <span className='bold'>JavaScript의 동작 방식을 이해</span>하고
              있으며
              <span className='bold'>ES6 문법 사용에 익숙</span>합니다.
            </StackDetailInfo>
          </StackSetting>
          <StackSetting>
            <StackDetailTitleArea>
              <img className='stackImg' src={TypeScriptLogo} alt='stackImg' />
              <div className='stackDetailTitle'>TypeScript</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              TypeScript를 통해 <span className='bold'>런타임 이전에 문법 에러를 체크</span>하여
              보다 안정적인 코드를 작성할 수 있습니다.
            </StackDetailInfo>
          </StackSetting>
        </LanguageList>
      </LanguageArea>
      <LanguageArea>
        <div className='stackTitle'>Library & Framework</div>
        <LanguageList>
          <StackSetting>
            <StackDetailTitleArea>
              <img className='stackImg' src={ReactLogo} alt='stackImg' />
              <div className='stackDetailTitle'>React</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              전역 상태 관리 툴을 활용하여 재사용 가능한 컴포넌트 기반의
              <span className='bold'>Single Page Application을 제작</span>할 수 있습니다.
            </StackDetailInfo>
          </StackSetting>
        </LanguageList>
      </LanguageArea>
      <LanguageArea>
        <div className='stackTitle'>State Management</div>
        <LanguageList>
          <StackSetting>
            <StackDetailTitleArea>
              <img className='stackImg' src={ReduxLogo} alt='stackImg' />
              <div className='stackDetailTitle'>Redux</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              Redux, Redux Toolkit을 이용해
              <span className='bold'>하나의 store에서 전역 상태관리</span>를 할 수 있습니다.
            </StackDetailInfo>
          </StackSetting>
          <StackSetting>
            <StackDetailTitleArea>
              <img className='stackImg' src={RecoilLogo} alt='stackImg' />
              <div className='stackDetailTitle'>Recoil</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              Context를 구독하고 있는 모든 요소들이 렌더링 되는 Context API와 달리, setter 함수만
              필요한 경우 atom을 구독하지 않게 하여
              <span className='bold'>불필요한 리렌더링을 방지</span>할 수 있습니다.
            </StackDetailInfo>
          </StackSetting>
        </LanguageList>
      </LanguageArea>
      <LanguageArea>
        <div className='stackTitle'>Styling</div>
        <LanguageList>
          <StackSetting>
            <StackDetailTitleArea>
              <img className='stackImg' src={StyledComponentsLogo} alt='stackImg' />
              <div className='stackDetailTitle'>Styled Components</div>
            </StackDetailTitleArea>
            <StackDetailInfo>
              css를 컴포넌트화하여 <span className='bold'>재사용 가능한 스타일</span>을 만들 수
              있으며 ThemeProvider를 통해 공통 스타일 속성을 관리할 수 있습니다.
            </StackDetailInfo>
          </StackSetting>
        </LanguageList>
      </LanguageArea>
    </StackContainer>
  );
}

export default Stack;
