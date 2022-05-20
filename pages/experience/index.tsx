import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Js } from "@styled-icons/fa-brands/Js";
import { CardHeader, CardTitle, Details, LogoLink, SubText, SubTitle, Title } from "../../components/Styles";
import SEO from "../../components/SEO";

const Experience = () => {
  const experienceList = [
    {
      title: "React.js Developer",
      company: "AdroitCoders",
      date: "Sep 2021 - Present",
      location: "Nashik, Maharashtra, India",
      technology: "React.js, TypeScript, StoryBook, Redux, Lerna, Yarn Monorepo, GitHub",
      homepage: "https://adroitcoders.com",
      logo: <ReactLogo />,
    },
    {
      title: "React.js Developer",
      company: "AxelBuzz Tech Solutions",
      date: "Dec 2020 - Sep 2021 (9 Months)",
      location: "Nashik, Maharashtra, India",
      technology: "React.js, JavaScript, jQuery, Bootstrap4, BitBucket",
      homepage: "https://axelbuzz.com",
      logo: <ReactLogo />,
    },
    {
      title: "Frontend Developer",
      company: "Puspendu Studio",
      date: "Sep 2019 - Aug 2020 (1 Year)",
      location: "Nashik, Maharashtra, India",
      technology: "CSS3, Bootstrap4, JavaScript, jQuery, HTML5",
      homepage: "https://puspendustudio.com",
      logo: <Js />,
    },
  ];

  return (
    <SEO title='Experience | Barin Debnath' key='experience'>
      <Title>EXPERIENCE</Title>

      {experienceList.length
        ? experienceList.map((experience) => {
            return (
              <div key={experience.company}>
                <CardHeader>
                  <CardTitle className='vertical-timeline-element-title'>{experience.title}</CardTitle>
                  <a href={experience.homepage} target='_blank' rel='noreferrer' title={experience.company}>
                    <LogoLink />
                  </a>
                </CardHeader>
                <Details>
                  <SubTitle>Company</SubTitle>
                  <SubText>{experience.company}</SubText>
                </Details>
                <Details>
                  <SubTitle>Location</SubTitle>
                  <SubText>{experience.location}</SubText>
                </Details>
                <Details>
                  <SubTitle>Technologies</SubTitle>
                  <SubText>{experience.technology}</SubText>
                </Details>
              </div>
            );
          })
        : null}
    </SEO>
  );
};

export default Experience;
