import styled from "styled-components";

export const DetailModalBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const DetailModalView = styled.div`
  font-size: 1rem;
  font-weight: 500;
  word-break: keep-all;
  width: 90vw;
  height: 90vh;
  max-width: 55rem;
  max-height: 100rem;
  padding: 0 3rem 2rem 3rem;
  border-radius: 1.3rem;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.1);
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 5rem;
  }

  @media screen and (max-width: 450px) {
    padding: 0 2rem 2rem 2rem;
  }
`;

export const CloseBtnArea = styled.div`
  display: flex;
  justify-content: right;
  position: sticky;
  top: 0;
  padding-top: 1rem;
  background-color: white;
  /* border: 1px solid red; */
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
`;

export const SectionArea = styled.div`
  margin-bottom: 2rem;
  /* border: 1px solid blue; */
`;

export const SectionTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const SectionTitleBottomLine = styled.div`
  width: 7rem;
  height: 0.3rem;
  margin: 0.5rem 0 1rem 0;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const SectionContentArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  line-height: 1.5;
  /* border: 1px solid red; */
`;

export const SectionContentSubArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  /* border: 1px solid lime; */
`;

export const SectionContentSubTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  /* border: 1px solid blue; */
`;

export const SectionContentSubDetail = styled.div`
  display: flex;
  column-gap: 0.5rem;
  /* border: 1px solid skyblue; */

  > .dot {
    min-width: 1rem;
    max-width: 1rem;
  }
`;
