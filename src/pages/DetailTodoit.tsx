import styled from "styled-components";

import { MdClose } from "react-icons/md";

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
  font-size: 1rem;
  font-weight: 500;
  word-break: keep-all;
  border-radius: 1.3rem;
  background-color: white;
  width: 90vw;
  height: 90vh;
  max-width: 55rem;
  padding: 1rem 3rem 5rem 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.1);
  overflow: overlay;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 5rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 2rem 5rem 2rem;
  }
`;

const CloseBtnArea = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 1rem;

  > .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const ServiceIntroduceArea = styled.div`
  margin-bottom: 2rem;

  > .title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  > .underbar {
    width: 7rem;
    height: 0.3rem;
    margin: 0.5rem 0 1.5rem 0;
    border-radius: 50px;
    background-color: ${(props) => props.theme.color.mainColor};
  }
`;

const ServiceIntroduceText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const DevelopArea = styled.div`
  margin-bottom: 2rem;

  > .title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  > .underbar {
    width: 7rem;
    height: 0.3rem;
    margin: 0.5rem 0 1.5rem 0;
    border-radius: 50px;
    background-color: ${(props) => props.theme.color.mainColor};
  }
`;

const DevelopText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  > .maintext {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > .lasttext {
    margin-bottom: 1rem;
  }
`;

const GrowingArea = styled.div`
  > .title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  > .underbar {
    width: 7rem;
    height: 0.3rem;
    margin: 0.5rem 0 1.5rem 0;
    border-radius: 50px;
    background-color: ${(props) => props.theme.color.mainColor};
  }
`;

function DetailTodo({ closeProjectModalHandler }: any) {
  return (
    <ModalBack>
      <ModalView>
        <CloseBtnArea>
          <button className='close-btn' onClick={closeProjectModalHandler}>
            <MdClose size={35} />
          </button>
        </CloseBtnArea>
        <ServiceIntroduceArea>
          <div className='title'>🎤 주요 기능</div>
          <div className='underbar'></div>
          <ServiceIntroduceText>
            <div>
              - 사용자는 할 일을 등록, 수정, 삭제할 수 있으며, 완료한 일은 체크하여 완료 표시할 수
              있습니다.
            </div>
            <div>- 등록한 할 일은 전체, 완료, 미완료한 할 일 3가지로 구분하여 볼 수 있습니다</div>
            <div>
              - 등록한 할 일은 오늘을 기준으로 지나간 일, 오늘 할 일, 내일 해야 될 일 3가지로
              구분하여 볼 수 있습니다.
            </div>
          </ServiceIntroduceText>
        </ServiceIntroduceArea>
        <DevelopArea>
          <div className='title'>💻 개발 내용</div>
          <div className='underbar'></div>
          <DevelopText>
            <div className='maintext'>todo CRUD</div>
            <div className='lasttext'>
              - 할 일 등록, 불러오기, 수정, 삭제가 가능하도록 구현했습니다.
            </div>
            <div className='maintext'>완료한 todo 상태관리</div>
            <div className='lasttext'>
              - 완료한 일을 체크할 경우 체크 상태를 로컬 스토리지에 저장하여 유지되도록 했습니다.
            </div>
            <div className='maintext'>반응형 웹</div>
            <div className='lasttext'>
              - 반응형 스타일을 적용하여 다양한 사이즈의 기기에 대응할 수 있도록 했습니다.
            </div>
            <div className='maintext'>다크모드</div>
            <div className='lasttext'>
              - Context API를 이용하여 light, dark 테마를 전역 상태로 관리하여 props drilling 문제를
              방지했습니다.
            </div>
          </DevelopText>
        </DevelopArea>
        <GrowingArea>
          <div className='title'>📈 성장 경험</div>
          <div className='underbar'></div>
          <ServiceIntroduceText>
            <div>
              - 첫 리엑트 프로젝트로 Todo List를 만들어보며 기본적인 CRUD 구현 방법에 대해 학습해 볼
              수 있었습니다.
            </div>
            <div>
              - Context API를 사용하여 다크모드 상태를 관리해 보며 전역적으로 관리되어야 할 상태는
              무엇인지에 대해 생각해 볼 수 있었습니다.
            </div>
          </ServiceIntroduceText>
        </GrowingArea>
      </ModalView>
    </ModalBack>
  );
}

export default DetailTodo;
