import styled from "styled-components";
import DetailMariple from "../pages/DetailMariple";
import DetailSaveme from "../pages/DetailSaveme";
import DetailTodoit from "../pages/DetailTodoit";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import saveme from "../assets/images/saveme.png";
import mariple from "../assets/images/mariple.png";
import Todoit from "../assets/images/Todoit.png";

import mariplePage from "../assets/images/mariple-page.png";
import savemePage from "../assets/images/saveme-page.png";
import todoitPage from "../assets/images/todoit-page.png";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RiGithubFill } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { SiVelog } from "react-icons/si";

const ProjectContainer = styled.div`
  padding: 3rem;
  border-radius: 1.3rem;
  border: none;
  background-color: white;
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
  margin: 0 1rem 0 1rem;

  @media screen and (max-width: 450px) {
    padding: 2rem 2rem 3rem 2rem;
  }
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

const StyledSlider = styled(Slider)`
  /* border: 1px solid red; */
  > .slick-dots.slick-thumb {
    /* border: 1px solid orange; */

    > li {
      width: 3.3rem;
      height: 100%;
      margin: 0;
      /* border: 1px solid green; */

      &.slick-active {
        > a {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
`;

const CustomSlidePage = styled.a`
  display: flex;
  justify-content: center;
  opacity: 0.5;
  /* border: 1px solid red; */

  > img {
    width: 3rem;
    height: 1.8rem;
    object-fit: cover;
    border-radius: 0.3rem;
    /* border: 1px solid blue; */
  }
`;

const PrevBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 5rem;
  background-color: transparent;
  top: 14rem;
  left: -2.4rem;
  z-index: 999;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 450px) {
    left: -2rem;
  }
`;

const NextBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 5rem;
  background-color: transparent;
  top: 14rem;
  right: -2.4rem;
  z-index: 999;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 450px) {
    right: -2rem;
  }
`;

const SlideArea = styled.div`
  word-break: keep-all;
  /* border: 1px solid blue; */
`;

const SlideImg = styled.div`
  width: 49rem;
  margin: auto;
  overflow: hidden;
  border-radius: 1.3rem;
  /* border: 1px solid red; */

  > img {
    width: 100%;
    border-radius: 1.3rem;
    object-fit: cover;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media screen and (max-width: 920px) {
    width: 39rem;
  }

  @media screen and (max-width: 760px) {
    width: 29rem;
  }

  @media screen and (max-width: 600px) {
    width: 19rem;
  }

  @media screen and (max-width: 450px) {
    width: 16rem;
  }
`;

const SlideTextArea = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  margin-top: 0.7rem;
  /* border: 1px solid orange; */
`;

const SlideTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 600;
  column-gap: 1rem;
  /* border: 1px solid red; */

  > a {
    display: flex;
    align-items: center;
    color: #454545;
    text-decoration: none;
    margin-top: 0.1rem;
    cursor: pointer;
    /* border: 1px solid red; */

    > .velog-icon {
      border-radius: 5rem;
    }

    > .link-icon-back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.45rem;
      height: 1.45rem;
      color: white;
      background-color: #454545;
      border-radius: 5rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

const SlideTag = styled.ul`
  display: flex;
  align-items: center;
  margin: 0.8rem 0 1rem 0;
  gap: 0.5rem;
  list-style: none;
  flex-wrap: wrap;
  /* border: 1px solid red; */

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    min-height: 1.6rem;
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
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  /* border: 1px solid skyblue; */

  > div > .mainText {
    font-weight: 600;
  }

  > .detail-project {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    padding-right: 0.35rem;
    color: white;
    background-color: ${(props) => props.theme.color.mainColor};
    border-radius: 5rem;
    margin-top: 0.1rem;
    cursor: pointer;

    > .detail-icon {
      margin-right: 0.2rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

function Project() {
  const [isMaripleModalOpen, setIsMaripleModalOpen] = useState<boolean>(false);
  const [isSavemeModalOpen, setIsSavemeModalOpen] = useState<boolean>(false);
  const [isTodoitModalOpen, setIsTodoitModalOpen] = useState<boolean>(false);

  // Mariple 자세히 보기 모달 오픈 이벤트 핸들러
  const openMaripleModalHandler = () => {
    setIsMaripleModalOpen(!isMaripleModalOpen);
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  };
  // Saveme 자세히 보기 모달 오픈 이벤트 핸들러
  const openSavemeModalHandler = () => {
    setIsSavemeModalOpen(!isSavemeModalOpen);
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
  };

  // 투두잇 자세히 보기 모달 오픈 이벤트 핸들러
  const openTodoitModalHandler = () => {
    setIsTodoitModalOpen(!isTodoitModalOpen);
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  };

  // Mariple 자세히 보기 모달 클로즈 이벤트 핸들러
  const closeMaripleModalHandler = () => {
    setIsMaripleModalOpen(!isMaripleModalOpen);
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  // Mariple 자세히 보기 모달 클로즈 이벤트 핸들러
  const closeSavemeModalHandler = () => {
    setIsSavemeModalOpen(!isSavemeModalOpen);
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  // Mariple 자세히 보기 모달 클로즈 이벤트 핸들러
  const closeTodoitModalHandler = () => {
    setIsTodoitModalOpen(!isTodoitModalOpen);
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <PrevBtn onClick={onClick} type='button'>
        <GrFormPrevious size={35} />
      </PrevBtn>
    );
  };

  const NextArrow = ({ onClick }: any) => {
    return (
      <NextBtn onClick={onClick} type='button'>
        <GrFormNext size={35} />
      </NextBtn>
    );
  };

  const slidePageArr = [mariplePage, savemePage, todoitPage];

  const settings = {
    customPaging: (i: number) => {
      return (
        <CustomSlidePage>
          <img src={slidePageArr[i]} alt='move-project' />
        </CustomSlidePage>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  });

  return (
    <section>
      <ProjectContainer data-aos='fade-up'>
        <ProjectTitle>Projects</ProjectTitle>
        <UnderBar></UnderBar>
        <StyledSlider {...settings}>
          <SlideArea>
            <SlideImg>
              <img src={mariple} alt='mariple' />
            </SlideImg>
            <SlideTextArea>
              <SlideTitle>
                <div className='project-title'>Mariple</div>
                <Link to='https://www.mariple.com/' target='_blank'>
                  <div className='link-icon-back'>
                    <BiLink className='homepageIcon' size={17} />
                  </div>
                </Link>
                <Link to='https://github.com/kimdonggu42/Mariple' target='_blank'>
                  <RiGithubFill className='homepageIcon' size={28} />
                </Link>
                <Link
                  to='https://velog.io/@donggoo/series/Team-Project-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%9E%91%EC%9D%80-%EC%9D%8C%EC%95%85-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC'
                  target='_blank'
                >
                  <SiVelog className='velog-icon' size={24} />
                </Link>
              </SlideTitle>
              <SlideTag>
                <li>팀 프로젝트 BE 2, FE 1</li>
                <li>2023.04 ~ 2023.05</li>
                <li className='typeScript'>TypeScript</li>
                <li className='react'>React</li>
                <li className='redux'>Redux Toolkit</li>
                <li className='styledComponents'>Styled Components</li>
                <li className='aws'>AWS</li>
              </SlideTag>
              <SlideComment>
                <div>
                  <span className='mainText'>
                    Mariple은 나만의 플레이리스트를 소개하거나 플레이리스트에 담겨있는 추억을
                    공유하는 블로그와 뮤직 플레이리스트가 결합된 서비스
                  </span>
                  입니다. 음악을 들으면 그 음악을 들었을 때의 추억이 생각나고 음악에 담긴 각자의
                  이야기가 하나씩은 있을 것이라고 생각했고, 그 이야기를 나눌 수 있는 공간이 있었으면
                  하는 생각에 진행한 프로젝트입니다.
                </div>
                <div className='detail-project' onClick={openMaripleModalHandler}>
                  <RxMagnifyingGlass className='detail-icon' size={18} />
                  <div className='detail-text'>자세히 보기</div>
                </div>
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
                  <div className='link-icon-back'>
                    <BiLink className='homepageIcon' size={17} />
                  </div>
                </Link>
                <Link to='https://github.com/kimdonggu42/saveme' target='_blank'>
                  <RiGithubFill className='homepageIcon' size={28} />
                </Link>
                <Link to='https://velog.io/@donggoo/series/Solo-Project-saveme' target='_blank'>
                  <SiVelog className='velog-icon' size={24} />
                </Link>
              </SlideTitle>
              <SlideTag>
                <li>개인 프로젝트</li>
                <li>2023.05</li>
                <li className='typeScript'>TypeScript</li>
                <li className='react'>React</li>
                <li className='recoil'>Recoil</li>
                <li className='styledComponents'>Styled Components</li>
                <li className='firebase'>Firebase</li>
              </SlideTag>
              <SlideComment>
                <div>
                  <span className='mainText'>
                    saveme는 Naver Maps API를 이용하여 제작한 별도의 검색 없이 바로 내 주변의 공공
                    화장실을 찾아주는 웹 애플리케이션
                  </span>
                  입니다. 일반적인 지도 서비스들은 실행 후 별도의 조작이 필요하지만, 외부에서 갑자기
                  화장실이 급할 때 내가 별도의 조작을 하지 않아도 바로 주변의 화장실을 찾아 주면
                  좋을 것 같다는 생각이 들어 개발하게 되었습니다.
                </div>
                <div className='detail-project' onClick={openSavemeModalHandler}>
                  <RxMagnifyingGlass className='detail-icon' size={18} />
                  <div className='detail-text'>자세히 보기</div>
                </div>
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
                  <RiGithubFill className='homepageIcon' size={28} />
                </Link>
                <Link
                  to='https://velog.io/@donggoo/series/Solo-Project-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%82%98%EB%A7%8C%EC%9D%98-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0'
                  target='_blank'
                >
                  <SiVelog className='velog-icon' size={24} />
                </Link>
              </SlideTitle>
              <SlideTag>
                <li>개인 프로젝트</li>
                <li>2023.01 ~ 2023.02</li>
                <li className='javaScript'>JavaScript</li>
                <li className='react'>React</li>
                <li className='recoil'>Context API</li>
                <li className='styledComponents'>Styled Components</li>
              </SlideTag>
              <SlideComment>
                <div>
                  <span className='mainText'>
                    Todo!t은 할 일을 등록하고 관리할 수 있는 웹 애플리케이션
                  </span>
                  입니다.
                </div>
                <div className='detail-project' onClick={openTodoitModalHandler}>
                  <RxMagnifyingGlass className='detail-icon' size={18} />
                  <div className='detail-text'>자세히 보기</div>
                </div>
              </SlideComment>
            </SlideTextArea>
          </SlideArea>
        </StyledSlider>
      </ProjectContainer>
      {isMaripleModalOpen ? (
        <DetailMariple closeProjectModalHandler={closeMaripleModalHandler} />
      ) : null}
      {isSavemeModalOpen ? (
        <DetailSaveme closeProjectModalHandler={closeSavemeModalHandler} />
      ) : null}
      {isTodoitModalOpen ? (
        <DetailTodoit closeProjectModalHandler={closeTodoitModalHandler} />
      ) : null}
    </section>
  );
}

export default Project;
