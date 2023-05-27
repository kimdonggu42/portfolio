import styled from "styled-components";

const CertificateContainer = styled.div`
  border: 1px solid #9384d1;
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

const CertificateTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 8.3rem;
  height: 0.3rem;
  margin-top: 0.5rem;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Certificate() {
  return (
    <CertificateContainer>
      <CertificateTitle>Certificate</CertificateTitle>
      <UnderBar></UnderBar>
    </CertificateContainer>
  );
}

export default Certificate;
