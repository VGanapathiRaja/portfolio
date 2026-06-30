import React from "react";
import styled from "styled-components";
import Btn from "../../Button/Btnprimary";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Getin = () => {
    return (
        <Section id="contact">

            <Container>

                {/* Left Side */}

                <Left>

                    <SmallTitle>
                        CONTACT
                    </SmallTitle>

                    <Heading>
                        Let's talk about your
                        <span> next project.</span>
                    </Heading>

                    <Description>
                        Thinking about a new website, portfolio, dashboard
                        or full stack application?
                        Feel free to contact me anytime.
                    </Description>

                    <ContactList>

                        <ContactCard>

                            <IconBox>
                                <FaPhoneAlt />
                            </IconBox>

                            <div>
                                <Label>Phone</Label>
                                <Value>+91 9876543210</Value>
                            </div>

                        </ContactCard>

                        <ContactCard>

                            <IconBox>
                                <FaEnvelope />
                            </IconBox>

                            <div>
                                <Label>Email</Label>
                                <Value>ganapathi@email.com</Value>
                            </div>

                        </ContactCard>

                        <ContactCard>

                            <IconBox>
                                <FaLinkedin />
                            </IconBox>

                            <div>
                                <Label>LinkedIn</Label>
                                <Value>linkedin.com/in/ganapathi</Value>
                            </div>

                        </ContactCard>

                        <ContactCard>

                            <IconBox>
                                <FaTwitter />
                            </IconBox>

                            <div>
                                <Label>Twitter</Label>
                                <Value>@GanapathiDev</Value>
                            </div>

                        </ContactCard>

                    </ContactList>

                </Left>

                {/* Right Side */}

                <Right>

                    <FormHeader>

                        <h2>Your Contact Information</h2>

                        <p>
                            Fill out the form below and I'll reply as soon as possible.
                        </p>

                    </FormHeader>

                    <FormBody>

                        <FormBody>

                            <Form>

                                <InputGroup>

                                    <Input
                                        type="text"
                                        placeholder="Full Name *"
                                    />

                                    <Input
                                        type="email"
                                        placeholder="Email Address *"
                                    />

                                </InputGroup>

                                <InputGroup>

                                    <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                    />

                                    <Input
                                        type="text"
                                        placeholder="Location"
                                    />

                                </InputGroup>

                                <InputGroup>

                                    <Input
                                        type="text"
                                        placeholder="Company / Organization"
                                    />

                                    <Input
                                        type="text"
                                        placeholder="Project Type"
                                    />

                                </InputGroup>

                                <TextArea
                                    rows="7"
                                    placeholder="Tell me about your project..."
                                />

                                <ButtonArea>

                                    <Btn myBtnName={"Send Message~!😉"} />

                                </ButtonArea>

                            </Form>

                        </FormBody>

                    </FormBody>

                </Right>

            </Container>

        </Section>
    );
};

export default Getin;

/* ===================================================== */

const Section = styled.section`

width:100%;

padding:100px 0;

background:#0A0E1A;

`;

const Container = styled.div`

width:min(1400px,92%);

margin:auto;

display:grid;

grid-template-columns:1fr 1.2fr;

gap:70px;

align-items:center;

@media(max-width:992px){

grid-template-columns:1fr;

}

`;

const Left = styled.div`

display:flex;

flex-direction:column;

`;

const SmallTitle = styled.p`

color:#00C6FF;

font-size:15px;

letter-spacing:3px;

font-weight:600;

margin-bottom:18px;

`;

const Heading = styled.h1`

font-size:clamp(2.8rem,6vw,4.8rem);

line-height:1.1;

color:white;

font-weight:800;

margin-bottom:30px;

span{

display:block;

background:linear-gradient(
90deg,
#00C6FF,
#7B2FF7
);

-webkit-background-clip:text;

-webkit-text-fill-color:transparent;

}

`;

const Description = styled.p`

color:#AEB4C5;

font-size:18px;

line-height:1.8;

max-width:520px;

margin-bottom:50px;

`;

const ContactList = styled.div`

display:flex;

flex-direction:column;

gap:25px;

`;

const ContactCard = styled.div`

display:flex;

align-items:center;

gap:20px;

`;

const IconBox = styled.div`

width:58px;

height:58px;

background:#131A2E;

display:flex;

align-items:center;

justify-content:center;

border-radius:15px;

font-size:22px;

color:#00C6FF;

box-shadow:0 10px 30px rgba(0,198,255,.15);

`;

const Label = styled.p`

color:#80879A;

font-size:14px;

margin-bottom:5px;

`;

const Value = styled.h4`

color:white;

font-size:18px;

font-weight:500;

`;

const Right = styled.div`

background:#111827;

border:1px solid rgba(255,255,255,.08);

border-radius:20px;

overflow:hidden;

box-shadow:0 25px 60px rgba(0,0,0,.35);

`;

const FormHeader = styled.div`

padding:35px;

border-bottom:1px solid rgba(255,255,255,.08);

h2{

font-size:28px;

color:white;

margin-bottom:10px;

}

p{

color:#9CA3AF;

font-size:15px;

}

`;

const FormBody = styled.div`

padding:15px;

min-height:575px;

`;
const Form = styled.form`

display:flex;

flex-direction:column;

gap:20px;

`;

const InputGroup = styled.div`

display:grid;

grid-template-columns:repeat(2,1fr);

gap:15px;

@media(max-width:768px){

grid-template-columns:1fr;

}

`;

const Input = styled.input`

width:100%;

padding:10px 10px;

background:#161E31;

border:1px solid rgba(255,255,255,.08);

border-radius:12px;

font-size:14px;

color:#fff;

outline:none;

transition:.35s;

&::placeholder{

color:#8D95A8;

}

&:focus{

border-color:#00C6FF;

box-shadow:
0 0 20px rgba(0,198,255,.25);

}

`;

const TextArea = styled.textarea`

width:100%;

padding:20px;

background:#161E31;

border:1px solid rgba(255,255,255,.08);

border-radius:12px;

resize:none;

font-size:14px;

color:white;

outline:none;

transition:.35s;

&::placeholder{

color:#8D95A8;

}

&:focus{

border-color:#00C6FF;

box-shadow:
0 0 20px rgba(0,198,255,.25);

}

`;

const ButtonArea = styled.div`

display:flex;

justify-content:flex-end;

margin-top:10px;

@media(max-width:768px){

justify-content:center;

}

`;
