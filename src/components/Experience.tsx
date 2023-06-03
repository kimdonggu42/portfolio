import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceContainer = styled.div`
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
  width: 8.7rem;
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
  min-width: 10rem;
  margin-right: 5rem;
  /* border: 1px solid red; */

  > .main {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  > .date {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 650px) {
    margin-right: 0;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const HiddenListTitle = styled.div`
  min-width: 10rem;
  margin-right: 5rem;
  /* border: 1px solid red; */

  > .main {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 450px) {
      font-size: 1rem;
    }
  }

  > .date {
    font-size: 0.85rem;
  }

  @media screen and (min-width: 451px) {
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
    font-weight: 500;
    /* border: 1px solid blue; */
  }

  > .subText {
    font-size: 0.95rem;
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
      <ExperienceTitle>Experience</ExperienceTitle>
      <UnderBar></UnderBar>
      <ExperieceArea>
        <ExperienceList>
          <ListTitle>
            <div className='main'>코드스테이츠</div>
            <div className='date'>2022.10 ~ 2023.04</div>
          </ListTitle>
          <ListText>
            <div className='subTitle'>프론트엔드 개발자 양성 교육 과정</div>
            <HiddenListTitle>
              <div className='main'>코드스테이츠</div>
              <div className='date'>2022.10 ~ 2023.04</div>
            </HiddenListTitle>
            <div className='subText'>- HTML, CSS, JavaScript, React 학습</div>
            <div className='subText'>
              - 다수의 페어프로그래밍과 팀 프로젝트를 통해 버전 관리 및 개발 프로세스, 커뮤니케이션
              역량 강화
            </div>
            <div className='subText'>- 다양한 알고리즘 및 CS 지식학습</div>
          </ListText>
        </ExperienceList>
      </ExperieceArea>
    </ExperienceContainer>
  );
}

export default Experience;
