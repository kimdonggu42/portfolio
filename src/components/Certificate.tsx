import styled from "styled-components";
import * as Experience from "./Experience";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CertificateContainer = styled.section`
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

const CertificateTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 8.3rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.mainColor};
`;

function Certificate() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

  return (
    <CertificateContainer data-aos='fade-up'>
      <CertificateTitle>Certificate</CertificateTitle>
      <UnderBar></UnderBar>
      <Experience.ExperieceArea>
        <Experience.ExperienceList>
          <Experience.ListTitle>
            <div className='date'>2020.07</div>
          </Experience.ListTitle>
          <Experience.ListText>
            <div className='subTitle'>데이터분석 준전문가(ADsP)</div>
            <Experience.HiddenListTitle>
              <div className='date'>2020.07</div>
            </Experience.HiddenListTitle>
            <div className='subText'>- 한국데이터산업진흥원</div>
          </Experience.ListText>
        </Experience.ExperienceList>
      </Experience.ExperieceArea>
    </CertificateContainer>
  );
}

export default Certificate;
