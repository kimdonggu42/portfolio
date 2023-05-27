import styled from "styled-components";
import Index from "../components/Index";
import Introduce from "../components/Introduce";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Study from "../components/Study";
import Education from "../components/Education";
import Certificate from "../components/Certificate";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  column-gap: 2rem;
  margin: 5rem 1rem 5rem 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 58rem;
  /* width: 928px; */
  row-gap: 2rem;
`;

function Main() {
  return (
    <MainContainer>
      <Index />
      <InfoWrapper>
        <Introduce />
        <Stack />
        <Project />
        <Experience />
        <Study />
        <Education />
        <Certificate />
      </InfoWrapper>
    </MainContainer>
  );
}

export default Main;
