import styled from "styled-components";

const ModalBack = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-size: 1rem;
  text-align: center;
  border-radius: 1.3rem;
  background-color: white;
  width: 90vw;
  height: 90vh;
  max-width: 55rem;
  padding: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 450px) {
    padding: 2rem;
  }
`;

function DetailMariple({ closeProjectModalHandler }: any) {
  return (
    <ModalBack>
      <ModalView>
        <button onClick={closeProjectModalHandler}>close</button>
        Mariple modal
      </ModalView>
    </ModalBack>
  );
}

export default DetailMariple;
