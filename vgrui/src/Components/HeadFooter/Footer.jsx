import React from "react";
import styled from "styled-components";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterTop>
        <BrandBlock>
          <Logo>VGR</Logo>
          <BrandText>
            MERN Stack and Full stack Developer building clean, responsive, and user-focused web
            applications with modern frontend and backend technologies.
          </BrandText>
        </BrandBlock>

        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Services</ColumnTitle>
          <FooterText>Frontend Development</FooterText>
          <FooterText>Backend Development</FooterText>
          <FooterText>MERN Stack Projects</FooterText>
          <FooterText>Admin Dashboard UI</FooterText>
          <FooterText>Education Web Portals</FooterText>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact</ColumnTitle>
          <FooterText>Available for freelance and full-time roles.</FooterText>
          <ContactLink href="https://mail.google.com/mail/?view=cm&fs=1&to=vganapathiraja96@gmail.com">
            vganapathiraja96@gmail.com
          </ContactLink>

          <SocialRow>
            <SocialLink href="https://github.com/VGanpathiRaja " aria-label="GitHub">GH</SocialLink>
            <SocialLink href="https://linkedin.com/in/v-ganapathi-raja-vgr-7b3408181" aria-label="LinkedIn">IN</SocialLink>
            <SocialLink href="mailto:vganapathiraja96@gmail.com " aria-label="Instagram">GM</SocialLink>
          </SocialRow>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          © {year} VGR. All rights reserved.
        </Copyright>

        <MadeText>
          Designed & developed with React.js  and Mern
        </MadeText>
      </FooterBottom>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  background:
    radial-gradient(circle at top left, rgba(0, 198, 255, 0.12), transparent 280px),
    #080c16;
  color: #ffffff;
  padding: 70px 40px 24px;
  border-top: 1px solid rgba(0, 198, 255, 0.16);

  @media (max-width: 768px) {
    padding: 56px 18px 22px;
  }
`;

const FooterTop = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto 46px;
  display: grid;
  grid-template-columns: 1.4fr 0.75fr 1fr 1fr;
  gap: 38px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const BrandBlock = styled.div``;

const Logo = styled.h2`
  width: fit-content;
  margin: 0 0 18px;
  padding: 10px 16px;
  border-radius: 6px;
  background: linear-gradient(135deg, #00c6ff, #ff3fb4);
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0;
`;

const BrandText = styled.p`
  max-width: 390px;
  margin: 0;
  color: #b9c4d4;
  font-size: 15px;
  line-height: 1.8;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColumnTitle = styled.h3`
  margin: 0 0 18px;
  color: #ffffff;
  font-size: 19px;
`;

const FooterLink = styled.a`
  margin-bottom: 11px;
  color: #b9c4d4;
  font-size: 15px;
  text-decoration: none;
  transition: 0.25s ease;

  &:hover {
    color: #00c6ff;
    transform: translateX(4px);
  }
`;

const FooterText = styled.p`
  margin: 0 0 11px;
  color: #b9c4d4;
  font-size: 15px;
  line-height: 1.6;
`;

const ContactLink = styled.a`
  margin: 4px 0 18px;
  color: #00c6ff;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #ff3fb4;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #111827;
  border: 1px solid rgba(0, 198, 255, 0.2);
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  display: grid;
  place-items: center;
  transition: 0.25s ease;

  &:hover {
    background: linear-gradient(135deg, #00c6ff, #ff3fb4);
    transform: translateY(-4px);
  }
`;

const FooterBottom = styled.div`
  width: min(1200px, 100%);
  margin: auto;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
`;

const MadeText = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
`;