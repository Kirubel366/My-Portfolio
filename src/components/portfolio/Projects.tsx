import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		title: "Leadership Performance Management System",
		description:
			"A comprehensive leadership management system with role-based access and integrated dashboards, enabling efficient tracking of student performance, generation of reports, and a cryptocurrency-based reward system.",
		image: p1,
		stack: [
			"React",
			"Node.js",
			"MongoDB",
			"Express.js",
			"Tailwind",
			"ethers.js",
		],
		demo: "https://lia-leadership-system-production.vercel.app/",
		code: "https://github.com/Kirubel366/LIA-Leadership-System-Production.git",
	},
	{
		title: "Volunteer Engagement & Landing Platform",
		description:
			"A centralized volunteer management system with an integrated landing page, enabling the organization to showcase their mission, list their events, register volunteers, and manage volunteer datas efficiently.",
		image: p2,
		stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind"],
		demo: "https://enpa-beta.vercel.app/",
		code: "https://github.com/Kirubel366/ENPA.git",
	},
	{
		title: "Restaurant Menu Management & Landing Platform",
		description:
			"A responsive restaurant website and management system that allows owners to update menus, categories, and content in real time while providing customers with an engaging online experience.",
		image: p3,
		stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind"],
		demo: "https://restaurant-landing-website-2.vercel.app/",
		code: "https://github.com/Kirubel366/Restaurant-Landing-Website-2.git",
	},
];

export function Projects() {
	const root = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".projects-head > *", {
				y: 24,
				opacity: 0,
				duration: 0.7,
				stagger: 0.1,
				ease: "power3.out",
				scrollTrigger: { trigger: root.current, start: "top 80%" },
			});
		}, root);
		return () => ctx.revert();
	}, []);

	return (
		<section id="projects" ref={root} className="relative py-28">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.22_305/0.12),transparent_60%)]" />
			<div className="relative mx-auto max-w-7xl px-6 lg:px-10">
				<div className="projects-head max-w-2xl mb-16">
					<p className="font-mono text-sm text-primary mb-3">// 03 — work</p>
					<h2 className="text-4xl md:text-5xl font-bold">
						Featured <span className="text-gradient">Projects</span>
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						A selection of recent products built end-to-end — focused on
						performance, clarity and business impact.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
					{projects.map((p) => (
						<article
							key={p.title}
							className="project-card group glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 hover:shadow-[var(--shadow-elevated)]"
						>
							<div className="relative aspect-[16/10] overflow-hidden">
								<img
									src={p.image}
									alt={p.title}
									loading="lazy"
									width={1280}
									height={800}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold">{p.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{p.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{p.stack.map((t) => (
										<span
											key={t}
											className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
										>
											{t}
										</span>
									))}
								</div>
								<div className="mt-6 flex gap-3">
									<a
										href={p.demo}
										target="_blank"
										className="flex-1 text-center text-sm font-semibold rounded-full px-4 py-2.5 bg-[image:var(--gradient-primary)] text-primary-foreground hover:scale-[1.03] transition-transform"
									>
										Live Demo
									</a>
									<a
										href={p.code}
										target="_blank"
										className="flex-1 text-center text-sm font-semibold rounded-full px-4 py-2.5 border border-border hover:bg-secondary transition-colors"
									>
										Source Code
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
