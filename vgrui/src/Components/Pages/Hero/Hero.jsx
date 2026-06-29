import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../../../assets/vgrbgbanner-landscap.png";
import Bannerhero from "../../../assets/herobanner.png";

const Hero = () => {
    return (
        <HeroContainer>
            <BackgroundImage src={Banner} alt="Developer Banner" />

            <Overlay />

            <Content>
                <Title>
                    Hi, I'm <Name>Ganapathi</Name>
                </Title>

                {/* <Subtitle>Full Stack Developer</Subtitle> */}

                <CodeContainer>
                    <CodeHeader>
                        <Dot red />
                        <Dot yellow />
                        <Dot green />
                        <FileName>Developer.js</FileName>
                    </CodeHeader>

                    <CodeBody>
                        <CodeLine>
                            <Keyword>const</Keyword> developer <Operator>=</Operator> {"{"}
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;<Property>name</Property>:{" "}
                            <String>"Ganapathi Raja V"</String>,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;<Property>role</Property>:{" "}
                            <String>
                                "
                                <Typewriter
                                    words={[
                                        "Full Stack Developer",
                                        "React Developer",
                                        "Frontend Developer",
                                        "MERN Stack Developer",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={40}
                                    delaySpeed={1500}
                                />
                                "
                            </String>
                            ,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;<Property>skills</Property>: [
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <String>"React"</String>,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <String>"Node"</String>,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <String>"MongoDB"</String>,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <String>"Express"</String>,
                        </CodeLine>

                        <CodeLine>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <String>"MySQL"</String>
                        </CodeLine>

                        <CodeLine>&nbsp;&nbsp;]</CodeLine>

                        <CodeLine>{"}"}</CodeLine>
                    </CodeBody>
                </CodeContainer>
            </Content>
            <Content>
                <img src={Bannerhero} alt="hero images" />
                <ButtonGroup>
                    <PrimaryButton>View Projects</PrimaryButton>
                    <SecondaryButton>Download CV</SecondaryButton>
                </ButtonGroup>
            </Content>
        </HeroContainer>
    );
};

export default Hero;

/* ================= Styled Components ================= */

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 60px 40px;
  @media (max-width: 600px){
    padding: 60px 20px;
    display: block;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -3;
  user-select: none;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      rgba(2, 6, 23, 0.45),
      rgba(2, 6, 23, 0.65)
    ),
    radial-gradient(
      circle at top,
      transparent 10%,
      rgba(0, 0, 0, 0.4)
    );

  z-index: -2;
`;

const Content = styled.div`
  width: min(1200px, 90%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;
  gap: 20px;
  z-index: 2;
  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    flex-direcrion: row;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
`;

const Name = styled.span`
  color: #4ea9ff;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.3rem, 3vw, 2rem);
  color: #d5d5d5;
  font-weight: 500;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  padding: 15px 35px;
  background: #4ea9ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all .35s ease;
  &:hover {
    transform: translateY(-4px);
    background: #2e8fff;
    box-shadow: 0 12px 25px rgba(78,169,255,.4);
  }

  @media (max-width:600px){
    width:100%;
  }
`;

const SecondaryButton = styled.button`
  padding: 15px 35px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all .35s ease;
  &:hover{
    background:white;
    color:#111;
    transform:translateY(-4px);
  }
  @media (max-width:600px){
    width:100%;
  }
`;
const CodeContainer = styled.div`
  width: 600px;
  background: #101828;
  opacity: 0.8;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CodeHeader = styled.div`
  height: 45px;
  background: #1b2538;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${(props) =>
        props.red
            ? "#ff5f56"
            : props.yellow
                ? "#ffbd2e"
                : "#27c93f"};
`;

const FileName = styled.span`
  color: #ddd;
  margin-left: 15px;
  font-size: 14px;
`;

const CodeBody = styled.pre`
  margin: 0;
  padding: 30px;
  font-size: 18px;
  line-height: 2;
  color: white;
  font-family: "Fira Code", monospace;
  overflow-x: auto;
`;

const CodeLine = styled.div`
  white-space: pre-wrap;
`;

const Keyword = styled.span`
  color: #c792ea;
`;

const Property = styled.span`
  color: #82aaff;
`;

const String = styled.span`
  color: #c3e88d;
`;

const Operator = styled.span`
  color: white;
`;