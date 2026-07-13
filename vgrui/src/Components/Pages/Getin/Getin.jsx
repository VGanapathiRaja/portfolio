import React from "react";
import styled from "styled-components";
import Btn from "../../Button/Btnprimary";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
const Getin = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		location: "",
		company: "",
		projectType: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	// Handle Input Change
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Validation
	const validate = () => {
		let newErrors = {};

		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full Name is required..!";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required..!";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = "Invalid email address";
		}

		if (!formData.phone.trim()) {
			newErrors.phone = "Mobile data is required..!";
		}
		else if (!/^[+]91(9|8|7)\d{9}$/.test(formData.phone)) {
			newErrors.phone = "please fill the correct mobile data";
		}

		if (!formData.company.trim()) {
			newErrors.company = "Company Name is required..!";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Messages / description is required..!";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	// Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) return;

		// Get existing data
		const existingData =
			JSON.parse(localStorage.getItem("contactData")) || [];

		// Add new data
		existingData.push(formData);

		// Save
		localStorage.setItem("contactData", JSON.stringify(existingData));

		// Console
		console.log("Submitted Data:", formData);

		alert("Message Sent Successfully!");

		// Reset
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			location: "",
			company: "",
			projectType: "",
			message: "",
		});

		setErrors({});
	};
	return (
		<Section id="contact">

			<Container>
				<Left>

					<SmallTitle>
						&gt; CONTACT
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
								<Value>+91 75021 32895</Value>
							</div>

						</ContactCard>

						<ContactCard>

							<IconBox>
								<FaEnvelope />
							</IconBox>

							<div>
								<Label>Email</Label>
								<Value>vganapathiraja96@gmail.com </Value>
							</div>

						</ContactCard>

						<ContactCard>

							<IconBox>
								<FaLinkedin />
							</IconBox>

							<div>
								<Label>LinkedIn</Label>
								<Value>v-ganapathi-raja-vgr-7b3408181 </Value>
							</div>

						</ContactCard>

						<ContactCard>

							<IconBox>
								<FaTwitter />
							</IconBox>

							<div>
								<Label>GitHub</Label>
								<Value>VGanpathiRaja</Value>
							</div>

						</ContactCard>

					</ContactList>

				</Left>

				{/* Right Side */}

				<Right>
					<FormHeader>
						<h2>
							You can Contact me <Name>&gt; Vgr</Name>
						</h2>

						<p>
							Fill out the form below and I'll reply as soon as possible.
						</p>
					</FormHeader>

					<FormBody>
						<Form onSubmit={handleSubmit}>
							<InputGroup>
								<div>
									<Input
										type="text"
										name="fullName"
										placeholder="Full Name *"
										value={formData.fullName}
										onChange={handleChange}
									/>
									{errors.fullName && (
										<small style={{ color: "red" }}>{errors.fullName}</small>
									)}
								</div>

								<div>
									<Input
										type="email"
										name="email"
										placeholder="Email Address *"
										value={formData.email}
										onChange={handleChange}
									/>
									{errors.email && (
										<small style={{ color: "red" }}>{errors.email}</small>
									)}
								</div>
							</InputGroup>

							<InputGroup>
								<div>
									<Input
										type="tel"
										name="phone"
										placeholder="Phone Number"
										value={formData.phone}
										onChange={handleChange}
									/>
									{errors.phone && (
										<small style={{ color: "red" }}>{errors.phone}</small>
									)}
								</div>
								<div>
									<Input
										type="text"
										name="company"
										placeholder="Company / Organization"
										value={formData.company}
										onChange={handleChange}
									/>
									{errors.company && (
										<small style={{ color: "red" }}>{errors.company}</small>
									)}
								</div>

							</InputGroup>

							<InputGroup>

								<Input
									type="text"
									name="location"
									placeholder="Location"
									value={formData.location}
									onChange={handleChange}
								/>
								<Input
									type="text"
									name="projectType"
									placeholder="Project Type"
									value={formData.projectType}
									onChange={handleChange}
								/>
							</InputGroup>

							<div>
								<TextArea
									rows="7"
									name="message"
									placeholder="Tell me about your Comments / Messages..."
									value={formData.message}
									onChange={handleChange}
								/>

								{errors.message && (
									<small style={{ color: "red" }}>{errors.message}</small>
								)}
							</div>

							<ButtonArea>
								<Btn type="submit" myBtnName="Send Message!😉" />
							</ButtonArea>
						</Form>
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
padding: 60px 40px;
@media(max-width:992px){
grid-template-columns:1fr;
padding: 60px 0;
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
const Name = styled.span`
  color: #4ea9ff;
  font-size: 14px;
  font-weight: 700;
`;
const Heading = styled.h1`
font-size:clamp(1.8rem,5vw,4.8rem);
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

@media (max-width:768px){
font-size: 14px
}

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
@media (max-width:768px){
font-size: 14px
}

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
