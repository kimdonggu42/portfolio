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
    padding: 1rem 2rem 4rem 2rem;
  }
`;

const CloseBtnArea = styled.div`
  display: flex;
  justify-content: right;
  position: sticky;
  top: 0;
  padding-top: 1rem;
  background-color: white;
  /* border: 1px solid red; */

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

function DetailMariple({ closeProjectModalHandler }: any) {
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
              - YouTube API를 활용하여 사용자가 YouTube 또는 YouTube Music의 url을 복사/붙여넣기
              하여 플레이리스트를 추가할 수 있습니다.
            </div>
            <div>
              - 마이페이지에서 내 정보(프로필 이미지, 닉네임, 비밀번호)를 수정할 수 있으며, 내가
              작성한 다이어리와 댓글, 좋아요를 누른 다이어리를 확인할 수 있습니다.
            </div>
            <div>
              - 내가 보고 싶은 다이어리를 편하게 찾을 수 있도록 입력한 키워드를 포함하는 다이어리를
              검색해 주는 검색 기능을 지원합니다.
            </div>
          </ServiceIntroduceText>
        </ServiceIntroduceArea>
        <DevelopArea>
          <div className='title'>💻 개발 내용</div>
          <div className='underbar'></div>
          <DevelopText>
            <div className='maintext'>플레이리스트 CRUD</div>
            <div className='lasttext'>
              - YouTube API를 사용하여 사용자가 유튜브 또는 유튜브 뮤직의 URL 추가 시 해당
              영상(음원)의 정보를 불러와 플레이리스트로 추가할 수 있도록 했습니다.
            </div>
            <div className='maintext'>UX 사용성 개선</div>
            <div>
              - 회원가입, 로그인, 다이어리 미입력 부분, 올바른 URL인지 검증 및 중복된 플레이리스트
              추가 방지 등의 상황에서 유효성 검사를 실시하여 사용자가 직관적으로 인지할 수 있도록 각
              상황별 알림이 뜨도록 했습니다.
            </div>
            <div>
              - react lazy를 통해 컴포넌트를 동적으로 import하여 초기 렌더링 지연시간을 기존
              643ms에서 544ms로 감소시켰고, Lighthouse Performance 점수도 76점에서 85점으로 향상
              시켰습니다. 그리고 suspense를 통해 렌더링 완료 전까지 로딩 화면을 사용자에게
              보여줌으로써 시각적인 피드백을 줄 수 있도록 했습니다.
            </div>
            <div className='lasttext'>
              - 반응형 스타일을 적용하여 다양한 사이즈의 기기에 대응할 수 있도록 했습니다.
            </div>
            <div className='maintext'>페이지네이션</div>
            <div>
              - 선택한 태그가 있는 다이어리만 필터링해서 보여줄 경우 페이지네이션 컴포넌트도 필터링
              된 다이어리의 개수에 맞춰 페이지 수가 조절되도록 조건부 렌더링을 적용했습니다.
            </div>
            <div className='lasttext'>
              - 현재 보고 있는 페이지가 몇 번째 페이지인지, 어떤 태그를 골라서 보고 있는지 상태를
              로컬스토리지에 저장해 새로고침 시에도 사용자가 보고 있던 페이지가 유지되도록
              개선했습니다.
            </div>
            <div className='maintext'>다이어리 검색 & 필터링</div>
            <div>
              - 사용자가 입력한 키워드가 다이어리 제목 또는 본문에 포함되는지를 확인하여 포함되어
              있는 다이어리만 보여주도록 검색 기능을 추가했습니다.
            </div>
            <div className='lasttext'>
              - 선택한 태그가 포함되어 있는 다이어리만 필터링해서 볼 수 있도록 했습니다.
            </div>
            <div className='maintext'>다크모드</div>
            <div>
              - Redux Toolkit을 이용하여 light, dark 테마를 전역 상태로 관리하여 props drilling
              문제를 방지했습니다.
            </div>
            <div className='lasttext'>
              - styled-components의 ThemeProvider로 해당 상태를 props로 받아 전역 스타일을
              적용했습니다. 이를 통해 스타일을 하나의 파일에서 관리하여 스타일의 통일성을 유지할 수
              있도록 했습니다.
            </div>
            <div className='maintext'>공통 컴포넌트 모듈화</div>
            <div className='lasttext'>
              - 서비스에 공통적으로 사용되는 Modal, Scroll Top Button, Skeleton, Spinner와 같은
              컴포넌트들을 모듈화하여 전역적으로 사용할 수 있도록 함과 동시에 재사용성과
              유지보수성을 높였습니다.
            </div>
          </DevelopText>
        </DevelopArea>
        <GrowingArea>
          <div className='title'>📈 성장 경험</div>
          <div className='underbar'></div>
          <ServiceIntroduceText>
            <div>
              - 백엔드와의 협업을 통해 커뮤니케이션 능력을 향상시킬 수 있었습니다. API 명세서, 화면
              정의서 등 필요한 명세를 문서화하여 협업하였고, 서로의 분야의 지식을 공유하면서 학습할
              수 있었습니다.
            </div>
            <div>
              - 메인 화면에서 어떤 태그 카테고리를 보고 있었고 몇 번째 페이지의 다이어리를 보고
              있었는지, 마이 페이지에서 어떤 탭에 위치해 있었는지 등의 상태가 사용자의 페이지 이동
              시에 어떻게 유지되어야 자연스러울지 user-flow에 대해 고민해볼 수 있었습니다.
            </div>
            <div>
              - 프로젝트 전체적으로 사용되는 컬러, 폰트 크기/굵기, 테마 등 공통 스타일들을 하나의
              파일에서 관리하고, props를 통해 각 컴포넌트에 적용을 시켜주었습니다. 이를 통해 공통
              스타일 파일에서 수정 시 모든 컴포넌트에 일괄 반영되도록 했으며, 유지 보수성을 높일 수
              있었습니다.
            </div>
            <div>
              - AWS S3를 이용해 클라이언트를 배포하고 Route53으로 도메인 구매 및 호스팅 영역 생성,
              CloudFront를 통해 HTTPS 호스팅 적용과 SPA 배포 시 발생하는 404, 403 에러를 200 응답
              코드로 전환하는 등 최종 배포하기까지의 과정을 직접 구현해 볼 수 있었습니다.
            </div>
          </ServiceIntroduceText>
        </GrowingArea>
      </ModalView>
    </ModalBack>
  );
}

export default DetailMariple;
