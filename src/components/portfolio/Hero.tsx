import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile.jpg";
import workstationImg from "@/assets/workstation.png";

const titles = [
	"Full-Stack Developer",
	"Business Growth Enabler",
	"Scalable Solutions Architect",
];

function useTypewriter() {
	const [text, setText] = useState("");
	const [i, setI] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const current = titles[i % titles.length];
		const speed = deleting ? 35 : 70;
		const timeout = setTimeout(() => {
			const next = deleting
				? current.slice(0, text.length - 1)
				: current.slice(0, text.length + 1);
			setText(next);

			if (!deleting && next === current) {
				setTimeout(() => setDeleting(true), 1400);
			} else if (deleting && next === "") {
				setDeleting(false);
				setI((p) => p + 1);
			}
		}, speed);
		return () => clearTimeout(timeout);
	}, [text, deleting, i]);

	return text;
}

export function Hero() {
	const root = useRef<HTMLDivElement>(null);
	const setup = useRef<HTMLDivElement>(null);
	const typed = useTypewriter();

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".hero-stagger", {
				y: 30,
				opacity: 0,
				duration: 0.9,
				ease: "power3.out",
				stagger: 0.12,
				delay: 0.2,
			});

			gsap.to(".hero-grid", {
				backgroundPosition: "560px 560px",
				duration: 40,
				repeat: -1,
				ease: "none",
			});

			gsap.to(".hero-rotate", {
				rotateY: 360,
				duration: 24,
				repeat: -1,
				ease: "none",
				transformOrigin: "50% 50%",
			});
		}, root);
		return () => ctx.revert();
	}, []);

	const scrollTo = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

	return (
		<section
			id="home"
			ref={root}
			className="relative min-h-screen pt-28 md:pt-32 pb-32 md:pb-40 overflow-hidden"
		>
			<div className="hero-grid absolute inset-0 grid-bg opacity-60" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.16_200/0.15),transparent_60%)]" />
			<div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl bg-primary/20" />
			<div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full blur-3xl bg-accent/20" />

			<div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
				<div className="order-2 lg:order-1">
					<div className="hero-stagger mb-6 flex items-center gap-4">
						<div className="relative w-28 h-28 md:w-32 md:h-32 animate-float">
							<div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,oklch(0.78_0.16_200),oklch(0.7_0.22_305),oklch(0.78_0.16_200))] animate-spin-slow blur-[2px]" />
							<div className="absolute inset-0 rounded-full bg-background" />
							<img
								src={profileImg}
								alt="Kirubel Daniel"
								width={256}
								height={256}
								className="absolute inset-1 rounded-full object-cover w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)]"
							/>
							<div className="absolute -inset-3 rounded-full bg-primary/30 blur-2xl -z-10" />
						</div>
						<div>
							<p className="text-sm text-muted-foreground font-mono">
								// Available for projects
							</p>
							<p className="text-foreground font-medium mt-1">
								Based in Ethiopia · Remote worldwide
							</p>
						</div>
					</div>

					<h1 className="hero-stagger text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
						Hi, I am <span className="text-gradient">Kirubel Daniel</span>
					</h1>

					<div className="hero-stagger mt-4 h-8 md:h-10 flex items-center">
						<span className="text-lg md:text-xl font-display text-foreground/90">
							{typed}
						</span>
						<span className="ml-1 inline-block w-[3px] h-5 md:h-7 bg-primary animate-pulse" />
					</div>

					<p className="hero-stagger mt-3 max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed">
						I design and build production-grade web platforms that scale with
						your business — from elegant interfaces to robust backends and
						everything in between.
					</p>

					<div className="hero-stagger mt-6 flex flex-wrap gap-4">
						<button
							type="button"
							onClick={() => scrollTo("projects")}
							className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold bg-[image:var(--gradient-primary)] text-primary-foreground glow-primary hover:scale-[1.03] transition-transform"
						>
							View Projects
							<span className="transition-transform group-hover:translate-x-1">
								→
							</span>
						</button>
						<button
							type="button"
							onClick={() => scrollTo("contact")}
							className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold glass hover:bg-secondary/80 transition-colors"
						>
							Let's Connect
						</button>
					</div>
				</div>

				<div
					className="order-1 lg:order-2 relative overflow-hidden"
					style={{ perspective: "1000px" }}
				>
					<div
						ref={setup}
						className="relative flex items-center justify-center"
					>
						<div className="absolute inset-0 -z-10 blur-3xl bg-[image:var(--gradient-glow)]" />
						<img
							src={workstationImg}
							alt="Developer workstation"
							width={1024}
							height={1024}
							className="hero-rotate w-full max-w-[360px] lg:max-w-[420px] drop-shadow-[0_30px_60px_oklch(0.78_0.16_200/0.35)]"
							style={{ transformStyle: "preserve-3d" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
