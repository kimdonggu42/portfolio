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
                  모임에 대한 일정, 제작할 요리, 요리 금액을 설정하여 원하는 모임을 개최할 수
                  있습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>내 주변에 있는 제주도만의 특색 있는 요리 모임을 찾을 수 있습니다.</div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>모임에 대한 후기를 작성하여 다른 사용자들에게 경험을 공유할 수 있습니다.</div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
          </Styled.SectionContentArea>
        </Styled.SectionArea>

        <Styled.SectionArea>
          <Styled.SectionTitle>💻 개발 내용</Styled.SectionTitle>
          <Styled.SectionTitleBottomLine></Styled.SectionTitleBottomLine>
          <Styled.SectionContentArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>
                모임 탐색 및 선택 페이지
              </Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  Kakao Maps API를 이용하여 현재 내 위치를 중심으로 하는 지도를 생성하고 현재 내
                  위치를 마커로 표시했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  마커 클릭 시 커스텀 한 인포윈도우를 보여주기 위해 kakao.maps.InfoWindow 객체를
                  사용하지 않고 한 개의 커스텀 인포윈도우에서 클릭한 마커의 정보만 바꿔서 보여주는
                  방식으로 구현했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  마커의 정보를 state로 관리하여 사용자가 마커를 클릭할 때마다 state 값이 변경되도록
                  했습니다. 클릭 이벤트 발생 시 해당 마커의 정보로 state를 변경하며 인포윈도우 닫기
                  이벤트 발생 시 state의 값을 초기화 했습니다.
                </div>
              </Styled.SectionContentSubDetail>
            </Styled.SectionContentSubArea>
            <Styled.SectionContentSubArea>
              <Styled.SectionContentSubTitle>모임 상세 페이지</Styled.SectionContentSubTitle>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  클릭한 마커의 id를 state로 관리하여 인포윈도우 클릭 시 해당하는 마커의 정보를
                  보여주는 상세 페이지로 이동하도록 동적 라우팅을 적용했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  상세 페이지에서 useParams hook을 통해 현재 url 파라미터와 동일한 id의 데이터만
                  불러오도록 했습니다.
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
                  비개발직 군(기획자, 디자이너)과 협업을 하며 서로의 업무 영역과 역할을 이해하고
                  존중하는 태도를 배울 수 있었습니다. 기술적으로 해결할 수 있는 부분과 그렇지 않은
                  부분에 대해 함께 논의하며 서비스를 개선해나갔습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  단기간에 기획, 개발, 배포까지 빠르게 MVP를 제작해 보며 최대한 많은 기능을 담는 게
                  아닌, 사용자에게 구체적인 가치를 제공하려고 노력했습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  협업을 효과적으로 수행하게 위하여 Figma를 공동 작업 도구로 사용했습니다. Figma를
                  사용하여 디자인 리소스를 공유하고, 디자인 변경 사항이나 개선 사항에 대한 빠른
                  피드백을 주고받을 수 있었습니다.
                </div>
              </Styled.SectionContentSubDetail>
              <Styled.SectionContentSubDetail>
                <RxDotFilled className='dot' size={25} />
                <div>
                  디자인 시스템을 따라 스타일 요소들을 상수로 관리하여 디자인과 코드의 일관성을
                  유지할 수 있도록 했습니다. 이를 통해 디자이너와 협력하여 디자인 시스템을 개발하고
                  문서화하는 능력을 향상시킬 수 있었습니다.
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
