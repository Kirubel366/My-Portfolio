import { useState } from "react";
import award1 from "@/assets/award1.png";
import award2 from "@/assets/award2.jpg";
import award3 from "@/assets/award3.jpg";

const awards = [
	{
		title: "Course Compelition Award",
		description:
			"Recognized for completeing 'Programming Fundamentals' course on Udacity.",
		image: award1,
	},
	{
		title: "Software Donation Award",
		description:
			"Awarded for donating software to volunteer organization called ENPA",
		image: award2,
	},
	{
		title: "Best Collaboration Award",
		description:
			"Awarded for collaborating with team members and delivering a project at a hackathon event.",
		image: award3,
	},
];

export function Awards() {
	const [index, setIndex] = useState(0);
	const award = awards[index];

	return (
		<section id="awards" className="relative py-28">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.22_305/0.12),transparent_60%)]" />
			<div className="relative mx-auto max-w-7xl px-6 lg:px-10">
				<div className="max-w-2xl mb-14">
					<p className="font-mono text-sm text-primary mb-3">// 04 — awards</p>
					<h2 className="text-4xl md:text-5xl font-bold">
						Recognized <span className="text-gradient">Achievements</span>
					</h2>
					<p className="mt-4 text-muted-foreground text-lg">
						Showcasing selected awards and recognitions that highlight strong
						delivery, innovation and design.
					</p>
				</div>

				<div className="glass rounded-3xl overflow-hidden border border-border shadow-lg">
					<div className="grid gap-0 lg:grid-cols-[1.8fr_1fr]">
						<div className="overflow-hidden bg-background/80">
							<img
								src={award.image}
								alt={award.title}
								className="w-full h-[360px] object-contain object-center bg-background sm:h-[420px] lg:h-[360px] xl:h-[340px]"
							/>
						</div>

						<div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
							<div>
								<p className="text-xs font-mono text-primary uppercase tracking-[0.35em] mb-2">
									Featured award
								</p>
								<h3 className="text-3xl font-bold text-foreground">
									{award.title}
								</h3>
								<p className="mt-3 text-muted-foreground">
									{award.description}
								</p>
							</div>

							<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex gap-3 flex-wrap">
									{awards.map((item, itemIndex) => (
										<button
											key={itemIndex}
											type="button"
											onClick={() => setIndex(itemIndex)}
											className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-sm font-medium transition ${
												itemIndex === index
													? "bg-primary text-primary-foreground"
													: "bg-secondary/70 text-muted-foreground hover:bg-secondary"
											}`}
										>
											{itemIndex + 1}
										</button>
									))}
								</div>

								<div className="flex gap-3">
									<button
										type="button"
										onClick={() =>
											setIndex(
												(prev) => (prev - 1 + awards.length) % awards.length,
											)
										}
										className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
									>
										Previous
									</button>
									<button
										type="button"
										onClick={() =>
											setIndex((prev) => (prev + 1) % awards.length)
										}
										className="inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]"
									>
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
