import React, { ReactElement } from "react";
import styled from "styled-components";
import { ContactForm } from "../components/ContactForm";
import { SEO } from "../components/utils/SEO";
import { Map } from "../components/Map";
import { Grid, Row, Col } from "../components/Grid";

const FullHeightRow = styled(Row)`
	height: 100%;
`;

export default (): ReactElement => {
	return (
		<Grid spacing={0}>
			<SEO title={"Contact"} />
			<FullHeightRow>
				<Col xs={5}>
					<ContactForm />
				</Col>
				<Col xs={7}>
					<Map location={{ lat: 25.2048, lng: 55.2708 }} />
				</Col>
			</FullHeightRow>
		</Grid>
	);
};
