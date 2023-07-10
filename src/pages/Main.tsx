import styled from "styled-components";
import Index from "../components/Index";
import About from "../components/About";
import Stack from "../components/Stack";
import Project from "../components/Project";
import Experience from "../components/Experience";
// import Activity from "../components/Activity";
// import Education from "../components/Education";
// import Certificate from "../components/Certificate";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin: 5rem 0.5rem 5rem 0.5rem;
  /* border: 1px solid red; */

  @media screen and (max-width: 1275px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0.5rem 2rem 0.5rem;
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
        <About />
        <Stack />
        <Project />
        <Experience />
        {/* <Activity />
        <Education />
        <Certificate /> */}
      </InfoWrapper>
    </MainContainer>
  );
}

export default Main;
