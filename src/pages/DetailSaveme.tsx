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
                  Naver Maps API를 활용하여 개발 했으며, 서울시에 위치해 있는 사용자는 본인 주변
                  100개의 공공 화장실의 위치를 확인할 수 있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  현재 자신과 가장 가까운 화장실은 빨간색 테두리의 별도 아이콘으로 표시됩니다.
                  그리고 모든 마커 클릭 시 클릭한 해당 화장실이 위치해 있는 건물 이름 또는 화장실
                  이름을 확인할 수 있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  사용자가 이동 시 좌측 상단의 버튼을 클릭하여 변경된 현재 위치를 다시 불러올 수
                  있으며, 변경된 위치를 기준으로 새로운 화장실들을 보여줍니다.
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
              <Styled.SectionContentSubTitle>지도 렌더링</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Open API(Naver Maps)를 이용하여 현재 내 위치를 중심으로 하는 지도를 생성하고, 내
                  위치를 마커로 표시했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  서울시 공공데이터에서 공중 화장실 데이터를 불러와 나와의 거리를 계산하고 거리가
                  담긴 프로퍼티를 추가하여 데이터를 재가공했습니다. 이를 활용해 나와 제일 가까운
                  위치의 화장실 100개를 지도 위에 마커로 표시해 주었습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>최적화</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  다수의 마커가 지도에 표시될 경우 현재 지도 화면의 좌표 경계를 구하고, 마커 표시
                  유/무를 판별하여 줌이 변경되거나 드래그 이벤트가 발생할 경우 현재 지도에 올라와
                  있는 마커만 보이도록 렌더링 최적화하여 성능 저하를 방지했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>UX 사용성 개선</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  현재 사용자가 있는 위치 정보 요청과 화장실 위치 데이터 요청 상태를 분리하여 현재
                  어떤 데이터를 불러오고 있는지 사용자가 인지할 수 있도록 개선했습니다.
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
                  Naver Maps API를 활용해 지도를 구현해 봄으로써 서비스에 들어가는 지도 기능을
                  어떻게 구현할 수 있는지 학습할 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  프론트엔드는 사용자와 직접 맞닿아 있는 부분으로 이 서비스를 어떤 상황에서 사용하게
                  될지에 대해서 많이 생각해 보며 개발을 진행했습니다. 꼭 필요한 기능이 아니라고
                  생각되는 부분들은 제외하고 사용자 친화적이며 직관적인 UI/UX는 무엇인가에 대해
                  고민해 볼 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Recoil을 처음 사용해 보며 Redux와는 다르게 atom을 이용하여 더 간단한 전역 상태
                  관리의 장점을 느낄 수 있었고, 동시에 Redux와 Recoil이 가지는 각각의 장, 단점을
                  배울 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Firebase Hosting 서비스를 이용하여 배포해 보며 AWS를 이용할 때 보다 더 간단하게 웹
                  서비스를 구축해 볼 수 있었습니다.
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
