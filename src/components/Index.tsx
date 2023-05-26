import styled from "styled-components";

const IndexContainer = styled.div`
  width: 17rem;
  height: 38rem;
  padding: 1.5rem;
  position: sticky;
  top: 5rem;
  border-radius: 1.3rem;
  color: white;
  background-color: #9384d1;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

function Index() {
  return <IndexContainer>Index Area</IndexContainer>;
}

export default Index;
