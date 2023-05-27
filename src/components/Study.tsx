import styled from "styled-components";

const StudyContainer = styled.div`
  border: 1px solid #9384d1;
  padding: 4rem 3rem 4rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

const StudyTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 4.7rem;
  height: 0.3rem;
  margin-top: 0.5rem;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Study() {
  return (
    <StudyContainer>
      <StudyTitle>Study</StudyTitle>
      <UnderBar></UnderBar>
    </StudyContainer>
  );
}

export default Study;
