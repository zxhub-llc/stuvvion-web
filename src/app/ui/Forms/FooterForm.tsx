"use client";
import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
interface FormState {
	email: string;
}

const FooterForm = () => {
	const [form, setForm] = useState<FormState>({ email: "" });

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const isValidEmail = (email: string): boolean => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.email.trim()) {
			return toast.error("Email field is required!");
		}
		if (!isValidEmail(form.email)) {
			return toast.error("Please enter a valid email address!");
		}

		const apiKey = process.env.NEXT_PUBLIC_API_KEY;

		const formData = new FormData();
		formData.append("access_key", apiKey || "");
		formData.append("email", form.email);

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			if (res.ok) {
				toast.success("Subscription successful!");
				setForm({ email: "" });
			} else {
				toast.error("Failed to send message. Try again.");
			}
		} catch (err) {
			toast.error("Network error. Please try again later.");
		}
	};
	return (
		<form className="cs_newsletter cs_style_1" onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				className="cs_newsletter_input"
				placeholder="Enter your email address ..."
				value={form.email}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="cs_newsletter_btn cs_arrow_btn cs_white_bg cs_heading_color"
			>
				<svg
					width={16}
					height={16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.3846 0H0.615385C0.275692 0 0 0.275692 0 0.615385C0 0.955077 0.275692 1.23077 0.615385 1.23077H13.8988L0.180308 14.9495C-0.06 15.1898 -0.06 15.5794 0.180308 15.8197C0.300615 15.94 0.457846 16 0.615385 16C0.772923 16 0.930461 15.94 1.05046 15.8197L14.7692 2.10092V15.3846C14.7692 15.7243 15.0449 16 15.3846 16C15.7243 16 16 15.7243 16 15.3846V0.615385C16 0.275692 15.7243 0 15.3846 0Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</form>
	);
};

export default FooterForm;
