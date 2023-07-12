import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { RxDotFilled } from "react-icons/rx";
import { TbCertificate } from "react-icons/tb";

const ExperienceContainer = styled.section`
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

const ExperienceTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 9.5rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const ExperieceArea = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  list-style: none;
  /* border: 1px solid red; */
`;

export const ExperienceList = styled.li`
  display: flex;
  word-break: keep-all;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ListTitle = styled.div`
  min-width: 12rem;
  margin-right: 5rem;
  /* border: 1px solid red; */

  > .main {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  > .date {
    font-size: 0.85rem;

    > .point {
      font-weight: 500;
      color: ${(props) => props.theme.color.mainColor};
    }
  }

  @media screen and (max-width: 650px) {
    margin-right: 0;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LinkTitle = styled.div`
  display: flex;
  column-gap: 0.8rem;
  /* border: 1px solid red; */

  > .main {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  > a {
    color: ${(props) => props.theme.color.mainColor};
  }

  > .date {
    font-size: 0.85rem;

    > .point {
      font-weight: 500;
      color: ${(props) => props.theme.color.mainColor};
    }
  }
`;

export const HiddenListTitle = styled.div`
  min-width: 12rem;
  margin-right: 5rem;
  /* border: 1px solid red; */

  > .main {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  > .date {
    font-size: 0.85rem;

    > .point {
      font-weight: 500;
      color: ${(props) => props.theme.color.mainColor};
    }
  }

  @media screen and (min-width: 501px) {
    display: none;
    margin-right: 0;
  }
`;

export const ListText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  word-break: keep-all;
  /* border: 1px solid blue; */

  > .subTitle {
    font-size: 1.1rem;
    font-weight: 600;
    /* border: 1px solid blue; */
  }
`;

const DetailText = styled.div`
  display: flex;
  column-gap: 0.5rem;
  /* border: 1px solid red; */

  > .dot {
    min-width: 1rem;
    max-width: 1rem;
    /* border: 1px solid red; */
  }

  > .subText {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

  return (
    <ExperienceContainer data-aos='fade-up'>
      <ExperienceTitle>Experiences</ExperienceTitle>
      <UnderBar></UnderBar>
      <ExperieceArea>
        <ExperienceList>
          <ListTitle>
            <div className='main'>OSSCA</div>
            <div className='date'>
              2023.07 ~ <span className='point'>진행중</span>
            </div>
          </ListTitle>
          <ListText>
            <div className='subTitle'>2023 오픈소스 컨트리뷰션 아카데미(OSSCA)</div>
            <HiddenListTitle>
              <div className='main'>OSSCA</div>
              <div className='date'>
                2023.07 ~ <span className='point'>진행중</span>
              </div>
            </HiddenListTitle>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>
                13주 동안 오픈소스 프로젝트에 직접 기여하고 참여할 수 있는 멘토링 중심의 교육
                프로그램
              </div>
            </DetailText>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>
                Git 내부의 Metadata를 분석하고 시각화하는 Githru-vscode-ext 프로젝트의 멘티로 활동
              </div>
            </DetailText>
          </ListText>
        </ExperienceList>

        <ExperienceList>
          <ListTitle>
            <LinkTitle>
              <div className='main'>구름톤 6기</div>
              <Link to='/certificate/9oormthon.pdf' target='_blank' rel='noreferrer'>
                <TbCertificate size={20} />
              </Link>
            </LinkTitle>
            <div className='date'>2023.07</div>
          </ListTitle>
          <ListText>
            <div className='subTitle'>카카오와 구름이 함께 개최하는 해커톤</div>
            <HiddenListTitle>
              <LinkTitle>
                <div className='main'>구름톤 6기</div>
                <Link to='/certificate/9oormthon.pdf' target='_blank'>
                  <TbCertificate size={20} />
                </Link>
              </LinkTitle>
              <div className='date'>2023.07</div>
            </HiddenListTitle>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>3박 4일 동안 교육과 해커톤 진행</div>
            </DetailText>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>
                단기간에 기획, 개발, 배포까지 진행하며 빠른 MVP 제작 경험
              </div>
            </DetailText>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>기획자, 디자이너와 함께 협업하며 실전 역량 향상</div>
            </DetailText>
          </ListText>
        </ExperienceList>

        <ExperienceList>
          <ListTitle>
            <LinkTitle>
              <div className='main'>코드스테이츠 42기</div>
              <Link to='/certificate/codestates.pdf' target='_blank'>
                <TbCertificate size={20} />
              </Link>
            </LinkTitle>
            <div className='date'>2022.10 ~ 2023.04</div>
          </ListTitle>
          <ListText>
            <div className='subTitle'>프론트엔드 개발자 양성 교육 과정</div>
            <HiddenListTitle>
              <LinkTitle>
                <div className='main'>코드스테이츠 42기</div>
                <Link to='/certificate/codestates.pdf' target='_blank'>
                  <TbCertificate size={20} />
                </Link>
              </LinkTitle>
              <div className='date'>2022.10 ~ 2023.04</div>
            </HiddenListTitle>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>HTML, CSS, JavaScript, React 외 다수 학습</div>
            </DetailText>
            <DetailText>
              <RxDotFilled className='dot' size={25} />
              <div className='subText'>
                다수의 페어프로그래밍과 팀 프로젝트를 통해 버전 관리 및 개발 프로세스, 커뮤니케이션
                역량 강화
              </div>
            </DetailText>
          </ListText>
        </ExperienceList>
      </ExperieceArea>
    </ExperienceContainer>
  );
}

export default Experience;
