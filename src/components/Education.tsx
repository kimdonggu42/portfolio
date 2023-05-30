import styled from "styled-components";
import * as Experience from "./Experience";

const EducationContainer = styled.div`
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

const EducationTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 7.9rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Education() {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <UnderBar></UnderBar>
      <Experience.ExperieceArea>
        <Experience.ExperienceList>
          <Experience.ListTitle>
            <div className='date'>2015.03 ~ 2021.02</div>
          </Experience.ListTitle>
          <Experience.ListText>
            <div className='subTitle'>평택대학교</div>
            <div className='subText'>- 통계학 전공</div>
          </Experience.ListText>
        </Experience.ExperienceList>
      </Experience.ExperieceArea>
    </EducationContainer>
  );
}

export default Education;
