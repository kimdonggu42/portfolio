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
  padding: 0 3rem 4rem 3rem;
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
  position: sticky;
  top: 0;
  padding-top: 1rem;
  background-color: white;

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

function DetailSaveme({ closeProjectModalHandler }: any) {
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
              - Naver Maps API를 활용하여 개발 했으며, 서울시에 위치해 있는 사용자는 본인 주변
              100개의 공공 화장실의 위치를 확인할 수 있습니다.
            </div>
            <div>
              - 현재 자신과 가장 가까운 화장실은 빨간색 테두리의 별도 아이콘으로 표시됩니다. 그리고
              모든 마커 클릭 시 클릭한 해당 화장실이 위치해 있는 건물 이름 또는 화장실 이름을 확인할
              수 있습니다.
            </div>
            <div>
              - 사용자가 이동 시 좌측 상단의 버튼을 클릭하여 변경된 현재 위치를 다시 불러올 수
              있으며, 변경된 위치를 기준으로 새로운 화장실들을 보여줍니다.
            </div>
          </ServiceIntroduceText>
        </ServiceIntroduceArea>
        <DevelopArea>
          <div className='title'>💻 개발 내용</div>
          <div className='underbar'></div>
          <DevelopText>
            <div className='maintext'>지도 구현</div>
            <div>
              - Naver Maps API를 이용하여 현재 내 위치를 중심으로 하는 지도를 생성하고, 내 위치를
              마커로 표시했습니다.
            </div>
            <div>
              - 서울시 공공데이터에서 공중 화장실 데이터를 불러와 나와의 거리를 계산하고 거리가 담긴
              프로퍼티를 추가하여 데이터를 재가공했습니다. 이를 활용해 나와 제일 가까운 위치의
              화장실 100개를 지도 위에 마커로 표시해 주었습니다.
            </div>
            <div className='lasttext'>
              - axios instance를 생성하여 url, header의 반복 작성을 줄였습니다.
            </div>
            <div className='maintext'>최적화</div>
            <div className='lasttext'>
              - 다수의 마커가 지도에 표시될 경우 현재 지도 화면의 좌표 경계를 구하고, 마커 표시
              유/무를 판별하여 줌이 변경되거나 드래그 이벤트가 발생할 경우 현재 지도에 올라와 있는
              마커만 보이도록 렌더링 최적화하여 성능 저하를 방지했습니다.
            </div>
            <div className='maintext'>UX 사용성 개선</div>
            <div className='lasttext'>
              - 초기 지도 렌더링 시와 사용자 위치 변경으로 인한 지도 리렌더링 시에 현재 내 위치 정보
              요청, 주변 화장실 정보 요청 2단계로 로딩 안내 문구를 세분화하였습니다. 이를 통하여
              사용자가 현재 어떤 정보를 불러오고 있는 상태인지 인지할 수 있도록 했습니다.
            </div>
          </DevelopText>
        </DevelopArea>
        <GrowingArea>
          <div className='title'>📈 성장 경험</div>
          <div className='underbar'></div>
          <ServiceIntroduceText>
            <div>
              - Naver Maps API를 활용해 지도를 구현해 봄으로써 서비스에 들어가는 지도 기능을 어떻게
              구현할 수 있는지 학습할 수 있었습니다.
            </div>
            <div>
              - 프론트엔드는 사용자와 직접 맞닿아 있는 부분으로 이 서비스를 어떤 상황에서 사용하게
              될지에 대해서 많이 생각해 보며 개발을 진행했습니다. 꼭 필요한 기능이 아니라고 생각되는
              부분들은 제외하고 사용자 친화적이며 직관적인 UI/UX는 무엇인가에 대해 고민해 볼 수
              있었습니다.
            </div>
            <div>
              - 최근에 떠오르고 있는 Recoil을 처음으로 사용해 보며 Redux와는 다르게 atom을 이용하여
              더 간단한 전역 상태 관리의 장점을 느낄 수 있었고, 동시에 Redux와 Recoil이 가지는
              각각의 장, 단점을 배울 수 있었습니다.
            </div>
            <div>
              - Firebase Hosting 서비스를 이용하여 배포해 봄으로써 AWS를 이용할 때 보다 더 간단하게
              웹 서비스를 구축해 볼 수 있었습니다.
            </div>
          </ServiceIntroduceText>
        </GrowingArea>
      </ModalView>
    </ModalBack>
  );
}

export default DetailSaveme;
