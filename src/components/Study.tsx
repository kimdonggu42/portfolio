import styled from "styled-components";
import * as Experience from "./Experience";

const StudyContainer = styled.div`
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
  margin: 0 1rem 0 1rem;
`;

const StudyTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 4.7rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Study() {
  return (
    <StudyContainer>
      <StudyTitle>Study</StudyTitle>
      <UnderBar></UnderBar>
      <Experience.ExperieceArea>
        <Experience.ExperienceList>
          <Experience.ListTitle>
            <div className='main'>알고리즘 스터디</div>
            <div className='date'>2022.11 ~ 진행중</div>
          </Experience.ListTitle>
          <Experience.ListText>
            <div className='subTitle'>프로그래머스 알고리즘 문제 풀이 스터디</div>
            <div className='subText'>- 4인 스터디, 각자의 풀이 방법 발표 및 피드백</div>
            <div className='subText'>- 기본적인 정렬 알고리즘에 대한 이해</div>
            <div className='subText'>
              - 모든 값을 살펴봐야 하는 검색 알고리즘 구현 시 O(log n)의 시간 복잡도를 가지는 이진
              탐색의 효율성에 대해 학습
            </div>
          </Experience.ListText>
        </Experience.ExperienceList>
      </Experience.ExperieceArea>
    </StudyContainer>
  );
}

export default Study;
