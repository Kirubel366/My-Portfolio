import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = createServerFn({ method: "POST" })
	.validator(
		(d: { name: string; email: string; subject: string; message: string }) => d,
	)
	.handler(async ({ data }) => {
		try {
			await resend.emails.send({
				from: "Kirubel's Portfolio <contact@blazemail.ai>",
				to: "kirubeld.21@gmail.com",
				subject: `New Portfolio Message: ${data.subject}`,
				text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`,
			});
			return { success: true };
		} catch (error) {
			console.error(error);
			return { success: false, error: "Failed to send email" };
		}
	});
