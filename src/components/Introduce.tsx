import styled from "styled-components";
import profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";

import { FcBookmark, FcIdea, FcAddressBook, FcPhoneAndroid } from "react-icons/fc";

const IntroduceContainer = styled.div`
  height: 36rem;
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
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
  align-items: center;
  /* border: 1px solid red; */

  > img {
    width: 13rem;
    height: 13rem;
    border-radius: 1.3rem;
  }
`;

const KeywordArea = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-left: 3rem;
  row-gap: 1rem;
  word-break: keep-all;

  > .mainSentence {
    font-size: 1.4rem;

    > .highlight {
      font-weight: 600;
      background-color: #fff5b8;
    }
  }

  > .subSentence {
    font-size: 1.1rem;

    > .highlight {
      background-color: #fff5b8;
    }
  }
`;

const ContackWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  /* border: 1px solid red; */
`;

const LeftLine = styled.div`
  > .phone {
    display: flex;
    align-items: center;
  }

  > .github {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    > a {
      color: black;
    }
  }
`;

const RightLine = styled.div`
  margin-left: 5rem;

  > .email {
    display: flex;
    align-items: center;
  }

  > .blog {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    > a {
      color: black;
    }
  }
`;

function Introduce() {
  return (
    <IntroduceContainer>
      <IntroduceTitle>Introduce</IntroduceTitle>
      <UnderBar></UnderBar>
      <IntroduceWrapper>
        <img src={profile} alt='프로필' />
        <KeywordArea>
          <div className='mainSentence'>
            안녕하세요 👋🏻
            <br />
            <span className='highlight'>주도적인 자세로 문제 해결</span>
            하기 좋아하는 김동구입니다.
          </div>
          <div className='subSentence'>
            끝난 프로젝트라도&nbsp;
            <span className='highlight'>개선할 수 있는 부분이 있는지 찾아보며 발전</span>시키는 것을
            좋아합니다.
          </div>
          <div className='subSentence'>
            <span className='highlight'>협업 능력과 커뮤니케이션 능력</span>은 개발 능력 못지않게
            중요하다고 생각합니다.
          </div>
          <div className='subSentence'>
            항상 사용자 경험을 생각하며 <span className='highlight'>더 나은 경험</span>을 제공할 수
            있도록 고민합니다.
          </div>
          <div className='subSentence'>
            담당한 부분만 해결하고 끝이 아닌,{" "}
            <span className='highlight'>함께 고민하며 같이 성장</span>할 수 있도록 노력합니다.
          </div>
        </KeywordArea>
      </IntroduceWrapper>
      <ContackWrapper>
        <LeftLine>
          <div className='phone'>
            <FcPhoneAndroid size={20} />
            &nbsp;Phone : 010-9039-7962
          </div>
          <div className='github'>
            <FcIdea size={20} />
            &nbsp;Github :&nbsp;
            <Link to='https://github.com/kimdonggu42' target='_blank'>
              https://github.com/kimdonggu42
            </Link>
          </div>
        </LeftLine>
        <RightLine>
          <div className='email'>
            <FcAddressBook size={20} />
            &nbsp;Email : kdonggoo44@gmail.com
          </div>
          <div className='blog'>
            <FcBookmark size={20} />
            &nbsp;Blog :&nbsp;
            <Link to='https://velog.io/@donggoo' target='_blank'>
              https://velog.io/@donggoo
            </Link>
          </div>
        </RightLine>
      </ContackWrapper>
    </IntroduceContainer>
  );
}

export default Introduce;
