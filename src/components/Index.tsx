import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import emoji from "../assets/images/emoji.png";

import { FaUser, FaRegUser, FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { BsInboxesFill, BsInboxes, BsPencilFill, BsPencil } from "react-icons/bs";
import { IoSettings, IoSettingsOutline, IoSchool, IoSchoolOutline } from "react-icons/io5";
import { MdFactCheck, MdOutlineFactCheck } from "react-icons/md";
import { SiGithub, SiVelog } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";

const IndexContainer = styled.nav`
  width: 17rem;
  height: 36rem;
  padding: 3rem 1.6rem 3rem 1.6rem;
  position: sticky;
  top: 5rem;
  border-radius: 1.3rem;
  color: white;
  background-color: ${(props) => props.theme.color.mainColor};
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 5rem;
  }
`;

const NameArea = styled.div`
  > .name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  > .dev {
    font-size: 0.8rem;
  }
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  list-style: none;
  row-gap: 0.5rem;
  margin: 2.5rem 0 2.5rem 0;
`;

const MenuList = styled.li`
  display: flex;
  align-items: center;
  width: 10rem;
  height: 2rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  > .el {
    margin-left: 1.1rem;
  }

  &:hover {
    font-size: 1.05rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.5rem;

  > a {
    color: white;

    > .githubIcon {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    > .velogIcon {
      border-radius: 5rem;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const VerWrapper = styled.div`
  /* text-align: right; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 1rem;

  > .copyrightIcon {
    margin: 0.1rem 0.2rem 0 0;
  }
`;

function Index() {
  const [currentMenu, setCurrentMenu] = useState<number>(0);
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 매뉴 선택 이벤트 핸들러
  const selectMenuHandler = (index: number) => {
    setCurrentMenu(index);
  };

  const scrollToIntroduce = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToStack = () => {
    window.scroll({
      top: 608,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    window.scroll({
      top: 1255,
      behavior: "smooth",
    });
  };

  const scrollToExperience = () => {
    window.scroll({
      top: 2066,
      behavior: "smooth",
    });
  };

  // console.log(position);

  return (
    <IndexContainer>
      <ProfileWrapper>
        <img src={emoji} alt='emoji' />
        <NameArea>
          <div className='name'>김동구</div>
          <div className='dev'>FRONTEND DEVELOPER</div>
        </NameArea>
      </ProfileWrapper>
      <MenuWrapper>
        <MenuList
          onClick={() => {
            selectMenuHandler(0);
            scrollToIntroduce();
          }}
        >
          {position <= 607 ? <FaUser /> : <FaRegUser />}
          <span className='el'>Introduce</span>
        </MenuList>
        <MenuList
          onClick={() => {
            selectMenuHandler(1);
            scrollToStack();
          }}
        >
          {position >= 608 && position <= 1254 ? <IoSettings /> : <IoSettingsOutline />}
          <span className='el'>Stack</span>
        </MenuList>
        <MenuList
          onClick={() => {
            selectMenuHandler(2);
            scrollToProjects();
          }}
        >
          {position >= 1255 && position <= 2065 ? <BsInboxesFill /> : <BsInboxes />}
          <span className='el'>Project</span>
        </MenuList>
        <MenuList
          onClick={() => {
            selectMenuHandler(3);
            scrollToExperience();
          }}
        >
          {position >= 2066 ? <FaLightbulb /> : <FaRegLightbulb />}
          <span className='el'>Experience</span>
        </MenuList>
        <MenuList onClick={() => selectMenuHandler(4)}>
          {currentMenu === 4 ? <BsPencilFill /> : <BsPencil />}
          <span className='el'>Study</span>
        </MenuList>
        <MenuList onClick={() => selectMenuHandler(5)}>
          {currentMenu === 5 ? <IoSchool /> : <IoSchoolOutline />}
          <span className='el'>Education</span>
        </MenuList>
        <MenuList onClick={() => selectMenuHandler(6)}>
          {currentMenu === 6 ? <MdFactCheck /> : <MdOutlineFactCheck />}
          <span className='el'>Certificate</span>
        </MenuList>
      </MenuWrapper>
      <LinkWrapper>
        <Link to='https://github.com/kimdonggu42' target='_blank'>
          <SiGithub className='githubIcon' size={30} />
        </Link>
        <Link to='https://velog.io/@donggoo' target='_blank'>
          <SiVelog className='velogIcon' size={30} />
        </Link>
      </LinkWrapper>
      <VerWrapper>
        <BiCopyright className='copyrightIcon' />
        Developed by kimdonggu42
      </VerWrapper>
    </IndexContainer>
  );
}

export default Index;
