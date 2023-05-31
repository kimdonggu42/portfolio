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
  column-gap: 1rem;
  margin: 5rem 0.5rem 5rem 0.5rem;
  /* border: 1px solid red; */

  @media screen and (max-width: 1275px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 58rem;
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
