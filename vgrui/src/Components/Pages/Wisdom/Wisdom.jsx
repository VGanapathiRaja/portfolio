import React from "react";
import styled, { keyframes } from "styled-components";

const experiences = [
  {
    company: "Third Organization",
    role: "Senior Developer & Teach Lead",
    companyName: "SoftLogic Sysytem",
    period: "2025 - Present",
    summary: "Focused on scalable architecture, accessible and reusable design systems, polished UI, secure server integration, SEO optimization, and developing CMS and LMS solutions.",
  },

  {
    company: "Second Organization",
    companyName: "Innovate Technology",
    role: "React Developer",
    period: "2023 - 2025",
    summary: "Created responsive React websites, integrated REST APIs, developed interactive dashboards, and optimized user experience to deliver high-performing digital marketing solutions.",
  },
  {
    company: "First Organization",
    companyName: "Muthu soft Lap.pvt.lmt",
    role: "Frontend & Web Developer",
    period: "2021 - 2022",
    summary: "Develop and Built responsive websites using HTML, CSS, JavaScript, and PHP, with clean layouts, interactive user interfaces, and maintainable code..",
  },

];

export default function Wisdom() {
  return (
    <Section id="experience">
      <SmallTitle>&gt; My Wisdom</SmallTitle>
      <Title>  Experience</Title>
      <SubText>
        A balanced mix of technical knowledge and personal strengths that help me
        build clean, useful, and user-focused web applications.
      </SubText>
      <Timeline>
        <LampLine>
          <LampHead />
          <Glow />
          <Pole />
          <Base />
        </LampLine>

        {experiences.map((item, index) => (
          <Row key={item.company} $right={index === 1}>
            <Dot />

            <FlipCard>
              <FlipInner>
                <FlipFace>
                  <Period>{item.period}</Period>
                  <Company>{item.company}</Company>
                  <Companyname>{item.companyName}</Companyname>
                  <Role>{item.role}</Role>
                  <Text>{item.summary}</Text>
                </FlipFace>

                <FlipFace $back>
                  <Period $dark>Highlights</Period>
                  <Company>{item.company}</Company>
                  <Companyname>{item.companyName}</Companyname>
                  <Role $dark>{item.role}</Role>
                  <Text>{item.back || item.summary}</Text>
                </FlipFace>
              </FlipInner>
            </FlipCard>
          </Row>
        ))}
      </Timeline>
    </Section>
  );
}

const pulse = keyframes`
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.08);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 90px 40px;
  background: linear-gradient(135deg, #10151f, #172233, #10151f);
  color: #f8fafc;

  @media (max-width: 678px){
    padding: 60px 0;
  }
`;

const SmallTitle = styled.p`
color:#00C6FF;
font-size:15px;
letter-spacing:3px;
font-weight:600;
margin-bottom:18px;
text-align: center
`;


const Title = styled.h2`
  margin: 0 0 30px;
  text-align: center;
  font-size: clamp(36px, 6vw, 70px);
`;

const SubText = styled.p`
  margin: 10px 0 50px 0;
  color: #b9c4d4;
  font-size: 17px;
  line-height: 1.8;
  text-align: center;
  @media (max-width: 800px) {
  padding: 10px 15px
  }

`;

const Timeline = styled.div`
  position: relative;
  width: min(1050px, 100%);
  margin: 0 auto;
`;

const LampLine = styled.div`
  position: absolute;
  inset: 0 auto 0 50%;
  width: 90px;
  transform: translateX(-50%);
  pointer-events: none;

  @media (max-width: 800px) {
    display: none;
  }
`;

const LampHead = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 84px;
  height: 28px;
  border-radius: 28px 28px 10px 10px;
  background: linear-gradient(#fff4c4, #f7b84b);
  box-shadow: 0 0 30px rgba(255, 217, 120, 0.9);
  transform: translateX(-50%);
`;

const Glow = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 217, 120, 0.35), transparent 70%);
  animation: ${pulse} 3s ease-in-out infinite;
`;

const Pole = styled.div`
  position: absolute;
  top: 25px;
  bottom: 35px;
  left: 50%;
  width: 6px;
  border-radius: 999px;
  background: linear-gradient(#ffe199, #9aa4b2, #4b5563);
  transform: translateX(-50%);
`;

const Base = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 74px;
  height: 34px;
  border-radius: 12px 12px 6px 6px;
  background: linear-gradient(#9aa4b2, #374151);
  transform: translateX(-50%);
`;

const Row = styled.article`
  position: relative;
  display: flex;
  justify-content: ${({ $right }) => ($right ? "flex-end" : "flex-start")};
  min-height: 260px;
  margin-bottom: 45px;
  perspective: 1200px;

  @media (max-width: 800px) {
    justify-content: flex-start;
    min-height: auto;
    padding-left: 20px;
  }
`;

const Dot = styled.span`
  position: absolute;
  top: 36px;
  left: 50%;
  z-index: 2;
  width: 24px;
  height: 24px;
  border: 5px solid #10151f;
  border-radius: 50%;
  background: #ffd978;
  box-shadow: 0 0 30px rgba(255, 217, 120, 0.7);
  transform: translateX(-50%);

  @media (max-width: 800px) {
    left: 15px;
    top: 30px
  }
`;

const Card = styled.div`
  width: min(600px, calc(50% - 75px));
  min-height: 220px;
  padding: 28px;
  border: 1px solid rgba(226, 232, 240, 0.16);
  border-radius: 8px;
  background: ${({ $back }) =>
    $back ? "linear-gradient(145deg, #ffd978, #909395)" : "rgba(15, 23, 42, 0.76)"};
  color: ${({ $back }) => ($back ? "#172033" : "#909395")};
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  backface-visibility: hidden;

  @media (max-width: 800px) {
    width: 100%;
    padding: 25px 15px;
  }
`;

const FlipCard = styled.div`
  width: min(430px, calc(50% - 75px));
  min-height: 260px;
  perspective: 1400px;

  &:hover > div {
    transform: rotateY(180deg);
  }

  @media (max-width: 800px) {
    width: 98%;
    min-height: 420px;
  }
`;

const FlipInner = styled.div`
  position: relative;
  width: 100%;
  min-height: 260px;
  transform-style: preserve-3d;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
   @media (max-width: 800px) {
    min-height: 430px;
  }
`;

const FlipFace = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: 320px;
  padding: 28px;
  border: 1px solid rgba(226, 232, 240, 0.16);
  border-radius: 8px;
  background: ${({ $back }) =>
    $back
      ? "linear-gradient(145deg, #ffd978, #f8fafc)"
      : "rgba(15, 23, 42, 0.76)"};
  color: ${({ $back }) => ($back ? "#172033" : "#909395")};
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  backface-visibility: hidden;
  transform: ${({ $back }) => ($back ? "rotateY(180deg)" : "rotateY(0deg)")};

   @media (max-width: 800px) {
    width: 100%;
    padding: 25px 15px;
    min-height: 350px;
  }


`;

const Period = styled.p`
  margin: 0 0 12px;
  color: ${({ $dark }) => ($dark ? "#6c4b00" : "#ffd978")};
  font-weight: 800;
`;

const Company = styled.h3`
  margin: 0 0 8px;
  font-size: 1.3rem;
`;
const Companyname = styled.h4`
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
`;
const Role = styled.p`
  margin: 0 0 14px;
   color: ${({ $dark }) => ($dark ? "#161103" : "#d7dee9")};
  font-weight: 700;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.7;
`;