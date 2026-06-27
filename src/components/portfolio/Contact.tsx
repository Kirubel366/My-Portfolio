import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

import {
	FaGithub,
	FaLinkedinIn,
	FaTelegram,
	FaXTwitter,
} from "react-icons/fa6";
import { sendEmail } from "@/lib/actions";

gsap.registerPlugin(ScrollTrigger);

const socials = [
	{
		label: "LinkedIn",
		Icon: FaLinkedinIn,
		href: "https://www.linkedin.com/in/kirubel-daniel-9659ba411?utm_source=share_via&utm_content=profile&utm_medium=member_android",
	},
	{ label: "GitHub", Icon: FaGithub, href: "https://github.com/Kirubel366" },
	{
		label: "Twitter / X",
		Icon: FaXTwitter,
		href: "https://x.com/KirubelDaniel21",
	},
	{ label: "Telegram", Icon: FaTelegram, href: "https://t.me/KiruD333" },
];

export function Contact() {
	const root = useRef<HTMLDivElement>(null);
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".contact-fade", {
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: "power3.out",
				scrollTrigger: { trigger: root.current, start: "top 80%" },
			});
		}, root);
		return () => ctx.revert();
	}, [root]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		const result = await sendEmail({ data: form });

		if (result.success) {
			setSent(true);
			setForm({ name: "", email: "", subject: "", message: "" });
			setTimeout(() => setSent(false), 4000);
		} else {
			setError("Something went wrong. Please try again later.");
		}
		setLoading(false);
	};

	return (
		<section id="contact" ref={root} className="relative py-28">
			<div className="absolute inset-0 grid-bg opacity-20" />
			<div className="relative mx-auto max-w-6xl px-6 lg:px-10">
				<div className="contact-fade max-w-2xl mb-14">
					<p className="font-mono text-sm text-primary mb-3">{`// 06 — contact`}</p>
					<h2 className="text-4xl md:text-5xl font-bold">
						Let's <span className="text-gradient">Connect</span>
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						Have a project in mind or want to discuss an idea? Drop a message —
						I reply within 24 hours.
					</p>
				</div>

				<div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
					<form
						onSubmit={handleSubmit}
						className="contact-fade glass rounded-3xl p-6 md:p-10 space-y-5"
					>
						<div className="grid md:grid-cols-2 gap-5">
							<Field
								id="contact-name"
								label="Full Name"
								value={form.name}
								onChange={(v) => setForm({ ...form, name: v })}
							/>
							<Field
								id="contact-email"
								label="Email Address"
								type="email"
								value={form.email}
								onChange={(v) => setForm({ ...form, email: v })}
							/>
						</div>
						<Field
							id="contact-subject"
							label="Subject"
							value={form.subject}
							onChange={(v) => setForm({ ...form, subject: v })}
						/>
						<div>
							<label
								htmlFor="contact-message"
								className="text-xs font-mono text-muted-foreground"
							>
								Message
							</label>
							<textarea
								id="contact-message"
								required
								value={form.message}
								onChange={(e) => setForm({ ...form, message: e.target.value })}
								rows={5}
								className="mt-2 w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
								placeholder="Tell me about your project…"
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full disabled:opacity-50 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-[1.02] glow-primary transition-transform"
						>
							{loading
								? "Sending..."
								: sent
									? "✓ Message Sent"
									: "Send Message"}
						</button>
						{error && (
							<p className="text-center text-sm text-red-500 mt-2">{error}</p>
						)}
					</form>

					<div className="contact-fade space-y-4">
						<div className="glass rounded-3xl p-6">
							<p className="font-mono text-xs text-muted-foreground">EMAIL</p>
							<p className="mt-1 text-lg font-semibold">
								kirubeld.21@gmail.com
							</p>
						</div>
						<div className="glass rounded-3xl p-6">
							<p className="font-mono text-xs text-muted-foreground">SOCIALS</p>
							<div className="mt-4 grid grid-cols-2 gap-3">
								{socials.map(({ label, Icon, href }) => (
									<a
										key={label}
										href={href}
										target="_blank"
										rel="noreferrer"
										className="group flex items-center gap-3 rounded-xl px-4 py-3 bg-secondary/40 border border-border hover:border-primary/60 hover:bg-secondary transition-all hover:[box-shadow:0_0_30px_-5px_oklch(0.78_0.16_200/0.6)]"
									>
										<Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
										<span className="text-sm font-medium">{label}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Field({
	id,
	label,
	value,
	onChange,
	type = "text",
}: {
	id: string;
	label: string;
	value: string;
	onChange: (v: string) => void;
	type?: string;
}) {
	return (
		<div>
			<label htmlFor={id} className="text-xs font-mono text-muted-foreground">
				{label}
			</label>
			<input
				id={id}
				required
				type={type}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="mt-2 w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
				placeholder={label}
			/>
		</div>
	);
}
