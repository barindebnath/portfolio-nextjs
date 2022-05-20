import styled, { keyframes } from "styled-components";
import SEO from "../../components/SEO";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

//LOGOs
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Babel } from "@styled-icons/simple-icons/Babel";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { JsSquare } from "@styled-icons/fa-brands/JsSquare";
import { Storybook } from "@styled-icons/simple-icons/Storybook";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Webpack } from "@styled-icons/simple-icons/Webpack";
import { Yarn } from "@styled-icons/simple-icons/Yarn";
import { Npm } from "@styled-icons/icomoon/Npm";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { Github } from "@styled-icons/bootstrap/Github";
import { LogoBitbucket } from "@styled-icons/ionicons-solid/LogoBitbucket";
import { Trello } from "@styled-icons/icomoon/Trello";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import Lerna from "../../public/Assets/Images/Lerna.png";

//Local assets
// import Unfuddle from "../../public/Assets/Images/unfuddle.svg";
import ReactImage from "../../public/Assets/Images/skills/React.png";
import NextImage from "../../public/Assets/Images/skills/Next.png";
import TypeScriptImage from "../../public/Assets/Images/skills/TypeScript.png";
import JavaScriptImage from "../../public/Assets/Images/skills/JavaScript.png";
import GitImage from "../../public/Assets/Images/skills/Git.png";

const Skills = () => {
  return (
    <SEO title='Skills | Barin Debnath' key='skills'>
      <ParallaxProvider>
        {skills.map((skill, index) => (
          <Section>
            <SkillContainer bgColor={skill.bgColor} isDarkBG={skill.isDarkBG} key={skill.name}>
              <CardContainer translateY={[-30, 30]} odd={index % 2 === 1}>
                <Card>
                  <TitleIcon>
                    <StyledIcon color={skill.bgColor}>{skill.icon}</StyledIcon>
                    <Title>{skill.name}</Title>
                  </TitleIcon>
                  <Description>{skill.description}</Description>
                </Card>
              </CardContainer>
              <StyledImage odd={index % 2 === 1}>
                {skill.image ? (
                  <Image src={skill.image} placeholder='blur' objectFit='contain' layout='intrinsic' />
                ) : (
                  ""
                )}
              </StyledImage>
            </SkillContainer>
          </Section>
        ))}
      </ParallaxProvider>
      <div>
        <a href='https://storyset.com/work'>Work illustrations by Storyset</a>
      </div>
    </SEO>
  );
};

export default Skills;

const Section = styled.section`
  @media (min-width: 769px) {
    padding-top: 15rem;
  }
`;

const SkillContainer = styled.div<{ bgColor: string; isDarkBG: boolean }>`
  color: ${({ theme }) => theme.primary};
  padding: 3rem;
  position: relative;
  background-color: ${({ bgColor }) => bgColor + "3D"};
  border-radius: 6px;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
    padding: 0;
  }
`;

const CardContainer = styled(Parallax)<{ odd: boolean }>`
  display: flex;
  position: relative;
  justify-content: ${({ odd }) => (odd ? "start" : "end")};
  z-index: 1;

  @media (min-width: 769px) {
    min-height: 600px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 6rem 1rem 1rem;
  background: ${({ theme }) => (theme.primary === "#fff" ? "#00000040" : "#fffc")};
  border-radius: 6px;
  max-width: 500px;
  position: relative;
  transition: color 0.5s, background 0.5s;

  @media (max-width: 768px) {
    background: transparent;
    max-width: none;
    padding: 0;
  }
`;

const TitleIcon = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const StyledIcon = styled.div<{ color: string }>`
  width: 200px;
  margin: auto;
  color: ${({ color }) => color};

  /* :after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 1px;
    z-index: -1;
    transform: translate(-100%, -100%);
    box-shadow: 0px 0px 10px 2px #00000047;
  } */

  @media (min-width: 769px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  @media (max-width: 768px) {
    width: 50px;
    margin: auto 1rem auto 0;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const Description = styled.div`
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

const StyledImage = styled(Parallax)<{ odd: boolean }>`
  opacity: ${({ theme }) => (theme.primary === "#fff" ? "0.7" : "1")};
  transition: opacity 0.5s ease-in-out;

  @media (min-width: 769px) {
    position: absolute;
    top: 50%;
    right: ${({ odd }) => (odd ? "0" : "auto")};
    transform: translate(0, -50%);
    padding: 3rem;
    max-height: 500px;
    max-width: 800px;
  }
`;

const skills = [
  {
    name: "React",
    icon: <ReactLogo />,
    bgColor: "#61DBFB",
    isDarkBG: false,
    image: ReactImage,
    description:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
  },
  {
    name: "Next",
    icon: <Nextdotjs />,
    bgColor: "#000000",
    isDarkBG: true,
    image: NextImage,
    description:
      'Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "Building a server-rendered website with Node.js". Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server side.',
  },
  {
    name: "TypeScript",
    icon: <Typescript />,
    bgColor: "#007acc",
    isDarkBG: true,
    image: TypeScriptImage,
    description:
      "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
  },
  {
    name: "JavaScript",
    icon: <JsSquare />,
    bgColor: "#f0db4f",
    isDarkBG: false,
    image: JavaScriptImage,
    description:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.",
  },
  {
    name: "Redux",
    icon: <Redux />,
    bgColor: "#764abc",
    isDarkBG: true,
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
  },
  {
    name: "Styled Components",
    icon: <Styledcomponents />,
    bgColor: "#d96f92",
    isDarkBG: false,
    description:
      "Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications. Styled-components leverage a mixture of JavaScript and CSS using a technique called CSS-in-JS.",
  },
  {
    name: "Git",
    icon: <Git />,
    bgColor: "#F1502F",
    isDarkBG: true,
    image: GitImage,
    description:
      "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
  },
  {
    name: "Material UI",
    icon: <Materialui />,
    bgColor: "#0070E1",
    isDarkBG: true,
    description:
      "MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
  },
  {
    name: "StoryBook",
    icon: <Storybook />,
    bgColor: "#FF4785",
    isDarkBG: true,
    description:
      "Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.",
  },
  {
    name: "Lerna",
    icon: <Image src={Lerna} />,
    bgColor: "#fff",
    isDarkBG: false,
    description:
      "Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.",
  },
  {
    name: "Bitbucket",
    icon: <LogoBitbucket />,
    bgColor: "#2684ff",
    isDarkBG: true,
    description:
      "Bitbucket is a Git-based source code repository hosting service owned by Atlassian. Bitbucket offers both commercial plans and free accounts with an unlimited number of private repositories.",
  },
  // {
  //   name: "Unfuddle",
  //   icon: <Unfuddle />,
  //   bgColor: "#841F1A",
  //   isDarkBG: true,
  // },
  {
    name: "Yarn Workspace",
    icon: <Yarn />,
    bgColor: "#2C8EBB",
    isDarkBG: true,
    description:
      "Workspaces are a new way to set up your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.",
  },
  {
    name: "Babel",
    icon: <Babel />,
    bgColor: "#F9DC3E",
    isDarkBG: false,
    description:
      "Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.",
  },
  {
    name: "GitHub",
    icon: <Github />,
    bgColor: "#24292F",
    isDarkBG: true,
    description:
      "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
  },
  {
    name: "Webpack",
    icon: <Webpack />,
    bgColor: "#8dd6f9",
    isDarkBG: false,
    description:
      "Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.",
  },
  {
    name: "NPM",
    icon: <Npm />,
    bgColor: "#CD0000",
    isDarkBG: true,
    description:
      "npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.",
  },
  {
    name: "Trello",
    icon: <Trello />,
    bgColor: "#0084D1",
    isDarkBG: true,
    description:
      "Trello is a web-based, Kanban-style, list-making application and is developed by Trello Enterprise, a subsidiary of Atlassian. Created in 2011 by Fog Creek Software, it was spun out to form the basis of a separate company in New York City in 2014 and sold to Atlassian in January 2017.",
  },
];
