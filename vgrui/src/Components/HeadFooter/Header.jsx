import React from "react";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineMail,
  HiOutlineDocumentDownload,
} from "react-icons/hi";

import VGRlog from '../../assets/vgr-logo.png';
import Vgrcv from '../../assets/GanapathiRajaV-cv.pdf'
const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: <HiOutlineHome />,
  },
  {
    label: "About",
    href: "#personal",
    icon: <HiOutlineUser />,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: <HiOutlineCode />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <HiOutlineBriefcase />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <HiOutlineMail />,
  },
  {
    label: "Resume",
    href: Vgrcv,
    icon: <HiOutlineDocumentDownload />,
  },
];

export default function Header() {
  return (
    <HeaderWrapper>
      {/* <Brand href="#home">VGR</Brand> */}
      <Brand href="#home">
        <img src={VGRlog} alt="vgr logo" />
      </Brand>

      <NavList>
        {navItems.map((item) => (
          <NavLink key={item.label} href={item.href} aria-label={item.label}>
            <Icon>{item.icon}</Icon>
            <Label>{item.label}</Label>
          </NavLink>
        ))}
      </NavList>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 50%;
  right: 5px;
  z-index: 1000;
  width: 70px;
  padding: 14px 10px;
  border-radius: 50px;
  background: rgba(10, 14, 26, 0.78);
  border: 1px solid rgba(0, 198, 255, 0.18);
  backdrop-filter: blur(18px);
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.35),
    0 0 24px rgba(0, 198, 255, 0.08);
  transform: translateY(-50%);

  @media (max-width: 768px) {
    top: auto;
    right: 47%;
    bottom: 18px;
    width: min(85%, 430px);
    padding: 10px 12px;
    border-radius: 22px;
    transform: translateX(50%);
  }
`;

const Brand = styled.a`
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7b2ff7, #00c6ff);
  color: #ffffff;
  font-size: 15px;
  font-weight: 900;
  text-decoration: none;
  display: grid;
  place-items: center;
  box-shadow: 0 0 24px rgba(0, 198, 255, 0.32);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 6px;
  }
`;

const NavLink = styled.a`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  color: #d8e3f0;
  text-decoration: none;
  display: grid;
  place-items: center;
  transition: 0.3s ease;

  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #7b2ff7, #00c6ff);
    box-shadow: 0 10px 28px rgba(0, 198, 255, 0.35);
    transform: translateX(-5px);
  }

  &:hover span:last-child,
  &:focus span:last-child {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const Icon = styled.span`
  font-size: 25px;
  line-height: 1;
  display: grid;
  place-items: center;
`;

const Label = styled.span`
  position: absolute;
  top: 50%;
  right: 68px;
  min-width: 92px;
  padding: 9px 14px;
  border-radius: 999px;
  background: #ffffff;
  color: #0a0e1a;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-50%) translateX(10px);
  transition: 0.28s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -5px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: translateY(-50%) rotate(45deg);
  }

  @media (max-width: 768px) {
    top: -42px;
    right: -10px;
    min-width: auto;
    transform: translateX(50%) translateY(8px);

    &::after {
      top: auto;
      right: 50%;
      bottom: -5px;
      transform: translateX(50%) rotate(45deg);
    }
  }
`;