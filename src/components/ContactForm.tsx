import React from "react";
import styled from "styled-components";
import { Input as BaseInput } from "./Input";
import { Grid, Row, Col } from "./Grid";
import { Button } from "./Button";
import { cyan } from "../utils/colors";
import { IconButton } from "./IconButton";

const Input = styled(BaseInput)`
	width: 100%;
`;

const SubmitButton = styled(Button)`
	float: right;
`;

const Title = styled.h1`
	font-family: Roboto;
	font-weight: 900;
	letter-spacing: -0.1rem;
	font-size: 4rem;
	color: ${cyan};
`;

const Description = styled.p`
	font-size: 1.5rem;
`;

const MessageInput = styled(Input)``;

const FullSizeRow = styled(Row)`
	height: 100%;
	justify-content: center;
	padding: 2rem 0;
`;

const ContactIconRow = styled(Row)`
	flex-shrink: 1;
`;

const ContactIconButton = styled(IconButton)`
	margin: 0 2rem;
`;

const ContactFormRow = styled(Row)`
	flex-grow: 1;
`;

export const ContactForm = () => {
	return (
		<Grid spacing={1}>
			<FullSizeRow direction="column">
				<ContactFormRow direction="column" center="xs">
					<Row>
						<Col xs={12}>
							<Title>Contact Me</Title>
						</Col>
						<Col xs={12}>
							<Description>
								If you want to hire me, please use the form below.
							</Description>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<Input name="name" placeholder="Name" required />
						</Col>
						<Col xs={6}>
							<Input name="email" placeholder="Email" required type="email" />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Input name="subject" placeholder="Subject" required />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<MessageInput
								as="textarea"
								rows={4}
								name="message"
								placeholder="Message"
								required
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<SubmitButton>Submit</SubmitButton>
						</Col>
					</Row>
				</ContactFormRow>
				<ContactIconRow center="xs">
					<ContactIconButton label="GitHub" icon="github" iconSource="jam" />
					<ContactIconButton label="WhatsApp" icon="whatsapp" iconSource="jam" />
					<ContactIconButton label="Email" icon="email" />
				</ContactIconRow>
			</FullSizeRow>
		</Grid>
	);
};
