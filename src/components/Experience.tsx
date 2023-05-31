import styled from "styled-components";

// import { FaDotCircle } from "react-icons/fa";

const ExperienceContainer = styled.div`
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
  margin: 0 1rem 0 1rem;
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
  }

  > .subText {
    font-size: 0.9rem;
    color: #3d3f41;
  }
`;

function Experience() {
  return (
    <ExperienceContainer>
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
            <div className='subText'>- React, HTML, CSS, JavaScript 학습</div>
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
