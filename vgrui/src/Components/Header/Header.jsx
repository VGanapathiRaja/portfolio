import React from 'react'
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
    HiOutlineMenuAlt3,
    HiOutlineX,
} from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <Nav scrolled={scrolled}>
                <Logo href="#">
                    <span>V</span>GR
                </Logo>

                <NavMenu>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>

                    <ResumeBtn href="#">
                        Resume
                    </ResumeBtn>
                </NavMenu>

                <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </MenuButton>
            </Nav>

            <MobileMenu open={menuOpen}>
                <MobileLink href="#home">Home</MobileLink>
                <MobileLink href="#about">About</MobileLink>
                <MobileLink href="#skills">Skills</MobileLink>
                <MobileLink href="#projects">Projects</MobileLink>
                <MobileLink href="#contact">Contact</MobileLink>

                <MobileResume href="#">
                    Download Resume
                </MobileResume>
            </MobileMenu>
        </>
    );
};

const Nav = styled.nav`
  background-color: rgba(2, 23, 61, 0.88),;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  z-index: 1000;
  transition: all .40s ease;
  background: ${({ scrolled }) =>
        scrolled
            ? `
      linear-gradient(
        90deg,
        rgba(17,25,40,.88),
        rgba(14,19,34,.88)
      )
      `
            : "transparent"};

  backdrop-filter: ${({ scrolled }) =>
        scrolled ? "blur(20px) saturate(180%)" : "none"};

  -webkit-backdrop-filter: ${({ scrolled }) =>
        scrolled ? "blur(20px) saturate(180%)" : "none"};

  border-bottom: ${({ scrolled }) =>
        scrolled
            ? "1px solid rgba(0,198,255,.12)"
            : "none"};

  box-shadow: ${({ scrolled }) =>
        scrolled
            ? `
      0 8px 32px rgba(0,0,0,.35),
      0 0 18px rgba(0,198,255,.08)
      `
            : "none"};
`;
const Logo = styled.a`
  text-decoration: none;

  font-size: 34px;
  font-weight: 700;

  color: white;

  letter-spacing: 2px;

  span{
      background:linear-gradient(
      135deg,
      #7B2FF7,
      #00C6FF
      );

      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
  }
`;

const NavMenu = styled.div`
  display:flex;
  align-items:center;
  gap:35px;

  @media(max-width:900px){
      display:none;
  }
`;

const NavLink = styled.a`
  color:#d8d8d8;

  text-decoration:none;

  font-size:16px;

  position:relative;

  transition:.35s;

  &:hover{
      color:white;
  }

  &:after{

      content:"";

      position:absolute;

      left:0;
      bottom:-6px;

      width:0;
      height:2px;

      background:linear-gradient(
      90deg,
      #7B2FF7,
      #00C6FF
      );

      transition:.35s;

  }

  &:hover:after{

      width:100%;

  }

`;

const ResumeBtn = styled.a`
  text-decoration:none;

  padding:12px 28px;

  border-radius:50px;

  color:white;

  background:linear-gradient(
  135deg,
  #7B2FF7,
  #00C6FF
  );

  font-weight:600;

  transition:.35s;

  &:hover{

      transform:translateY(-3px);

      box-shadow:0 10px 25px rgba(0,198,255,.4);

  }
`;

const MenuButton = styled.button`
  display:none;

  background:none;

  border:none;

  color:white;

  font-size:34px;

  cursor:pointer;

  @media(max-width:900px){

      display:block;

  }
`;

const MobileMenu = styled.div`
  position: fixed;

  top:80px;
  left:0;

  width:100%;

  background:#0B1020;

  display:flex;
  flex-direction:column;

  overflow:hidden;

  max-height:${({ open }) => open ? "500px" : "0"};

  transition:.4s;

  z-index:999;

  @media(min-width:901px){
      display:none;
  }
`;

const MobileLink = styled.a`
  text-decoration:none;

  color:white;

  padding:18px;

  text-align:center;

  border-bottom:1px solid rgba(255,255,255,.08);

  transition:.3s;

  &:hover{

      background:rgba(255,255,255,.05);

  }
`;

const MobileResume = styled.a`
  margin:20px;

  padding:14px;

  text-align:center;

  text-decoration:none;

  border-radius:40px;

  background:linear-gradient(
  135deg,
  #7B2FF7,
  #00C6FF
  );

  color:white;

  font-weight:600;
`;