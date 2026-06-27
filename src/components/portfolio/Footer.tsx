import {
	FaGithub,
	FaLinkedinIn,
	FaTelegram,
	FaXTwitter,
} from "react-icons/fa6";

const links = [
	{ id: "home", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "awards", label: "Awards" },
	{ id: "resume", label: "Resume" },
	{ id: "contact", label: "Contact" },
];

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

export function Footer() {
	const scrollTo = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<footer className="relative border-t border-border bg-background/60">
			<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-primary)] opacity-60" />
			<div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
				<div>
					<p className="font-display text-2xl font-bold">
						<span className="text-gradient">Kirubel</span> Daniel
					</p>
					<p className="mt-3 text-muted-foreground max-w-xs">
						Full-Stack Developer helping businesses grow through scalable,
						beautifully crafted software.
					</p>
				</div>

				<div>
					<p className="font-mono text-xs text-muted-foreground mb-4">
						QUICK LINKS
					</p>
					<ul className="space-y-2">
						{links.map((l) => (
							<li key={l.id}>
								<button
									type="button"
									onClick={() => scrollTo(l.id)}
									className="text-foreground/80 hover:text-primary transition-colors"
								>
									{l.label}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div>
					<p className="font-mono text-xs text-muted-foreground mb-4">FOLLOW</p>
					<div className="flex gap-3">
						{socials.map(({ Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="w-10 h-10 grid place-items-center rounded-full glass hover:[box-shadow:0_0_25px_-5px_oklch(0.78_0.16_200/0.7)] hover:scale-110 transition-all"
							>
								<Icon className="w-4 h-4 text-primary" />
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-border">
				<div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} Kirubel Daniel. All rights reserved.
					</p>
					<p className="font-mono">Crafted with care</p>
				</div>
			</div>
		</footer>
	);
}
