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
  max-height: 100rem;
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

    &:hover {
      opacity: 0.7;
    }
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
              - 로그인 한 사용자는 할 일을 등록, 수정, 삭제할 수 있으며, 완료한 일은 체크하여 완료
              표시할 수 있습니다.
            </div>
            <div>
              - 등록 시 선택한 완료 기한 일에 따라 오늘을 기준으로 지나간 할 일, 오늘 할 일, 해야 할
              일로 구분하여 볼 수 있습니다.
            </div>
            <div>- 중요 표시한 할 일은 화면 우측에 별도로 노출되어 강조시켜 줍니다.</div>
          </ServiceIntroduceText>
        </ServiceIntroduceArea>
        <DevelopArea>
          <div className='title'>💻 개발 내용</div>
          <div className='underbar'></div>
          <DevelopText>
            <div className='maintext'>todo CRUD</div>
            <div>
              - Firestore를 활용하여 사용자가 할 일을 등록, 수정, 삭제 할 수 있도록 구현했습니다.
            </div>
            <div>
              - 로그인 시 받은 유저 id를 할 일 등록 시 해당 문서(document)에 추가하고,
              문서(document)의 유저 id와 현재 로그인 되어 있는 사용자의 유저 id를 비교하여 본인이
              등록한 데이터만 보이도록 했습니다.
            </div>
            <div className='lasttext'>
              - get() 대신 onSnapshot() 메서드를 활용하여 데이터가 변경될 때마다 문서(document)
              스냅샷을 업데이트하여 실시간으로 DB를 불러오도록 했습니다.
            </div>
            <div className='maintext'>회원가입 & 로그인</div>
            <div className='lasttext'>
              - Firebase의 Authentication을 활용하여 이메일을 이용한 회원가입, 로그인을
              구현했습니다.
            </div>
            <div className='maintext'>페이지 라우팅</div>
            <div className='lasttext'>
              - 로그인하지 않았을 경우와 잘못된 경로로 접속 시도 시 로그인 페이지로 리다이렉트
              되도록 했으며, 로그인 되어 있을 경우 회원가입 페이지 또는 로그인 페이지 접속 시도 시
              루트 페이지(todo 페이지)로 리다이렉트 되도록 라우터 가드를 적용했습니다.
            </div>
            <div className='maintext'>반응형 웹</div>
            <div className='lasttext'>
              - 모바일, 태블릿, PC 등 다양한 화면 사이즈에 대응할 수 있도록 반응형 웹으로
              개발했습니다.
            </div>
            <div className='maintext'>서버 통신 로직 분리</div>
            <div className='lasttext'>
              - todo CRUD, 회원가입, 로그인/로그아웃과 같이 서버와 통신하는 로직을 Custom Hook으로
              만들어 UI 컴포넌트로부터 분리 및 반복되는 로직을 최소화했습니다.
            </div>
          </DevelopText>
        </DevelopArea>
        <GrowingArea>
          <div className='title'>📈 성장 경험</div>
          <div className='underbar'></div>
          <ServiceIntroduceText>
            <div>
              - 기존에 JSON 서버로 개발했던 프로젝트를 Firebase의 Authentication와 Firestore를
              이용한 리펙토링을 진행하면서 별도의 서버 개발 시간을 줄여 프론트엔드에 더 집중할 수
              있도록 돕는 유용한 서비스라는 생각이 들었습니다.
            </div>
            <div>
              - 그동안 사용자가 잘못된 페이지로 접속 시도 시 올바른 경로로 리다이렉트 시켜주는
              부분을 미처 생각하지 못하고 있었는데 로그인 여부에 따른 루트 페이지 리다이렉트를
              설정하며 라우트 가드의 중요성을 느끼게 되었습니다.
            </div>
          </ServiceIntroduceText>
        </GrowingArea>
      </ModalView>
    </ModalBack>
  );
}

export default DetailTodo;
