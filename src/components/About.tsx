import styled from "styled-components";
import profile from "../assets/images/profile.png";
import TypeIt from "typeit-react";

const IntroduceContainer = styled.section`
  min-height: 36rem;
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

const IntroduceTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 7.5rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.color.mainColor};
`;

const IntroduceWrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */

  > img {
    width: 13rem;
    height: 13rem;
    border-radius: 1.3rem;
    margin-top: 1rem;

    @media screen and (max-width: 650px) {
      width: 9rem;
      height: 9rem;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const KeywordArea = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-left: 3rem;
  row-gap: 1rem;
  word-break: keep-all;
  /* border: 1px solid blue; */

  > .mainSentence {
    font-size: 1.5rem;
    font-weight: 600;

    > .highlight {
      font-weight: 700;
      background: linear-gradient(to right, ${(props) => props.theme.color.mainColor}, #62b6b7);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }

    @media screen and (max-width: 650px) {
      font-size: 1.4rem;
    }
  }

  > .subSentence {
    font-size: 1.2rem;

    > .highlight {
      background-color: #fff5b8;
    }

    @media screen and (max-width: 650px) {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 650px) {
    margin-top: 2rem;
    margin-left: 0;
  }
`;

function About() {
  return (
    <IntroduceContainer>
      <IntroduceTitle>About Me</IntroduceTitle>
      <UnderBar></UnderBar>
      <IntroduceWrapper>
        <img src={profile} alt='프로필' />
        <KeywordArea>
          <div className='mainSentence'>
            안녕하세요 👋🏻
            <br />
            <TypeIt
              className='highlight'
              options={{
                speed: 80,
                cursor: false,
              }}
            >
              주도적인 자세로 문제를 해결하는
            </TypeIt>
            &nbsp;김동구입니다.
          </div>
          <div className='subSentence'>
            끝난 프로젝트라도&nbsp;
            <span className='highlight'>개선할 수 있는 부분이 있는지 찾아보며 발전</span>시키는 것을
            좋아합니다.
          </div>
          <div className='subSentence'>
            담당한 부분만 해결하고 끝이 아닌,&nbsp;
            <span className='highlight'>함께 고민하며 같이 성장</span>할 수 있도록 노력합니다.
          </div>
          <div className='subSentence'>
            항상 사용자 경험을 생각하며 <span className='highlight'>더 나은 경험</span>을 제공할 수
            있도록 고민합니다.
          </div>
          <div className='subSentence'>
            <span className='highlight'>협업 능력과 커뮤니케이션 능력</span>은 개발 능력 못지않게
            중요하다고 생각합니다.
          </div>
        </KeywordArea>
      </IntroduceWrapper>
    </IntroduceContainer>
  );
}

export default About;
