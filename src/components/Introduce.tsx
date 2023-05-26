import styled from "styled-components";

const IntroduceContainer = styled.div`
  height: 37rem;
  padding: 2rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

function Introduce() {
  return <IntroduceContainer>Introduce Area</IntroduceContainer>;
}

export default Introduce;
