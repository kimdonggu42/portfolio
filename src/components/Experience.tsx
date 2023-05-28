import styled from "styled-components";

import { FaDotCircle } from "react-icons/fa";

const ExperienceContainer = styled.div`
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
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

const ExperieceArea = styled.ol`
  width: 40rem;
  border: 1px solid lightgray;
  list-style: none;
`;

const ExperienceList = styled.li`
  display: flex;
  /* flex-direction: column;
    justify-content: center; */
  word-break: keep-all;
  padding: 0 1.5rem 0 1.5rem;
`;

const ListTitle = styled.div`
  margin-right: 5rem;
`;

function Experience() {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Experience</ExperienceTitle>
      <UnderBar></UnderBar>
      <ExperieceArea>
        <ExperienceList>
          <ListTitle>
            <div>codestates</div>
            <div>2022.10 ~ 2023.04</div>
          </ListTitle>
          <div>
            <div>프론트엔드 개발자 양성 교육 과정 수료</div>
            <div>React, HTML, CSS, JavaScript 학습</div>
            <div>
              다수의 페어프로그래밍과 팀 프로젝트를 통해 버전 관리 및 개발 프로세스, 커뮤니케이션
              역량 강화
            </div>
            <div>알고리즘 문제 풀이 및 cs 지식 학습</div>
          </div>
        </ExperienceList>
      </ExperieceArea>
    </ExperienceContainer>
  );
}

export default Experience;
