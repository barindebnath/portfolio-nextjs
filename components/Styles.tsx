import styled from "styled-components";
import { ExternalLink } from "@styled-icons/heroicons-solid/ExternalLink";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Certificate } from "@styled-icons/fluentui-system-regular/Certificate";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";

export const Title = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  font-size: 3rem;
  margin: 0 0 2rem;
  text-transform: uppercase;
  transition: color 0.5s;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const CardTitle = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  transition: color 0.5s;
`;

export const Details = styled.div`
  margin-bottom: 1rem;
`;

export const SubTitle = styled.small`
  margin: 0;
  color: slategray;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
`;

export const SubText = styled.h3`
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
`;

export const UniversityIconDiv = styled.div`
  border-radius: 0.5rem;
  height: auto !important;
  position: absolute;
  max-width: 7rem;
  bottom: 1rem;
  right: 1rem;
  padding: 0.2rem 0.2rem 0;
  background-color: #fff;
  border-radius: 0.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

//ICONS

export const LogoLink = styled(ExternalLink)`
  height: 2.5rem;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const LogoGitHub = styled(GithubOutline)`
  height: 2.5rem;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const RightButton = styled(ArrowRightCircleFill)<{ disabled: boolean }>`
  color: ${({ theme }) => theme.primary};
  transition: opacity 0.5s;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.hover};
  padding: 0.5rem 1rem;
  height: 40px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const LeftButton = styled(ArrowLeftCircleFill)<{ disabled: boolean }>`
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.hover};
  padding: 0.5rem 1rem;
  height: 40px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const LogoCertificate = styled(Certificate)`
  height: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  transition: color 0.5s;
`;

export const StyledSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;
