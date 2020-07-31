import React, { ReactElement } from "react";
import styled from "styled-components";
import { SEO } from "../components/utils/SEO";
import { Card } from "../components/Card";

const CardContainer = styled.div``;

export default (): ReactElement => {
	return (
		<>
			<SEO title={"Portfolio"} />
			<CardContainer>
				<Card
					github="https://www.example.com"
					website="https://www.example.com"
					image="https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
					title="Example"
					description={`
					Hello this is an example.

					Paragraph 2. This is a very long text. This is for testing only. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text

					Paragraph 3.
					
					`}
				/>
				<Card
					github="https://www.example.com"
					website="https://www.example.com"
					image="https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
					title="Example"
					description={`
					Hello this is an example.

					Paragraph 2. This is a very long text. This is for testing only. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text

					Paragraph 3.
					
					`}
				/>
				<Card
					github="https://www.example.com"
					website="https://www.example.com"
					image="https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
					title="Example"
					description={`
					Hello this is an example.

					Paragraph 2. This is a very long text. This is for testing only. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text

					Paragraph 3.
					
					`}
				/>
				<Card
					github="https://www.example.com"
					website="https://www.example.com"
					image="https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
					title="Example"
					description={`
					Hello this is an example.

					Paragraph 2. This is a very long text. This is for testing only. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text

					Paragraph 3.
					
					`}
				/>
			</CardContainer>
		</>
	);
};
