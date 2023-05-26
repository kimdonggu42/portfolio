import styled from "styled-components";

const StudyContainer = styled.div`
  border: 1px solid #9384d1;
  padding: 2rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

function Study() {
  return <StudyContainer>Study Area</StudyContainer>;
}

export default Study;
