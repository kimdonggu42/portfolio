import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import saveme from "../assets/images/saveme.png";
import mariple from "../assets/images/mariple.png";
import Todoit from "../assets/images/Todoit.png";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BsLink } from "react-icons/bs";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";

const ProjectContainer = styled.div`
  padding: 3.5rem 3rem 3.5rem 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
  margin: 0 1rem 0 1rem;
`;

const ProjectTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const UnderBar = styled.div`
  width: 6.3rem;
  height: 0.3rem;
  margin: 0.5rem 0 3rem 0;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.color.mainColor};
`;

const PrevBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 5rem;
  background-color: transparent;
  top: 17rem;
  left: -2.5rem;
  z-index: 999;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const NextBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 5rem;
  background-color: transparent;
  top: 17rem;
  right: -2.5rem;
  z-index: 999;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SlideArea = styled.div`
  word-break: keep-all;
  /* border: 1px solid blue; */
`;

const SlideImg = styled.div`
  width: 49rem;
  height: 20rem;
  margin: auto;
  overflow: hidden;
  border-radius: 1.3rem;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 1.3rem;
    object-fit: cover;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const SlideTextArea = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  margin-top: 0.7rem;
  height: 15rem;
`;

const SlideTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;

  > a {
    display: flex;
    align-items: center;
    color: #454545;

    > .homepageIcon {
      margin-left: 1rem;
      margin-top: 0.25rem;
      cursor: pointer;
      /* border: 1px solid red; */

      &:hover {
        color: gray;
      }
    }

    > p {
      display: none;
      background-color: #222222;
      padding: 6px;
      text-align: center;
      width: 4.5rem;
      position: absolute;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
      font-size: 12px;
      color: white;
      font-weight: 500;
      margin-left: -0.4rem;

      &::before {
        position: absolute;
        content: "";
        border: 5px solid transparent;
        border-bottom-color: #222222;
        top: -10px;
        left: 1.9rem;
      }
    }

    &:hover p {
      top: 23.4rem;
      display: block;
    }
  }
`;

const SlideTag = styled.ul`
  display: flex;
  align-items: center;
  margin: 0.8rem 0 1rem 0;
  column-gap: 0.5rem;
  list-style: none;

  > li {
    font-size: 0.8rem;
    padding: 0.2rem 0.45rem 0.2rem 0.45rem;
    color: ${(props) => props.theme.color.mainColor};
    border-radius: 5rem;
    border: 1px solid ${(props) => props.theme.color.mainColor};
    font-weight: 500;

    &.javaScript {
      color: white;
      background-color: #f7df1e;
      border: 1px solid #f7df1e;
    }

    &.typeScript {
      color: white;
      background-color: #3178c6;
      border: 1px solid #3178c6;
    }

    &.react {
      color: white;
      background-color: #61dafb;
      border: 1px solid #61dafb;
    }

    &.recoil {
      color: white;
      background-color: black;
      border: 1px solid black;
    }

    &.styledComponents {
      color: white;
      background-color: #db7093;
      border: 1px solid #db7093;
    }

    &.redux {
      color: white;
      background-color: #764abc;
      border: 1px solid #764abc;
    }

    &.firebase {
      color: white;
      background-color: #ffca28;
      border: 1px solid #ffca28;
    }

    &.aws {
      color: white;
      background-color: #569a31;
      border: 1px solid #569a31;
    }
  }
`;

const SlideComment = styled.div`
  font-size: 1.1rem;
  color: #3d3f41;

  > .mainText {
    font-weight: 500;
  }
`;

function Project() {
  const PrevArrow = ({ onClick }: any) => {
    return (
      <PrevBtn onClick={onClick} type='button'>
        <GrFormPrevious size={40} />
      </PrevBtn>
    );
  };

  const NextArrow = ({ onClick }: any) => {
    return (
      <NextBtn onClick={onClick} type='button'>
        <GrFormNext size={40} />
      </NextBtn>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <ProjectContainer>
      <ProjectTitle>Projects</ProjectTitle>
      <UnderBar></UnderBar>
      <Slider {...settings}>
        <SlideArea>
          <SlideImg>
            <img src={mariple} alt='mariple' />
          </SlideImg>
          <SlideTextArea>
            <SlideTitle>
              Mariple
              <Link to='https://www.mariple.com/' target='_blank'>
                <BsLink className='homepageIcon' size={25} />
                <p>웹사이트</p>
              </Link>
              <Link to='https://github.com/kimdonggu42/Mariple' target='_blank'>
                <RiGithubFill className='homepageIcon' size={25} />
                <p>깃허브</p>
              </Link>
              <Link
                to='https://www.notion.so/Mariple-d09e017dfb30417384c8aa0107653fe2?pvs=4'
                target='_blank'
              >
                <HiMagnifyingGlassCircle className='homepageIcon' size={25} />
                <p>자세히 보기</p>
              </Link>
            </SlideTitle>
            <SlideTag>
              <li>팀 프로젝트</li>
              <li className='typeScript'>TypeScript</li>
              <li className='react'>React</li>
              <li className='redux'>Redux Toolkit</li>
              <li className='styledComponents'>Styled Components</li>
              <li className='aws'>aws S3</li>
            </SlideTag>
            <SlideComment>
              <p className='mainText'>
                Mariple은 나만의 플레이리스트를 소개하거나 그 플레이리스트에 담겨있는 추억을
                공유하는 블로그와 뮤직 플레이리스트가 결합된 서비스입니다.
              </p>
              <p>
                YouTube API를 사용하여 사용자가 유튜브 또는 유튜브 뮤직의 URL 추가 시 해당
                영상(음원)의 정보를 불러와 플레이리스트로 추가할 수 있도록 했습니다.
              </p>
              <p>
                현재 보고 있는 페이지가 몇 번째 페이지인지, 어떤 태그를 골라서 보고 있는지 상태를
                로컬스토리지에 저장해 새로고침 시에도 사용자가 보고 있던 페이지가 유지되도록
                개선했습니다.
              </p>
            </SlideComment>
          </SlideTextArea>
        </SlideArea>
        <SlideArea>
          <SlideImg>
            <img src={saveme} alt='saveme' />
          </SlideImg>
          <SlideTextArea>
            <SlideTitle>
              saveme
              <Link to='https://save-me-bd34d.web.app/' target='_blank'>
                <BsLink className='homepageIcon' size={25} />
                <p>웹사이트</p>
              </Link>
              <Link to='https://github.com/kimdonggu42/saveme' target='_blank'>
                <RiGithubFill className='homepageIcon' size={25} />
                <p>깃허브</p>
              </Link>
              <Link
                to='https://www.notion.so/saveme-97b2ceaac7204ceca7d5d88cbed908c6?pvs=4'
                target='_blank'
              >
                <HiMagnifyingGlassCircle className='homepageIcon' size={25} />
                <p>자세히 보기</p>
              </Link>
            </SlideTitle>
            <SlideTag>
              <li>개인 프로젝트</li>
              <li className='typeScript'>TypeScript</li>
              <li className='react'>React</li>
              <li className='recoil'>Recoil</li>
              <li className='styledComponents'>Styled Components</li>
              <li className='firebase'>Firebase</li>
            </SlideTag>
            <SlideComment>
              <p className='mainText'>
                saveme는 별도의 검색 없이 바로 내 주변의 공공 화장실을 찾아주는 서비스입니다.
              </p>
              <p>
                Naver Maps API를 활용하여 현재 내 위치를 중심으로 하는 지도를 구현하였고, 한 화면에
                많은 수의 마커가 표시되면 성능 저하가 발생하므로 현재 사용자가 보고 있는 화면 밖에
                있는 마커들은 숨김 처리를 시켜주어 렌더링 성능 저하를 방지했습니다.
              </p>
              <p>
                공공 화장실 데이터를 불러와 나와의 거리를 계산하는 알고리즘을 추가하여 데이터를
                재가공했습니다. 이를 활용해 나와 제일 가까운 위치의 화장실 100개를 지도 위에 마커로
                표시해 주었습니다.
              </p>
            </SlideComment>
          </SlideTextArea>
        </SlideArea>
        <SlideArea>
          <SlideImg>
            <img src={Todoit} alt='todoit' />
          </SlideImg>
          <SlideTextArea>
            <SlideTitle>
              Todo!t
              <Link to='https://github.com/kimdonggu42/sp-todolist-client-react' target='_blank'>
                <RiGithubFill className='homepageIcon' size={25} />
                <p>깃허브</p>
              </Link>
              <Link
                to='https://www.notion.so/Todo-t-4522b7df134942d7aceea8a5c682724a?pvs=4'
                target='_blank'
              >
                <HiMagnifyingGlassCircle className='homepageIcon' size={25} />
                <p>자세히 보기</p>
              </Link>
            </SlideTitle>
            <SlideTag>
              <li>개인 프로젝트</li>
              <li className='javaScript'>JavaScript</li>
              <li className='react'>React</li>
              <li className='recoil'>Context API</li>
              <li className='styledComponents'>Styled Components</li>
            </SlideTag>
            <SlideComment>
              <p className='mainText'>Todo!t은 할 일을 등록하고 관리할 수 있는 서비스입니다.</p>
              <p>
                Context API를 이용하여 light, dark 테마를 전역 상태로 관리하여 props drilling 문제를
                방지했습니다.
              </p>
              <p>반응형 스타일을 적용하여 다양한 사이즈의 기기에 대응할 수 있도록 했습니다.</p>
            </SlideComment>
          </SlideTextArea>
        </SlideArea>
      </Slider>
    </ProjectContainer>
  );
}

export default Project;
