import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { LeftButton, LogoGitHub, RightButton } from "../../components/Styles";
import SEO from "../../components/SEO";
import Modal from "../../components/Modal";

//Local assets
import Tattoo from "../../public/Assets/Images/DezignDevilz/Tattoo.png";
import Canvas from "../../public/Assets/Images/DezignDevilz/Canvas.png";
import Vinyl from "../../public/Assets/Images/DezignDevilz/Vinyl.png";
import Website from "../../public/Assets/Images/DezignDevilz/Website.png";
import Print from "../../public/Assets/Images/DezignDevilz/Print.png";
import Contact from "../../public/Assets/Images/DezignDevilz/Contact.png";
import SCOE_Homepage from "../../public/Assets/Images/SCOE/Homepage.png";
import SCOE_About from "../../public/Assets/Images/SCOE/About.png";
import SCOE_Admission from "../../public/Assets/Images/SCOE/Admission.png";
import SCOE_ComputerDept from "../../public/Assets/Images/SCOE/ComputerDept.png";
import SCOE_TP from "../../public/Assets/Images/SCOE/TP.png";
import SCOE_Facility from "../../public/Assets/Images/SCOE/Facility.png";
import Noun from "../../public/Assets/Images/Jvocab/Noun.png";
import Jvocab_Homepage from "../../public/Assets/Images/Jvocab/Home.png";
import Verb from "../../public/Assets/Images/Jvocab/Verb.png";
import Number from "../../public/Assets/Images/Jvocab/Number.png";
import Jvocab_Search from "../../public/Assets/Images/Jvocab/Search.png";
import Adverb from "../../public/Assets/Images/Jvocab/Adverb.png";
import Todo1 from "../../public/Assets/Images/TodoTs/Todo1.png";
import Todo2 from "../../public/Assets/Images/TodoTs/Todo2.png";
import Todo3 from "../../public/Assets/Images/TodoTs/Todo3.png";
import Portfolio1_Home from "../../public/Assets/Images/Portfolio1/Home.png";
import Project from "../../public/Assets/Images/Portfolio1/Project.png";
import Skill from "../../public/Assets/Images/Portfolio1/Skill.png";
import Experience from "../../public/Assets/Images/Portfolio1/Experience.png";
import Education from "../../public/Assets/Images/Portfolio1/Education.png";
import Portfolio1_About from "../../public/Assets/Images/Portfolio1/About.png";
import ProStocker_Home from "../../public/Assets/Images/ProStocker/Home.png";
import ProStocker_Search from "../../public/Assets/Images/ProStocker/Search.png";
import Facebook from "../../public/Assets/Images/ProStocker/Facebook.png";
import Team from "../../public/Assets/Images/ProStocker/Team.png";
import Bajaj from "../../public/Assets/Images/ProStocker/Bajaj.png";
import Footer from "../../public/Assets/Images/ProStocker/Footer.png";

const projectList = [
  {
    title: "DezignDevilz",
    homepage: "https://dezigndevilz.com",
    images: [Vinyl, Tattoo, Canvas, Website, Print, Contact],
    date: "October 2021",
  },
  {
    title: "Japanese Vocabolary",
    github: "https://github.com/barindebnath/jVocab",
    homepage: "https://barindebnath.github.io/jVocab",
    images: [Noun, Verb, Number, Jvocab_Search, Adverb, Jvocab_Homepage],
    date: "July 2021",
  },
  {
    title: "ToDo + Done",
    github: "https://github.com/barindebnath/todo_ts",
    homepage: "https://barindebnath.github.io/todo_ts",
    images: [Todo1, Todo2, Todo3, Todo1, Todo2, Todo3],
    date: "May 2021",
  },
  {
    title: "Portfolio 1",
    github: "https://github.com/barindebnath/portfolio1",
    homepage: "https://barindebnath.github.io/portfolio1",
    images: [Portfolio1_Home, Project, Skill, Experience, Education, Portfolio1_About],
    date: "August 2020",
  },
  {
    title: "Sanghavi College of Engineering",
    homepage: "https://scenashik.org",
    images: [SCOE_Homepage, SCOE_ComputerDept, SCOE_TP, SCOE_Admission, SCOE_Facility, SCOE_About],
    date: "June 2020",
  },
  {
    title: "Pro Stocker",
    homepage: "https://barindebnath.pythonanywhere.com/",
    images: [ProStocker_Home, ProStocker_Search, Facebook, Bajaj, Team, Footer],
    date: "April 2020",
  },
];

const Projects: NextPage = () => {
  const [activeStrip, setActiveStrip] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [clickedStrip, setClickedStrip] = useState<null | number>(null);
  const [modalJustClosed, setModalJustClosed] = useState(false);

  return (
    <SEO title='Projects | Barin Debnath' key='projects'>
      {projectList.map((project, index) => {
        return (
          <ProjectDiv key={project.title} style={{ display: `${currentProject === index ? "flex" : "none"}` }}>
            <StripContainer>
              <Strips>
                {project.images.map((image, idx) => {
                  return (
                    <Strip
                      key={idx}
                      className={activeStrip === idx ? "hoverin" : modalJustClosed ? "cursor-pointer" : ""}
                      onMouseEnter={() => !modalJustClosed && setActiveStrip(idx)}
                      onClick={() => {
                        setActiveStrip(idx);
                        setModalJustClosed(false);
                      }}
                      // onMouseLeave={() => setActiveStrip(clickedStrip || 0)}
                      activeStrip={activeStrip}
                    >
                      <Plus>+</Plus>
                      <div className='content'>
                        {/* <AnimatePresence exitBeforeEnter> */}
                        {activeStrip === idx && (
                          // <motion.div
                          //   layoutId={index.toString() + idx.toString()}
                          // layout='position'
                          // onClick={() => setClickedStrip(idx)}
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // exit={{ scale: 0 }}
                          //   whileHover={{ scale: 1.05 }}
                          // >
                          <StyledImage
                            src={image}
                            placeholder='blur'
                            {...(index === 0 && idx === 0 && { priority: true })}
                            onClick={() => setClickedStrip(idx)}
                            layout='intrinsic'
                          />
                          // </motion.div>
                        )}
                        {/* </AnimatePresence> */}
                      </div>
                    </Strip>
                  );
                })}
              </Strips>
            </StripContainer>
          </ProjectDiv>
        );
      })}

      <ProjectNav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href={projectList[currentProject].homepage}
            target='_blank'
            rel='noreferrer'
            title={projectList[currentProject].title}
            style={{ marginRight: "1rem" }}
          >
            {projectList[currentProject].title}
          </a>
          {projectList[currentProject].github && (
            <a
              href={projectList[currentProject].github}
              target='_blank'
              rel='noreferrer'
              title='Code'
              style={{ marginRight: "1rem" }}
            >
              <LogoGitHub />
            </a>
          )}
        </div>
        <div>
          <span
            style={{ marginRight: "0.6rem" }}
            onClick={() => {
              currentProject > 0 && setCurrentProject(currentProject - 1);
              setActiveStrip(0);
              setClickedStrip(null);
            }}
            title='Previous Project'
          >
            <LeftButton disabled={currentProject <= 0} />
          </span>
          <span
            onClick={() => {
              currentProject < projectList.length - 1 && setCurrentProject(currentProject + 1);
              setActiveStrip(0);
              setClickedStrip(null);
            }}
            title='Next Project'
          >
            <RightButton disabled={currentProject >= projectList.length - 1} />
          </span>
        </div>
      </ProjectNav>
      {clickedStrip !== null && clickedStrip !== undefined && (
        <Modal
          isOpen={Boolean(clickedStrip)}
          layoutId={currentProject.toString() + clickedStrip?.toString()}
          closeModal={() => {
            setClickedStrip(null);
            setModalJustClosed(true);
          }}
        >
          <StyledImage src={projectList[currentProject].images[clickedStrip]} placeholder='blur' />
        </Modal>
      )}
    </SEO>
  );
};

export default Projects;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  @media (min-width: 769px) {
    height: calc(100vh - 12rem);
  }
  @media (max-width: 768px) {
    height: calc(100vh - 12rem);
  }
`;

const StripContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Strips = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  border-radius: 0.5rem;
  @media (min-width: 769px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(12, 1fr);
  }
`;

const Plus = styled.span`
  position: absolute;
  transform: translate(0, -50%);
  @media (min-width: 769px) {
    top: 50%;
    left: calc((100vw - 4rem) / 24);
  }
  @media (max-width: 768px) {
    left: 50%;
    top: calc((100vh - 4rem) / 24);
  }
`;

const Strip = styled.div<{ activeStrip: number }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  color: white;
  transition: background 0.5s;
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
  }
  &.hoverin {
    justify-content: flex-start;
    .content {
      padding: 0 calc((100vw - 4rem) / 24);
    }
    @media (min-width: 769px) {
      grid-column: ${({ activeStrip }) => `${activeStrip + 1} / span 7`};
      padding-left: calc((100vw - 4rem) / 24);
    }
    @media (max-width: 768px) {
      grid-row: ${({ activeStrip }) => `${activeStrip + 1} / span 7`};
      padding-top: calc((100vw - 4rem) / 24);
    }
  }
  &.cursor-pointer {
    cursor: pointer;
  }
  ${(styledComponent) => {
    const { stripR, stripG, stripB } = styledComponent.theme;
    let styles = "";
    for (let i = 1; i < 7; i++) {
      styles += `
        &:nth-child(${i}) {
           background-color: ${
             stripR === 0
               ? `rgb(${i * stripR}, ${i * stripG}, ${i * stripB})`
               : `rgb(${stripR / i}, ${stripG / i}, ${stripB / i})`
           };
        }
      `;
    }

    return css`
      ${styles}
    `;
  }}
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

const ProjectNav = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;
