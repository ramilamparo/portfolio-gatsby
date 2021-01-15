import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";
import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";
export interface StrapiContactPage {
	id: string;
	email: string;
	githubLink: string;
	mobileNumber: string | null;
	lat: number;
	lng: number;
	linkedInLink: string;
	sendMail: (mail: SendMailOptions) => Promise<SendMailResponse>;
}

const sendMailMutation = gql`
	mutation(
		$captcha: String!
		$subject: String!
		$replyTo: String!
		$body: String!
	) {
		sendMail(
			mail: {
				captcha: $captcha
				subject: $subject
				replyTo: $replyTo
				body: $body
			}
		) {
			message
			success
		}
	}
`;

export interface SendMailOptions {
	subject: string;
	replyTo: string;
	body: string;
	captcha: string;
}

export interface SendMailResponse {
	message: string;
	success: boolean;
}

export interface SendMailMutationResponse {
	sendMail: SendMailResponse;
}

export const useStrapiContactPage = (): StrapiContactPage => {
	const [sendMail] = useMutation<SendMailMutationResponse, SendMailOptions>(
		sendMailMutation
	);
	const query = useStaticQuery<
		StrapiResponse<"contactPage", Omit<StrapiContactPage, "sendMail">>
	>(graphql`
		{
			strapi {
				contactPage {
					id
					email
					githubLink
					mobileNumber
					lat
					lng
					linkedInLink
				}
			}
		}
	`);
	const handleSend = useCallback(
		async (options: SendMailOptions): Promise<SendMailResponse> => {
			try {
				const response = await sendMail({ variables: options });
				if (response?.data?.sendMail) {
					return response.data.sendMail;
				}
				throw new Error("Message cannot be sent!");
			} catch (e) {
				const message = e?.data?.message || e.message;
				return {
					message,
					success: false
				};
			}
		},
		[sendMail]
	);

	return {
		...query.strapi.contactPage,
		sendMail: handleSend
	};
};
