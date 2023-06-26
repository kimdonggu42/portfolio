import * as Styled from "../assets/styles/detailModalStyle";
import { DetailProjectModalInterface } from "../util/type";

import { MdClose } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

function DetailMariple({ closeProjectModalHandler }: DetailProjectModalInterface) {
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
                  로그인 한 사용자는 할 일을 등록, 수정, 삭제할 수 있으며, 완료한 일은 체크하여 완료
                  표시할 수 있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  등록 시 선택한 완료 기한 일에 따라 오늘을 기준으로 지나간 할 일, 오늘 할 일, 해야
                  할 일로 구분하여 볼 수 있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>중요 표시한 할 일은 화면 우측에 별도로 노출되어 강조시켜 줍니다.</div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>

        <Styled.SectionArea>
          <Styled.SectionTitle>💻 개발 내용</Styled.SectionTitle>
          <Styled.SectionTitleBottomLine></Styled.SectionTitleBottomLine>
          <Styled.SectionContentArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>Todo CRUD</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Firestore를 활용하여 사용자가 할 일을 등록, 수정, 삭제 할 수 있도록 구현했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  로그인 시 받은 유저 id를 할 일 등록 시 해당 문서(document)에 추가하고,
                  문서(document)의 유저 id와 현재 로그인 되어 있는 사용자의 유저 id를 비교하여
                  본인이 등록한 데이터만 보이도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  get() 대신 onSnapshot() 메서드를 활용하여 데이터가 변경될 때마다 문서(document)
                  스냅샷을 업데이트하여 실시간으로 DB를 불러오도록 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>회원가입 & 로그인</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Firebase의 Authentication을 활용하여 이메일을 이용한 회원가입, 로그인을
                  구현했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>페이지 라우팅</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  로그인하지 않았을 경우와 잘못된 경로로 접속 시도 시 로그인 페이지로 리다이렉트
                  되도록 했으며, 로그인 되어 있을 경우 회원가입 페이지 또는 로그인 페이지 접속 시도
                  시 루트 페이지(todo 페이지)로 리다이렉트 되도록 라우터 가드를 적용했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>반응형 웹</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  모바일, 태블릿, PC 등 다양한 화면 사이즈에 대응할 수 있도록 반응형 웹으로
                  개발했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>서버 통신 로직 분리</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Todo CRUD, 회원가입, 로그인/로그아웃과 같이 서버와 통신하는 로직을 Custom Hook으로
                  만들어 UI 컴포넌트로부터 분리 및 반복되는 로직을 최소화했습니다.
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
                  기존에 JSON 서버로 개발했던 프로젝트를 Firebase의 Authentication와 Firestore를
                  이용한 리펙토링을 진행하면서 별도의 서버 개발 시간을 줄여 프론트엔드에 더 집중할
                  수 있도록 돕는 유용한 서비스라는 생각이 들었고, 서버리스 개발 능력을 키울 수
                  있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  그동안 사용자가 잘못된 페이지로 접속 시도 시 올바른 경로로 리다이렉트 시켜주는
                  부분을 미처 생각하지 못하고 있었는데 로그인 여부에 따른 루트 페이지 리다이렉트를
                  설정하며 라우트 가드의 중요성을 느끼게 되었습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>
      </Styled.DetailModalView>
    </Styled.DetailModalBack>
  );
}

export default DetailMariple;
