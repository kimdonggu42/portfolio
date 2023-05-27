import styled from "styled-components";

const IntroduceContainer = styled.div`
  height: 37rem;
  padding: 4rem 3rem 4rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

const IntroduceTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 7.5rem;
  height: 0.3rem;
  margin-top: 0.5rem;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Introduce() {
  return (
    <IntroduceContainer>
      <IntroduceTitle>Introduce</IntroduceTitle>
      <UnderBar></UnderBar>
    </IntroduceContainer>
  );
}

export default Introduce;
