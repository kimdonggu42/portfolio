import * as Styled from "../assets/styles/detailModalStyle";
import { DetailProjectModalInterface } from "../util/type";

import { MdClose } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

function DetailHankkihaku({ closeProjectModalHandler }: DetailProjectModalInterface) {
  return (
    <Styled.DetailModalBack>
      <Styled.DetailModalView>
        <Styled.CloseBtnArea>
          <Styled.CloseBtn onClick={closeProjectModalHandler}>
            <MdClose size={30} />
          </Styled.CloseBtn>
        </Styled.CloseBtnArea>

        <Styled.SectionArea>
          <Styled.SectionTitle>🎤 주요 기능</Styled.SectionTitle>
          <Styled.SectionTitleBottomLine></Styled.SectionTitleBottomLine>
          <Styled.SectionContentArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  YouTube 또는 YouTube Music의 url을 복사/붙여넣기 하여 플레이리스트를 추가할 수
                  있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  마이페이지에서 내 정보(프로필 이미지, 닉네임, 비밀번호)를 수정할 수 있으며, 내가
                  작성한 다이어리와 댓글, 좋아요를 누른 다이어리를 확인할 수 있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  내가 보고 싶은 다이어리를 편하게 찾을 수 있도록 입력한 키워드를 포함하는
                  다이어리를 찾아주는 검색 기능을 지원합니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>

        <Styled.SectionArea>
          <Styled.SectionTitle>💻 개발 내용</Styled.SectionTitle>
          <Styled.SectionTitleBottomLine></Styled.SectionTitleBottomLine>
          <Styled.SectionContentArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>플레이리스트 CRUD</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Open API(Youtube)를 이용하여 사용자가 추가한 url의 썸네일, 제목, 채널명(가수명)를
                  불러와 플레이리스트를 등록, 수정, 삭제할 수 있도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  사용자가 추가한 전체 url 중 api 요청 시 필요한 id만 정규표현식으로 필터링하여
                  사용자가 id만 정확히 선택하여 복사/붙여넣기 해야 하는 불편함을 줄였습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>페이지네이션</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  별도의 라이브러리 없이 페이지네이션을 직접 구현했으며, 검색, 필터링과 같이 전체
                  데이터의 개수가 변할 때마다 변경된 데이터의 개수에 맞게 조건부 렌더링으로 페이지
                  수가 조절되도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  현재 사용자가 보고 있는 페이지 상태(번호)가 변경될 때마다 로컬스토리지에 저장하여
                  페이지 이동 또는 새로고침 시 초기화되지 않도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>다이어리 검색 & 필터링</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  사용자가 입력한 키워드가 다이어리 제목 또는 본문에 있는지 확인하여 포함되어 있는
                  다이어리만 보여주도록 검색 기능을 추가했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>다크모드</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  공통적으로 사용되는 컬러, 폰트 크기를 한곳에서 관리하여 유지보수성을 향상시켰고,
                  Styled Components의 ThemeProvider를 이용해 불필요한 props drilling 없이 모든
                  컴포넌트에게 효율적으로 스타일 요소를 전달할 수 있도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>UX 사용성 개선</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  react lazy의 dynamic import를 사용해 초기 렌더링 지연시간을 기존 643ms에서 544ms로
                  감소시켰고, Lighthouse Performance 점수도 76점에서 85점으로 향상시켰습니다. 그리고
                  suspense를 통해 렌더링 완료 전까지 로딩 화면을 사용자에게 보여줌으로써 시각적인
                  피드백을 줄 수 있도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  회원가입/로그인 시 서버로부터 받는 response의 응답 코드 별로 메시지를 다르게 하여
                  어떤 부분이 잘못 입력되었는지 사용자가 인지할 수 있게 하였고, 플레이리스트 url
                  추가 시 이미 추가했거나 잘못된 url인 경우에도 상황에 맞는 알림이 발생하도록
                  했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>공통 컴포넌트 모듈화</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  서비스에 공통적으로 사용되는 Modal, Scroll Top Button, Skeleton, Spinner와 같은
                  컴포넌트들을 모듈화하여 전역적으로 사용할 수 있도록 함과 동시에 재사용성과
                  유지보수성을 높였습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>

        <Styled.SectionArea>
          <Styled.SectionTitle>📈 성장 경험</Styled.SectionTitle>
          <Styled.SectionTitleBottomLine></Styled.SectionTitleBottomLine>
          <Styled.SectionContentArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  백엔드와의 협업을 통해 커뮤니케이션 능력을 향상시킬 수 있었습니다. API 명세서,
                  화면 정의서 등 필요한 명세를 문서화하여 협업하였고, 서로의 분야의 지식을
                  공유하면서 학습할 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  메인 화면에서 어떤 태그 카테고리를 보고 있었고 몇 번째 페이지의 다이어리를 보고
                  있었는지, 마이 페이지에서 어떤 탭에 위치해 있었는지 등의 상태가 사용자의 페이지
                  이동 시에 어떻게 유지되어야 자연스러울지 user-flow에 대해 고민해볼 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  프로젝트 전체적으로 사용되는 컬러, 폰트 크기/굵기, 테마 등 공통 스타일들을 하나의
                  파일에서 관리하고, props를 통해 각 컴포넌트에 적용을 시켜주었습니다. 이를 통해
                  공통 스타일 파일에서 수정 시 모든 컴포넌트에 일괄 반영되도록 했으며, 유지 보수성을
                  높일 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  AWS S3를 이용해 클라이언트를 배포하고 Route53으로 도메인 구매 및 호스팅 영역 생성,
                  CloudFront를 통해 HTTPS 호스팅 적용과 SPA 배포 시 발생하는 404, 403 에러를 200
                  응답 코드로 전환하는 등 최종 배포하기까지의 과정을 직접 구현해 볼 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>
      </Styled.DetailModalView>
    </Styled.DetailModalBack>
  );
}

export default DetailHankkihaku;
