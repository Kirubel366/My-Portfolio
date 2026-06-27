import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
	{ id: "home", label: "Home" },
	{ id: "skills", label: "Skills" },
	{ id: "projects", label: "Projects" },
	{ id: "awards", label: "Awards" },
	{ id: "contact", label: "Contact" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState("home");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
			const offsets = links.map((l) => {
				const el = document.getElementById(l.id);
				if (!el) return { id: l.id, top: Infinity };
				return {
					id: l.id,
					top: Math.abs(el.getBoundingClientRect().top - 120),
				};
			});
			offsets.sort((a, b) => a.top - b.top);
			setActive(offsets[0].id);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		setOpen(false);
		document
			.getElementById(id)
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header
			className={cn(
				"fixed top-0 inset-x-0 z-50 transition-all duration-300",
				scrolled
					? "backdrop-blur-xl bg-background/60 border-b border-border"
					: "bg-transparent",
			)}
		>
			<nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
				<button
					type="button"
					onClick={() => scrollTo("home")}
					className="font-display font-bold tracking-tight text-lg"
				>
					<span className="text-gradient">Kirubel</span>
					<span className="text-foreground"> Daniel</span>
				</button>

				<ul className="hidden md:flex items-center gap-1">
					{links.map((l) => (
						<li key={l.id}>
							<button
								type="button"
								onClick={() => scrollTo(l.id)}
								className={cn(
									"relative px-4 py-2 text-sm font-medium transition-colors",
									active === l.id
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{l.label}
								<span
									className={cn(
										"absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-all",
										active === l.id
											? "opacity-100 scale-x-100 bg-[image:var(--gradient-primary)]"
											: "opacity-0 scale-x-0",
									)}
								/>
							</button>
						</li>
					))}
				</ul>

				<button
					type="button"
					onClick={() => scrollTo("resume")}
					className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-[1.03] transition-transform glow-primary"
				>
					My Resume
				</button>

				<button
					type="button"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}
					className="md:hidden inline-flex flex-col gap-1.5 p-2"
				>
					<span
						className={cn(
							"h-0.5 w-6 bg-foreground transition-transform",
							open && "translate-y-2 rotate-45",
						)}
					/>
					<span
						className={cn(
							"h-0.5 w-6 bg-foreground transition-opacity",
							open && "opacity-0",
						)}
					/>
					<span
						className={cn(
							"h-0.5 w-6 bg-foreground transition-transform",
							open && "-translate-y-2 -rotate-45",
						)}
					/>
				</button>
			</nav>

			{open && (
				<div className="md:hidden border-t border-border bg-background/90 backdrop-blur-xl">
					<ul className="px-6 py-4 flex flex-col gap-1">
						{links.map((l) => (
							<li key={l.id}>
								<button
									onClick={() => scrollTo(l.id)}
									className="w-full text-left px-3 py-3 rounded-lg text-foreground hover:bg-secondary"
								>
									{l.label}
								</button>
							</li>
						))}
						<button
							type="button"
							onClick={() => scrollTo("resume")}
							className="items-center rounded-full px-5 py-2 text-sm font-semibold bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-[1.03] transition-transform glow-primary"
						>
							My Resume
						</button>
					</ul>
				</div>
			)}
		</header>
	);
}
