import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export function Resume() {
	const root = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".resume-fade", {
				y: 40,
				opacity: 0,
				duration: 0.9,
				stagger: 0.12,
				ease: "power3.out",
				scrollTrigger: {
					trigger: root.current,
					start: "top 80%",
				},
			});
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<section id="resume" ref={root} className="relative py-28">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.16_200/0.12),transparent_60%)]" />

			<div className="relative mx-auto max-w-6xl px-6 lg:px-10">
				<div className="resume-fade mb-14 max-w-2xl">
					<p className="mb-3 font-mono text-sm text-primary">// 05 — resume</p>

					<h2 className="text-4xl font-bold md:text-5xl">
						My <span className="text-gradient">Resume</span>
					</h2>

					<p className="mt-4 text-lg text-muted-foreground">
						A snapshot of my experience, stack, and the kind of work I deliver.
						View it inline or grab a copy for later.
					</p>
				</div>

				<div className="resume-fade glass flex flex-col items-center justify-between gap-8 rounded-3xl p-8 md:flex-row md:p-10">
					<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
						{/* Icon Container */}
						<div className="relative shrink-0">
							<div className="absolute inset-0 rounded-2xl bg-primary/40 blur-xl" />
							<div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)]">
								<FiFileText className="h-7 w-7 text-primary-foreground" />
							</div>
						</div>

						{/* Text Container */}
						<div>
							<p className="font-mono text-xs text-muted-foreground">
								PDF · 1 page
							</p>
							<h3 className="text-lg sm:text-xl font-bold break-all">
								Kirubel_Daniel_Resume.pdf
							</h3>
						</div>
					</div>

					<div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
						<a
							href="/Kirubel_Daniel_Resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="group inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
						>
							<FiEye className="h-5 w-5" />
							View PDF
						</a>

						<a
							href="/Kirubel_Daniel_Resume.pdf"
							download="Kirubel_Daniel_Resume.pdf"
							className="group glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors hover:bg-secondary/80"
						>
							<FiDownload className="h-5 w-5" />
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
