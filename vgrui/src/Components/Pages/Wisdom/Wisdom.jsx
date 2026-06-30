import React from "react";
import styled, { keyframes } from "styled-components";

const experiences = [
    {
        company: "First Organization",
        role: "Frontend Developer",
        period: "2022 - 2023",
        summary: "Built responsive React UI, reusable components, and clean frontend layouts.",
    },
    {
        company: "Second Organization",
        role: "React Developer",
        period: "2023 - 2024",
        summary: "Created dashboards, integrated APIs, and improved user experience flows.",
    },
    {
        company: "Third Organization",
        role: "Senior Frontend Developer",
        period: "2024 - Present",
        summary: "Led frontend delivery, mentored developers, and built scalable React systems.",
        back: "Focused on architecture, accessibility, reusable design systems, and polished UI.",
    },
];

export default function Wisdom() {
    return (
        <Section id="experience">
            <Title>Experience</Title>

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

                        {index === 2 ? (
                            <FlipCard>
                                <FlipInner>
                                    <Card>
                                        <Period>{item.period}</Period>
                                        <Company>{item.company}</Company>
                                        <Role>{item.role}</Role>
                                        <Text>{item.summary}</Text>
                                    </Card>

                                    <Card $back>
                                        <Period $dark>Highlights</Period>
                                        <Company>{item.role}</Company>
                                        <Text>{item.back}</Text>
                                    </Card>
                                </FlipInner>
                            </FlipCard>
                        ) : (
                            <Card>
                                <Period>{item.period}</Period>
                                <Company>{item.company}</Company>
                                <Role>{item.role}</Role>
                                <Text>{item.summary}</Text>
                            </Card>
                        )}
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

const Title = styled.h2`
  margin: 0 0 70px;
  text-align: center;
  font-size: clamp(2.4rem, 5vw, 4.5rem);
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
    left: 28px;
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
    padding-left: 70px;
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
    left: 28px;
  }
`;

const Card = styled.div`
  width: min(430px, calc(50% - 75px));
  min-height: 220px;
  padding: 28px;
  border: 1px solid rgba(226, 232, 240, 0.16);
  border-radius: 8px;
  background: ${({ $back }) =>
        $back ? "linear-gradient(145deg, #ffd978, #f8fafc)" : "rgba(15, 23, 42, 0.76)"};
  color: ${({ $back }) => ($back ? "#172033" : "#f8fafc")};
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  backface-visibility: hidden;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FlipCard = styled.div`
  width: min(430px, calc(50% - 75px));
  min-height: 240px;

  &:hover > div {
    transform: rotateY(180deg);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FlipInner = styled.div`
  position: relative;
  min-height: 240px;
  transform-style: preserve-3d;
  transition: transform 700ms ease;
`;

const Period = styled.p`
  margin: 0 0 12px;
  color: ${({ $dark }) => ($dark ? "#6c4b00" : "#ffd978")};
  font-weight: 800;
`;

const Company = styled.h3`
  margin: 0 0 8px;
  font-size: 1.6rem;
`;

const Role = styled.p`
  margin: 0 0 14px;
  color: #d7dee9;
  font-weight: 700;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.7;
`;