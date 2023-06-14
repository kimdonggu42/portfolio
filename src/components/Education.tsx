import styled from "styled-components";
import * as Experience from "./Experience";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationContainer = styled.section`
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
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

  return (
    <EducationContainer data-aos='fade-up'>
      <EducationTitle>Education</EducationTitle>
      <UnderBar></UnderBar>
      <Experience.ExperieceArea>
        <Experience.ExperienceList>
          <Experience.ListTitle>
            <div className='date'>2015.03 ~ 2021.02</div>
          </Experience.ListTitle>
          <Experience.ListText>
            <div className='subTitle'>평택대학교</div>
            <Experience.HiddenListTitle>
              <div className='date'>2015.03 ~ 2021.02</div>
            </Experience.HiddenListTitle>
            <div className='subText'>- 통계학 전공</div>
          </Experience.ListText>
        </Experience.ExperienceList>
      </Experience.ExperieceArea>
    </EducationContainer>
  );
}

export default Education;
