import styled, { keyframes } from "styled-components";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

type PropType = {
  skills: (
    | {
        name: string;
        icon: JSX.Element;
        bgColor: string;
        isDarkBG: boolean;
        image: StaticImageData;
        description: string;
      }
    | {
        name: string;
        icon: JSX.Element;
        bgColor: string;
        isDarkBG: boolean;
        description: string;
        image?: undefined;
      }
  )[];
};

const ParallaxSkills = ({ skills }: PropType) => {
  return (
    <>
      <ParallaxProvider>
        {skills.map((skill, index) => (
          <Section>
            <SkillContainer bgColor={skill.bgColor} isDarkBG={skill.isDarkBG} key={skill.name}>
              <CardContainer translateY={[-15, 50]} speed={2} odd={index % 2 === 1}>
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
      <div style={{ textAlign: "center" }}>
        <a href='https://storyset.com/work'>Work illustrations by Storyset</a>
      </div>
    </>
  );
};

export default ParallaxSkills;

const Section = styled.section`
  @media (min-width: 769px) {
    padding-top: 3rem;
    padding-bottom: 15rem;

    &:not(:first-child) {
      margin-top: 10rem;
    }
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
  padding: 6rem 2rem 1rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#00000040" : "#fffc")};
  border-radius: 6px;
  max-width: 500px;
  position: relative;
  transition: color 0.5s, background 0.5s;
  box-shadow: 0 0 30px #0000002b;

  @media (max-width: 768px) {
    background: transparent;
    max-width: none;
    padding: 0 1rem;
  }
`;

const TitleIcon = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 1.5rem;
  }
`;

const StyledIcon = styled.div<{ color: string }>`
  width: 200px;
  margin: auto;
  color: ${({ color }) => color};

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

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Description = styled.div`
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

const StyledImage = styled(Parallax)<{ odd: boolean }>`
  opacity: ${({ theme }) => (theme.mode === "dark" ? "0.7" : "1")};
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

  @media (max-width: 769px) {
    margin-top: 10rem;
    padding: 1rem;
  }
`;
