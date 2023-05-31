import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import emoji from "../assets/images/emoji.png";

import { FaUser, FaRegUser, FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { BsInboxesFill, BsInboxes, BsPencilFill, BsPencil } from "react-icons/bs";
import {
  IoSettings,
  IoSettingsOutline,
  IoSchool,
  IoSchoolOutline,
  IoPhonePortrait,
} from "react-icons/io5";
import { MdFactCheck, MdOutlineFactCheck } from "react-icons/md";
import { SiGithub, SiVelog, SiGmail } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";

const IndexContainer = styled.nav`
  width: 17rem;
  height: 36rem;
  font-size: 1rem;
  padding: 3rem 1.6rem 3rem 1.6rem;
  position: sticky;
  top: 5rem;
  border-radius: 1.3rem;
  color: white;
  background-color: ${(props) => props.theme.color.mainColor};
  box-shadow: 0px 6px 15px 0px rgba(74, 99, 231, 0.1);

  @media screen and (max-width: 1275px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 56rem;
    height: 4rem;
    padding: 0 3rem 0 3rem;
    position: static;
    margin-bottom: 1.5rem;
    border-radius: 1.1rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid yellow; */

  > img {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 5rem;

    @media screen and (max-width: 1275px) {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 1275px) {
    justify-content: flex-start;
  }
`;

const NameArea = styled.div`
  > .name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 1275px) {
      font-size: 1.3rem;
      margin-right: 1rem;
      margin-bottom: 0;
    }

    @media screen and (max-width: 450px) {
      display: none;
    }
  }

  > .dev {
    font-size: 0.8rem;

    @media screen and (max-width: 610px) {
      display: none;
    }
  }

  @media screen and (max-width: 1275px) {
    display: flex;
    align-items: center;
  }
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  list-style: none;
  row-gap: 0.5rem;
  margin: 2.5rem 0 2.5rem 0;

  @media screen and (max-width: 1275px) {
    display: none;
  }
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
  /* border: 1px solid red; */

  @media screen and (max-width: 1275px) {
    display: flex;
    align-items: center;
  }
`;

const PhoneIconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  > .phoneIcon {
    color: ${(props) => props.theme.color.mainColor};
    padding: 0.25rem;
  }

  > p {
    display: none;
    background-color: #222222;
    padding: 0.5rem;
    text-align: center;
    position: absolute;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    font-size: 0.7rem;
    color: white;
    font-weight: 500;
    white-space: nowrap;

    &::before {
      position: absolute;
      content: "";
      border: 5px solid transparent;
      border-bottom-color: #222222;
      top: -10px;
      left: 2.95rem;
    }
  }

  &:hover p {
    top: 31.3rem;
    display: block;

    @media screen and (max-width: 1275px) {
      top: 8.5rem;
    }
  }
`;

const MailIconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  background-color: white;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  > .mailIcon {
    color: ${(props) => props.theme.color.mainColor};
    padding: 0.3rem;
  }

  > p {
    display: none;
    background-color: #222222;
    padding: 0.5rem;
    text-align: center;
    position: absolute;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    font-size: 0.7rem;
    color: white;
    font-weight: 500;
    white-space: nowrap;

    &::before {
      position: absolute;
      content: "";
      border: 5px solid transparent;
      border-bottom-color: #222222;
      top: -10px;
      left: 4.45rem;
    }
  }

  &:hover p {
    top: 31.3rem;
    display: block;

    @media screen and (max-width: 1275px) {
      top: 8.5rem;
    }
  }
`;

const GibhubIconArea = styled.div`
  > a {
    color: white;

    > .githubIcon {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    > p {
      display: none;
      background-color: #222222;
      padding: 0.5rem;
      text-align: center;
      position: absolute;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
      font-size: 0.7rem;
      color: white;
      font-weight: 500;
      white-space: nowrap;
      margin-left: -0.7rem;

      &::before {
        position: absolute;
        content: "";
        border: 5px solid transparent;
        border-bottom-color: #222222;
        top: -10px;
        left: 1.35rem;
      }
    }

    &:hover p {
      top: 31.3rem;
      display: block;

      @media screen and (max-width: 1275px) {
        top: 8.5rem;
      }
    }
  }
`;

const BlogIconArea = styled.div`
  > a {
    color: white;

    > .velogIcon {
      border-radius: 5rem;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    > p {
      display: none;
      background-color: #222222;
      padding: 0.5rem;
      text-align: center;
      position: absolute;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
      font-size: 0.7rem;
      color: white;
      font-weight: 500;
      margin-left: -0.3rem;

      &::before {
        position: absolute;
        content: "";
        border: 5px solid transparent;
        border-bottom-color: #222222;
        top: -10px;
        left: 0.95rem;
      }
    }

    &:hover p {
      top: 31.3rem;
      display: block;

      @media screen and (max-width: 1275px) {
        top: 8.5rem;
      }
    }
  }
`;

const VerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 1rem;

  > .copyrightIcon {
    margin: 0.1rem 0.2rem 0 0;
  }

  @media screen and (max-width: 1275px) {
    display: none;
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
      top: 605,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    window.scroll({
      top: 1250,
      behavior: "smooth",
    });
  };

  const scrollToExperience = () => {
    window.scroll({
      top: 2060,
      behavior: "smooth",
    });
  };

  const scrollToStudy = () => {
    window.scroll({
      top: 2400,
      behavior: "smooth",
    });
  };

  const scrollToEducation = () => {
    window.scroll({
      top: 2550,
      behavior: "smooth",
    });
  };

  const scrollToCertificate = () => {
    window.scroll({
      top: 2570,
      behavior: "smooth",
    });
  };

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
          {position <= 604.9 ? <FaUser /> : <FaRegUser />}
          <span className='el'>Introduce</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(1);
            scrollToStack();
          }}
        >
          {position >= 605 && position <= 1249.9 ? <IoSettings /> : <IoSettingsOutline />}
          <span className='el'>Stack</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(2);
            scrollToProjects();
          }}
        >
          {position >= 1250 && position <= 2059.9 ? <BsInboxesFill /> : <BsInboxes />}
          <span className='el'>Project</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(3);
            scrollToExperience();
          }}
        >
          {position >= 2060 && position <= 2399.9 ? <FaLightbulb /> : <FaRegLightbulb />}
          <span className='el'>Experience</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(4);
            scrollToStudy();
          }}
        >
          {position >= 2400 && position <= 2549.9 ? <BsPencilFill /> : <BsPencil />}
          <span className='el'>Study</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(5);
            scrollToEducation();
          }}
        >
          {position >= 2550 && position <= 2569.9 ? <IoSchool /> : <IoSchoolOutline />}
          <span className='el'>Education</span>
        </MenuList>

        <MenuList
          onClick={() => {
            selectMenuHandler(6);
            scrollToCertificate();
          }}
        >
          {position >= 2570 ? <MdFactCheck /> : <MdOutlineFactCheck />}
          <span className='el'>Certificate</span>
        </MenuList>
      </MenuWrapper>
      <LinkWrapper>
        <PhoneIconArea>
          <IoPhonePortrait className='phoneIcon' size={30} />
          <p>010-9039-7962</p>
        </PhoneIconArea>
        <MailIconArea>
          <SiGmail className='mailIcon' size={30} />
          <p>kdonggoo44@gmail.com</p>
        </MailIconArea>
        <GibhubIconArea>
          <Link to='https://github.com/kimdonggu42' target='_blank'>
            <SiGithub className='githubIcon' size={30} />
            <p>Github</p>
          </Link>
        </GibhubIconArea>
        <BlogIconArea>
          <Link to='https://velog.io/@donggoo' target='_blank'>
            <SiVelog className='velogIcon' size={30} />
            <p>Blog</p>
          </Link>
        </BlogIconArea>
      </LinkWrapper>
      <VerWrapper>
        <BiCopyright className='copyrightIcon' />
        Developed by kimdonggu42
      </VerWrapper>
    </IndexContainer>
  );
}

export default Index;
