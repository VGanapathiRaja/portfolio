import styled from "styled-components";
import Banner from "../../../assets/vgrbgbanner-landscap.png"; // Change path if needed
import { Typewriter } from "react-simple-typewriter";
import Profile from "../../../assets/herobanner.png";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiJquery,
  SiTailwindcss,
  SiMui,
  SiCanva,
  SiMysql,
  SiExpress,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import Btnsecondary from "../../Button/Btnsecondary";
import Btn from "../../Button/Btnprimary";
const stats = [
  {
    number: "3+",
    title: "Years of",
    subtitle: "Experience",
    color: "#3B82F6",
  },
  {
    number: "10+",
    title: "Projects",
    subtitle: "Completed",
    color: "#22C55E",
  },
  {
    number: "5",
    title: "Open Source",
    subtitle: "Libraries",
    color: "#D9FF00",
  },
];
const technologies = [
  { icon: <FaReact />, name: "React", angle: 20, color: "#61DBFB" },
  { icon: <SiExpress />, name: "React", angle: 350, color: "#61DBFB" },
  { icon: <SiJavascript />, name: "JavaScript", angle: 40, color: "#F7DF1E" },
  { icon: <FaNodeJs />, name: "Node.js", angle: 70, color: "#68A063" },
  { icon: <SiMongodb />, name: "MongoDB", angle: 90, color: "#4DB33D" },
  { icon: <SiMysql />, name: "MySQL", angle: 120, color: "#00758F" },
  { icon: <FaPython />, name: "Python", angle: 150, color: "#3776AB" },
  { icon: <SiJquery />, name: "jQuery", angle: 180, color: "#0769AD" },
  { icon: <FaBootstrap />, name: "Bootstrap", angle: 220, color: "#7952B3" },
  { icon: <SiTailwindcss />, name: "Tailwind", angle: 250, color: "#38BDF8" },
  { icon: <SiMui />, name: "Material UI", angle: 270, color: "#007FFF" },
  { icon: <SiCanva />, name: "Canva", angle: 290, color: "#00C4CC" },
  { icon: <TbBrandAdobePhotoshop />, name: "Photoshop", angle: 310, color: "#31A8FF" },
  { icon: <FaMicrosoft />, name: "MS Office", angle: 330, color: "#D83B01" },
];
const Hero1 = () => {
  return (
    <HeroSection id="home">
      <Background />
      <Overlay />
      <Container>

        <LeftContent>

          <SmallTitle>
            &gt; Hello, I'm
          </SmallTitle>

          <MainTitle>
            Ganapathi
          </MainTitle>

          <Heading>

            Full Stack

            <Gradient>Developer &</Gradient>

          </Heading>

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

          <Description>

            Passionate Full Stack Developer specializing in React.js,
            Node.js, Express.js, MongoDB and MySQL.
            I enjoy creating fast, responsive and user-friendly web
            applications with clean UI and scalable architecture.

          </Description>

          <ButtonGroup>
            <Btn myBtnName=" Download CV " />
            <Btnsecondary myBtnname={" Hire Me ..😎"} />
          </ButtonGroup>

          <StatsContainer>
            {stats.map((item, index) => (
              <StatItem key={index}>
                <Number color={item.color}>{item.number}</Number>

                <Text>
                  <span>{item.title}</span>
                  <span>{item.subtitle}</span>
                </Text>

                {index !== stats.length - 1 && <Divider />}
              </StatItem>
            ))}
          </StatsContainer>
        </LeftContent>
        <RightContent>

          <GlowCircle />

          <ImageContainer>

            <DeveloperImage
              src={Profile}
              alt="Ganapathi"
            />
            {technologies.map((tech, index) => (
              <FloatingIcon
                key={index}
                angle={tech.angle}
                color={tech.color}
                title={tech.name}
              >
                {tech.icon}
              </FloatingIcon>
            ))}
          </ImageContainer>

        </RightContent>

      </Container>
    </HeroSection>
  );
};

export default Hero1;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #080b16;
  padding: 60px 40px;

  @media (max-width:900){
    padding: 60px 0;
  }
`;

const Background = styled.div`
    position: absolute;
    inset: 0;
    background:#050816;
    z-index:0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      rgba(8, 11, 22, 0.72),
      rgba(8, 11, 22, 0.78)
    );
  backdrop-filter: blur(1px);
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: min(1400px, 92%);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding-top: 90px;
  @media (max-width: 1100px) {
    gap: 50px;
  }
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    gap: 40px;
    padding: 120px 0 60px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  position: relative;
`;
const SmallTitle = styled.p`
font-size:18px;
color:#00C6FF;
margin-bottom:20px;
font-weight:600;
letter-spacing:2px;

`;

const MainTitle = styled.h1`
font-size:clamp(3rem,7vw,5rem);
color:white;
font-weight:800;
line-height:1.1;
margin-bottom:10px;
`;

const Heading = styled.h2`
font-size:clamp(2rem,5vw,4rem);
color:white;
font-weight:700;
line-height:1.1;
`;

const Gradient = styled.span`
display:block;
background:linear-gradient(
135deg,
#7B2FF7,
#00C6FF
);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
`;

const Typing = styled.div`
margin-top:25px;
font-size:28px;
font-weight:600;
color:#00C6FF;
min-height:40px;
`;

const Description = styled.p`
margin-top:30px;
max-width:620px;
font-size:18px;
line-height:1.8;
color:#CFCFCF;

`;

const ButtonGroup = styled.div`
display:flex;
gap:20px;
margin-top:40px;
flex-wrap:wrap;
@media(max-width:768px){
justify-content:center;
}
`;
const StatsContainer = styled.div`
  width: min(100%, 1050px);
  margin: 60px auto 0;
  background: #17171d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 35px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      #3b82f6,
      #7B2FF7,
      #00C6FF
    );
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 35px 20px;
  }
`;

const StatItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Number = styled.h1`
  font-size: clamp(3rem, 1.5vw, 2rem);
  color: ${({ color }) => color};
  font-weight: 800;
  margin-right: 18px;
  line-height: 1;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  span:first-child {
    font-size: .6rem;
    font-weight: 500;
  }

  span:last-child {
    font-size: .5rem;
    font-weight: 700;
    margin-top: 3px;
  }
  @media (max-width: 768px) {
    span:first-child {
      font-size: 1rem;
    }

    span:last-child {
      font-size: .5rem;
    }
  }
`;

const Divider = styled.div`
  position: absolute;
  right: 0;
  width: 1px;
  height: 70px;
  background: rgba(255, 255, 255, 0.15);
  @media (max-width: 768px) {
    display: none;
  }
`;
const GlowCircle = styled.div`
  position: absolute;
  width: 600px;
  height: 750px;
  border-radius: 1px;
  background: radial-gradient(
      circle,
      rgba(123,47,247,.35),
      rgba(0,198,255,.12),
      transparent 70%
  );
  box-shadow:0 25px 45px rgba(0,198,255,.45);
  filter: blur(30px);
  animation: pulse 5s infinite ease-in-out;
  @keyframes pulse{
      0%{
          transform:scale(.9);
      }
      50%{
          transform:scale(1.08);
      }
      100%{
          transform:scale(.9);
      }
  }
`;

const ImageContainer = styled.div`
position:relative;
width: 600px;
height: 750px;
border-radius: 1px;
background:#fff;
padding:10px;
box-shadow:0 25px 45px rgba(0,198,255,.45);
background:linear-gradient(
135deg,
#7B2FF7,
#00C6FF
);
animation:float 5s ease-in-out infinite;
@keyframes float{
0%{
transform:translateY(0px);
}
50%{
transform:translateY(-15px);
}
100%{
transform:translateY(0px);
}
}
@media(max-width:992px){
width:340px;
height:340px;
}
@media(max-width:576px){
width:270px;
height:270px;
}
`;

const DeveloperImage = styled.img`
width:100%;
height:100%;
border-radius:1px;
object-fit:cover;
background:#0B1020;
position: absolute;
top: -10px;
left: -10px;
`;
const FloatingIcon = styled.div`

--radius:240px;

position:absolute;

top:50%;
left:50%;

width:60px;
height:60px;

display:flex;
align-items:center;
justify-content:center;

font-size:30px;

border-radius:16px;

background:rgba(15,20,35,.9);

backdrop-filter:blur(10px);

border:1px solid rgba(255,255,255,.08);

color:${({ color }) => color};

transform:
translate(-50%,-50%)
rotate(${({ angle }) => angle}deg)
translate(var(--radius))
rotate(-${({ angle }) => angle}deg);

transition:
transform .35s,
box-shadow .35s,
filter .35s;

will-change:transform;

animation:float 4s ease-in-out infinite;

&:hover{

scale:1.12;

filter:drop-shadow(0 0 18px ${({ color }) => color});

}

@keyframes float{

0%,100%{

translate:0 0;

}

50%{

translate:0 -8px;

}

}

@media(max-width:992px){

--radius:180px;

width:52px;
height:52px;
font-size:26px;

}

@media(max-width:576px){

--radius:130px;

width:42px;
height:42px;
font-size:22px;

}

`;
