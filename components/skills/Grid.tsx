import styled from "styled-components";

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

const Grid = ({ skills }: PropType) => {
  return (
    <GridContainer>
      {Array.isArray(skills) &&
        skills.length &&
        skills.map((skill) => (
          <GridCard key={skill.name} bgColor={skill.bgColor} isDarkBG={skill.isDarkBG}>
            <div style={{ textAlign: "center" }}>
              <div style={{ maxWidth: "3rem", margin: "0 auto 0.4rem", minHeight: "42px" }}>{skill.icon}</div>
              {skill.name}
            </div>
          </GridCard>
        ))}
    </GridContainer>
  );
};
export default Grid;

const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  grid-gap: 2rem;
  grid-auto-flow: dense;
  padding-bottom: 2rem;
`;
const GridCard = styled.div<{ bgColor: string; isDarkBG: boolean }>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ isDarkBG }) => (isDarkBG ? "#fff" : "#000")};
  border-radius: 1rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);

  /*Center number in cards*/
  display: flex;
  align-items: center;
  justify-content: center;
`;
