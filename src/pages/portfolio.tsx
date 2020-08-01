import React, { ReactElement } from "react";
import styled from "styled-components";
import { SEO } from "../components/utils/SEO";
import { ScrollIndicator } from "../components/ScrollIndicator/ScrollIndicator";

const CardContainer = styled.div`
	height: 100%;
`;

export default (): ReactElement => {
	return (
		<>
			<SEO title={"Portfolio"} />
			<CardContainer>
				<ScrollIndicator
					sections={[
						{
							description: "Description 1",
							id: "Item1",
							images: [
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
							],
							label: "Label1"
						},
						{
							description: "Description 2",
							id: "Item2",
							images: [
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
							],
							label: "Label2"
						},
						{
							description: "Description 3",
							id: "Item3",
							images: [
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
							],
							label: "Label3"
						},
						{
							description: "Description 4",
							id: "Item4",
							images: [
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
							],
							label: "Label4"
						},
						{
							description: "Description 5",
							id: "Item5",
							images: [
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
								"https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
							],
							label: "Label5"
						}
					]}
				/>
			</CardContainer>
		</>
	);
};
