import React from "react";
import styled from "styled-components";

const technicalSkills = [
    {
        title: "Frontend",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Styled Components"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST API", "Authentication", "Server Logic"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "SQL Basics", "CRUD", "Schema Design", "Data Handling"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Postman", "NPM"],
    },
];

const personalSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Quick Learning",
    "Time Management",
    "Creative Thinking",
    "Communication",
    "Adaptability",
    "Self Motivation",
];

export default function Skills() {
    return (
        <SkillsWrapper id="skills">
            <SectionHead>
                <SmallTitle>&gt; What I Know</SmallTitle>
                <Title>Skills</Title>
                <SubText>
                    A balanced mix of technical knowledge and personal strengths that help me
                    build clean, useful, and user-focused web applications.
                </SubText>
            </SectionHead>

            <SkillLayout>
                <TechnicalArea>
                    <AreaTitle>Technical Skills</AreaTitle>

                    <TechGrid>
                        {technicalSkills.map((group, index) => (
                            <TechCard key={group.title}>
                                <CardNumber>0{index + 1}</CardNumber>
                                <CardTitle>{group.title}</CardTitle>

                                <SkillList>
                                    {group.skills.map((skill) => (
                                        <SkillItem key={skill}>{skill}</SkillItem>
                                    ))}
                                </SkillList>
                            </TechCard>
                        ))}
                    </TechGrid>
                </TechnicalArea>

                <PersonalArea>
                    <AreaTitle>Personal Skills</AreaTitle>

                    <PersonalGrid>
                        {personalSkills.map((skill) => (
                            <PersonalBadge key={skill}>{skill}</PersonalBadge>
                        ))}
                    </PersonalGrid>

                    <QuoteBox>
                        <QuoteMark>"</QuoteMark>
                        <QuoteText>
                            I believe strong skills are not only about tools, but also about
                            patience, consistency, communication, and the mindset to keep improving.
                        </QuoteText>
                    </QuoteBox>
                </PersonalArea>
            </SkillLayout>
        </SkillsWrapper>
    );
}

const SkillsWrapper = styled.section`
  padding: 90px 40px;
  background:
    radial-gradient(circle at top left, rgba(0, 198, 255, 0.12), transparent 320px),
    #0a0e1a;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const SectionHead = styled.div`
  width: min(1150px, 100%);
  margin: 0 auto 46px;
`;

const SmallTitle = styled.p`
  margin: 0 0 12px;
  color: #00c6ff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(36px, 6vw, 70px);
  line-height: 1;
`;

const SubText = styled.p`
  max-width: 760px;
  margin: 20px 0 0;
  color: #b9c4d4;
  font-size: 17px;
  line-height: 1.8;
`;

const SkillLayout = styled.div`
  width: min(1150px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: 1.3fr 0.85fr;
  gap: 24px;
  align-items: stretch;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const TechnicalArea = styled.div`
  padding: 26px;
  border-radius: 8px;
  background: #0f172a;
  border: 1px solid rgba(0, 198, 255, 0.14);
`;

const PersonalArea = styled.div`
  padding: 26px;
  border-radius: 8px;
  background: linear-gradient(145deg, #111827, #0f172a);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const AreaTitle = styled.h3`
  margin: 0 0 22px;
  color: #ffffff;
  font-size: 26px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const TechCard = styled.div`
  min-height: 250px;
  padding: 24px;
  border-radius: 8px;
  background: #111827;
  border: 1px solid rgba(0, 198, 255, 0.16);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 198, 255, 0.5);
    box-shadow: 0 20px 50px rgba(0, 198, 255, 0.08);
  }
`;

const CardNumber = styled.span`
  color: rgba(0, 198, 255, 0.35);
  font-size: 42px;
  font-weight: 900;
`;

const CardTitle = styled.h4`
  margin: 12px 0 18px;
  color: #00c6ff;
  font-size: 24px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.span`
  padding: 8px 12px;
  border-radius: 6px;
  background: rgba(0, 198, 255, 0.08);
  border: 1px solid rgba(0, 198, 255, 0.18);
  color: #dbeafe;
  font-size: 14px;
  font-weight: 600;
`;

const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalBadge = styled.div`
  min-height: 72px;
  padding: 14px;
  border-radius: 8px;
  background: #0a0e1a;
  border-left: 4px solid #00c6ff;
  color: #f8fafc;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const QuoteBox = styled.div`
  position: relative;
  margin-top: 24px;
  padding: 28px;
  border-radius: 8px;
  background: linear-gradient(145deg, rgba(0, 198, 255, 0.14), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 198, 255, 0.18);
`;

const QuoteMark = styled.span`
  position: absolute;
  top: -14px;
  left: 18px;
  color: #00c6ff;
  font-size: 64px;
  font-weight: 900;
`;

const QuoteText = styled.p`
  margin: 0;
  color: #dbeafe;
  font-size: 16px;
  line-height: 1.8;
`;