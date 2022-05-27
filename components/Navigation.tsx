import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  isDark: Boolean;
  handleSwitch: () => void;
};

const Navigation = ({ isDark, handleSwitch }: Props) => {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenu = () => setMenuToggle(false);

  return (
    <Nav>
      <Title>
        <div className='default'>Barin Debnath</div>
        <div className='route'>{router?.pathname?.slice(1) || "projects"}</div>
      </Title>
      <Toggle isDark={isDark} onClick={handleSwitch} desktop={false} />
      <MenuToggle onClick={() => setMenuToggle(!menuToggle)}>☰</MenuToggle>
      <ButtonGroup as={motion.div} layout menuToggle={menuToggle} initial={{ y: "100vh" }} animate={{ y: 0 }}>
        <Link href='/projects' passHref>
          <NavButtons onClick={handleMenu} active={router.pathname === "/" || router.pathname === "/projects"}>
            Projects
          </NavButtons>
        </Link>
        <Link href='/experience' passHref>
          <NavButtons onClick={handleMenu} active={router.pathname === "/experience"}>
            Experience
          </NavButtons>
        </Link>
        <Link href='/skills' passHref>
          <NavButtons onClick={handleMenu} active={router.pathname === "/skills"}>
            Skills
          </NavButtons>
        </Link>
        <Link href='/education' passHref>
          <NavButtons onClick={handleMenu} active={router.pathname === "/education"}>
            Education
          </NavButtons>
        </Link>
        <Link href='/about' passHref>
          <NavButtons onClick={handleMenu} active={router.pathname === "/about"}>
            About
          </NavButtons>
        </Link>
        <Toggle isDark={isDark} onClick={handleSwitch} desktop={true} />
      </ButtonGroup>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  transition: background 0.5s;
  height: 6rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  .route {
    text-transform: capitalize;
    @media (min-width: 769px) {
      display: none;
    }
  }
  .default {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ButtonGroup = styled(motion.div)<{ menuToggle: Boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  transition: color 0.5s, background 0.5s;

  @media (max-width: 768px) {
    display: ${({ menuToggle }) => (menuToggle ? "flex" : "none")};
    position: absolute;
    flex: 0 0 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.secondary};
    width: 100%;
    align-items: flex-start;
    left: 0;
    top: 68px;
    padding: 0.5rem 2rem;
    height: ${({ menuToggle }) => (menuToggle ? "auto" : "0%")};
    box-shadow: ${({ theme }) => `0 4px ${theme.primary}`};
  }
`;

const NavButtons = styled.a<{ active: boolean }>`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0 0.3rem;
  padding: 0.5rem 1rem;
  transition: color 0.5s, background 0.5s ease-in-out;
  border-radius: 0.25rem;
  text-decoration: "none";
  background-color: ${({ theme, active }) => (active ? theme.hover : "")};

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    text-align: left;
  }
`;

const darkToggle = keyframes`
  from {transform: rotateZ(180deg)}
  to {transform: rotateZ(360deg)}
`;

const lightToggle = keyframes`
  from {transform: rotateZ(180deg)}
  to {transform: rotateZ(0deg)}
`;

const Toggle = styled.button<{ desktop: Boolean; isDark: Boolean }>`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  display: ${({ desktop }) => (desktop ? "block" : "none")};
  animation-name: ${({ isDark }: { isDark: Boolean }) => (isDark ? lightToggle : darkToggle)};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: scale(1.2);

  @media (min-width: 769px) {
    margin: auto 5px auto 1rem;
  }

  @media (max-width: 768px) {
    display: ${({ desktop }) => (desktop ? "none" : "block")};
    margin: auto 1rem;
  }

  &::before {
    display: ${({ isDark }: { isDark: Boolean }) => (isDark ? "block" : "none")};
    content: "";
    position: absolute;
    height: 9px;
    width: 9px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    left: -3px;
    bottom: 0px;
  }
  &::after {
    display: ${({ isDark }: { isDark: Boolean }) => (isDark ? "none" : "block")};
    content: "";
    position: absolute;
    height: 9px;
    width: 9px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    right: -3px;
    top: 1px;
  }
`;

const MenuToggle = styled.button`
  display: none;
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 1.2rem 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  line-height: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
