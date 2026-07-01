import React from "react";
import styled from "styled-components";

const projects = [
    {
        icon: "CMS",
        title: "Education CMS Platform",
        text: "A content management system for schools and institutions to manage pages, announcements, courses, blogs, and academic updates.",
        points: ["Role-based Content", "Page Management", "Admin Publishing"],
    },
    {
        icon: "LMS",
        title: "Learning Management System",
        text: "A structured LMS solution for students and teachers with course modules, lessons, progress tracking, and learning resources.",
        points: ["Course Modules", "Student Progress", "Learning Dashboard"],
    },
    {
        icon: "WEB",
        title: "Institution Website",
        text: "A modern responsive website for schools, colleges, and training centers with admission details, programs, gallery, and contact flow.",
        points: ["Responsive UI", "Admission Pages", "SEO Friendly"],
    },
    {
        icon: "PORTAL",
        title: "Student Web Portal",
        text: "A student portal concept for profile access, academic information, notices, assignments, attendance view, and communication updates.",
        points: ["Student Login", "Academic Data", "Notice Board"],
    },
    {
        icon: "ADMIN",
        title: "Education Admin Panel",
        text: "A clean admin dashboard for managing students, teachers, courses, reports, enquiries, and platform settings in one place.",
        points: ["Dashboard UI", "User Management", "Reports & Analytics"],
    },
];

export default function Projects() {
    return (
        <Section id="projects">
            <Wrapper>
                <LeftPanel>
                    <Label>Services</Label>
                    <Title>My Expertise</Title>

                    <InfoBlock>
                        <InfoTitle>Solving problems</InfoTitle>
                        <InfoText>
                            I build education-focused web products that are simple to manage,
                            easy to use, and designed for real institutions, admins, teachers,
                            and students.
                        </InfoText>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoTitle>What you can expect</InfoTitle>
                        <List>
                            <li>CMS and LMS application design</li>
                            <li>Education website and portal UI</li>
                            <li>Admin dashboard development</li>
                            <li>Frontend and backend integration</li>
                        </List>
                    </InfoBlock>

                    <InfoBlock>
                        <InfoTitle>Applications I'm fluent in</InfoTitle>
                        <List>
                            <li>School and college websites</li>
                            <li>Student learning platforms</li>
                            <li>Admin panels and dashboards</li>
                        </List>
                    </InfoBlock>

                    <QuoteButton>Get Free Project Quote</QuoteButton>
                </LeftPanel>

                <CardsGrid>
                    {projects.map((project) => (
                        <ProjectCard key={project.title}>
                            <CardTop>
                                <IconBox>{project.icon}</IconBox>
                                <CardTitle>{project.title}</CardTitle>
                            </CardTop>

                            <CardBody>
                                <CardText>{project.text}</CardText>

                                <PointList>
                                    {project.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </PointList>
                            </CardBody>
                        </ProjectCard>
                    ))}
                </CardsGrid>
            </Wrapper>
        </Section>
    );
}

const Section = styled.section`
  padding: 90px 40px;
  background: #141518;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  width: min(1220px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: 0.78fr 1.7fr;
  gap: 46px;
  align-items: start;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPanel = styled.aside`
  position: sticky;
  top: 30px;

  @media (max-width: 950px) {
    position: static;
  }
`;

const Label = styled.p`
  margin: 0 0 12px;
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
`;

const Title = styled.h2`
  margin: 0 0 46px;
  color: #00c6ff;
  font-size: 28px;
`;

const InfoBlock = styled.div`
  margin-bottom: 24px;
`;

const InfoTitle = styled.h3`
  margin: 0 0 12px;
  color: #ffffff;
  font-size: 16px;
`;

const InfoText = styled.p`
  max-width: 310px;
  margin: 0;
  color: #e5e7eb;
  font-size: 14px;
  line-height: 1.7;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #e5e7eb;

  li {
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 1.5;
  }
`;

const QuoteButton = styled.button`
  margin-top: 16px;
  padding: 16px 24px;
  border: 0;
  border-right: 6px solid #b84dff;
  background: #ffffff;
  color: #111827;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: #00c6ff
    color: #ffffff;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 46px 48px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled.article`
  min-height: 340px;
  background: #ffffff;
  color: #111827;
  overflow: hidden;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  }
`;

const CardTop = styled.div`
  min-height: 160px;
  padding: 30px;
  background: linear-gradient(145deg, #ff9aad 0%, #00c6ff 48%, #b84dff 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconBox = styled.div`
  width: 54px;
  height: 38px;
  color: #0077ff;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0;
`;

const CardTitle = styled.h3`
  max-width: 280px;
  margin: 0;
  color: #0f172a;
  font-size: 25px;
  line-height: 1.12;
`;

const CardBody = styled.div`
  padding: 28px 30px 32px;
`;

const CardText = styled.p`
  margin: 0 0 20px;
  color: #111827;
  font-size: 13px;
  line-height: 1.7;
`;

const PointList = styled.ul`
  margin: 0;
  padding-left: 18px;

  li {
    margin-bottom: 9px;
    color: #111827;
    font-size: 13px;
    font-weight: 800;
  }
`;