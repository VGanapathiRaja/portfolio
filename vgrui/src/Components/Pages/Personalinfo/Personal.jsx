import React from "react";
import styled from "styled-components";
import Profile from "../../../assets/herobanner.png";
import { Typewriter } from "react-simple-typewriter";
import Btn from "../../Button/Btnprimary";

const techCards = [
  "Html",
  "Css / Frameworks",
  "Javascript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Angular",
  "Canva"
];

const skillDetails = [
  {
    title: "Frontend Skills",
    text: "I build responsive, clean, and interactive interfaces using React, JavaScript, HTML, CSS, some frameworks Bootstrap, and modern UI patterns.",
  },
  {
    title: "Backend Skills",
    text: "I create APIs, server-side logic, authentication flows, route handling, and scalable backend structure using Node.js and Express.js.",
  },
  {
    title: "Databases",
    text: "I work with MongoDB and SQL concepts including schemas, collections, queries, relationships, CRUD operations, and data handling.",
  },
  {
    title: "Frameworks & Libraries",
    text: "I use React, Tailwind CSS, Material UI (MUI), Bootstrap, styled-components, React Router, react-simple-typewriter, REST API integration, and reusable component-based architecture.",
  },
];

const education = [

  {
    level: "UG",
    name: "B.Tech / Information Technology",
    year: "2020 Completed",
    text: "I graduated from Christian College of Engineering & Technology, Dindigul, with a CGPA of 7.3. During my college years, I developed strong technical skills through programming, projects, teamwork, and practical learning. ",
  },
  {
    level: "Schooling",
    name: "Higher Secondary Education",
    year: "2016 Completed",
    text: "I built my academic foundation with a strong interest in Bio-Maths and Computer Science, developing logical thinking and creative problem-solving skills.",
  },
  {
    level: "Career Learning",
    name: "MERN Stack Development",
    year: "Full stack Developer",
    text: "I first focused on HTML, CSS, and JavaScript for web development, while also improving my skills in editing tools like Photoshop, Canva, and UI development. After that, I learned React, backend development, databases, and full-stack project building.",
  },
];

export default function Personal() {
  return (
    <Personalsection id="personal">
      <Personalcontainer>
        <Container>
          <ImagePanel>
            <NameBadge>VGR</NameBadge>

            <ProfileImage src={Profile} alt="VGR profile" />

            <ImageBottom>
              <HireQuote>
                "Hire me!., Let's build fast, modern, and user-friendly web experiences together."
              </HireQuote>
              <Btn myBtnName={"Click Here..!"} />
            </ImageBottom>
          </ImagePanel>

          <ContentPanel>
            <SmallTitle>&gt; Hello, I'm</SmallTitle>

            <Typing>
              <Typewriter
                words={[
                  "React Developer",
                  "MERN Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Fullstack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </Typing>

            <IntroText>
              I design and develop full stack web applications with strong frontend visuals,
              backend logic, database handling, and reusable component structure.
            </IntroText>

            <TechGrid>
              {techCards.map((tech, index) => (
                <TechBox key={tech}>
                  <TechNumber>0{index + 1}</TechNumber>
                  <TechName>{tech}</TechName>
                </TechBox>
              ))}
            </TechGrid>

            <DetailsGrid>
              {skillDetails.map((item) => (
                <InfoCard key={item.title}>
                  <InfoTitle>{item.title}</InfoTitle>
                  <InfoText>{item.text}</InfoText>
                </InfoCard>
              ))}
            </DetailsGrid>
          </ContentPanel>
        </Container>
      </Personalcontainer>

      <EducationSection>
        <EducationHeader>
          <SmallTitle>&gt; Learning Journey</SmallTitle>
          <EducationTitle>Schooling & Education</EducationTitle>
        </EducationHeader>

        <EducationGrid>
          {education.map((item, index) => (
            <EducationCard key={item.level}>
              <EduIndex>0{index + 1}</EduIndex>
              <EduLevel>{item.level}</EduLevel>
              <EduName>{item.name}</EduName>
              <EduYear>{item.year}</EduYear>
              <EduText>{item.text}</EduText>
            </EducationCard>
          ))}
        </EducationGrid>
      </EducationSection>

    </Personalsection>
  );
}

const Personalsection=styled.section`

`;
const Personalcontainer = styled.div`
 padding: 70px 40px;
background: #0a0e1a;
@media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

const Container = styled.div`
  width: min(1200px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 0;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid rgba(0, 198, 255, 0.18);
  border-radius: 8px;
  background: #111827;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImagePanel = styled.div`
  position: relative;
  min-height: 760px;
  background: #101827;
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: 540px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const NameBadge = styled.h2`
  position: absolute;
  top: 26px;
  left: 26px;
  z-index: 2;
  margin: 0;
  padding: 10px 18px;
  border: 1px solid rgba(0, 198, 255, 0.45);
  border-radius: 6px;
  background: rgba(10, 14, 26, 0.72);
  color: #ffffff;
  font-size: 34px;
  font-weight: 900;
  letter-spacing: 0;
`;

const ImageBottom = styled.div`
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 26px;
  z-index: 2;
  padding: 20px;
  border-radius: 8px;
  background: rgba(10, 14, 26, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  @media (max-width:768px){
  width: inherit;
  left: 5px;
}
`;

const HireQuote = styled.p`
  margin: 0 0 16px;
  color: #f8fafc;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
`;

const ContentPanel = styled.div`
  min-height: 760px;
  padding: 54px 20px;
  background: #0f172a;

  @media (max-width: 900px) {
    min-height: auto;
    padding: 36px 22px;
  }
`;

const SmallTitle = styled.p`
  margin: 0 0 18px;
  font-size: 18px;
  color: #00c6ff;
  font-weight: 700;
  letter-spacing: 0;
`;

const Typing = styled.div`
  min-height: 44px;
  color: #00c6ff;
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 800;
`;

const IntroText = styled.p`
  max-width: 760px;
  margin: 18px 0 30px;
  color: #cbd5e1;
  font-size: 17px;
  line-height: 1.8;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-bottom: 34px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TechBox = styled.div`
  aspect-ratio: 1/1;
  padding: 18px;
  border-radius: 8px;
  background: #111827;
  border: 1px solid rgba(0, 198, 255, 0.18);
  box-shadow: inset 0 0 30px rgba(0, 198, 255, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  @media (max-width:768px){
  flex-direction: row;
  aspect-ratio: inherit;
  
}
`;

const TechNumber = styled.span`
  color: #00c6ff;
  font-size: 14px;
  font-weight: 800;
`;

const TechName = styled.strong`
  color: #ffffff;
  font-size: 20px;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: #121c31;
  border-left: 4px solid #00c6ff;
`;

const InfoTitle = styled.h3`
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 20px;
`;

const InfoText = styled.p`
  margin: 0;
  color: #b9c4d4;
  line-height: 1.7;
`;

const EducationSection = styled.section`
  padding: 80px 40px;
  background: #080c16;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const EducationHeader = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto 34px;
`;

const EducationTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: clamp(32px, 5vw, 58px);
  @media (max-width: 768px){
   font-size: 24px;
  }
`;

const EducationGrid = styled.div`
  width: min(1200px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  position: relative;
  padding: 30px;
  min-height: 260px;
  border-radius: 8px;
  background: linear-gradient(145deg, #111827, #0f172a);
  border: 1px solid rgba(0, 198, 255, 0.16);
  @media (max-width: 768px){
    padding: 22px;
  }
`;

const EduIndex = styled.span`
  color: rgba(0, 198, 255, 0.28);
  font-size: 54px;
  font-weight: 900;
`;

const EduLevel = styled.p`
  margin: 14px 0 8px;
  color: #00c6ff;
  font-weight: 800;
`;

const EduName = styled.h3`
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 24px;
  @media (max-width: 768px){
     font-size: 18px
  }
`;

const EduYear = styled.p`
  margin: 0 0 16px;
  color: #94a3b8;
  font-weight: 700;
`;

const EduText = styled.p`
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
  @media (max-width: 768px){
   text-align: justify;
   font-size: 16px;
  }
`;