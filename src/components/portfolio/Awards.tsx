import { useState } from "react";
import award1 from "@/assets/award1.png";
import award2 from "@/assets/award2.jpg";
import award3 from "@/assets/award3.jpg";
import award4 from "@/assets/award4.jpg";
import award5 from "@/assets/award5.jpg";

const awards = [
	{
		title: "Nonodegree Program Completion Award",
		description:
			"Recognized for completing 'Programming Fundamentals' course on Udacity.",
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
	{
		title: "Technical Innovation Award",
		description:
			"Awarded for engineering a full-stack performance dashboard and student crypto reward system.",
		image: award4,
	},
	{
		title: "ALA Leadership Accelerator Award",
		description:
			"Awarded by the African Leadership Academy and PMI Educational Foundation for successful completion of the Leadership Accelerator Program.",
		image: award5,
	},
];

const getVisibleAwardNumbers = (currentIndex: number) => {
	const windowNumbers = [currentIndex - 1, currentIndex, currentIndex + 1]
		.map((value) => value + 1)
		.filter((value) => value >= 1 && value <= awards.length)
		.sort((a, b) => a - b);

	if (windowNumbers.length < 3) {
		if (windowNumbers[0] === 1) {
			while (windowNumbers.length < 3) {
				const nextValue = windowNumbers.at(-1)! + 1;
				if (nextValue > awards.length) break;
				windowNumbers.push(nextValue);
			}
		} else {
			while (windowNumbers.length < 3) {
				const prevValue = windowNumbers[0] - 1;
				if (prevValue < 1) break;
				windowNumbers.unshift(prevValue);
			}
		}
	}

	return windowNumbers;
};

export function Awards() {
	const [index, setIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const award = awards[index];
	const visibleNumbers = getVisibleAwardNumbers(index);

	return (
		<>
			<section id="awards" className="relative py-28">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.7_0.22_305/0.12),transparent_60%)]" />
				<div className="relative mx-auto max-w-7xl px-6 lg:px-10">
					<div className="max-w-2xl mb-14">
						<p className="font-mono text-sm text-primary mb-3">
							{"// 04 — awards"}
						</p>
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
							<div className="relative overflow-hidden bg-background/80 group">
								<button
									type="button"
									onClick={() => setIsModalOpen(true)}
									aria-label={`Open ${award.title} in full size`}
									className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/55 px-3 py-2 text-xs font-medium text-white backdrop-blur-md transition duration-200 hover:scale-[1.03] hover:bg-slate-950/70"
								>
									<span aria-hidden="true" className="text-base leading-none">
										+
									</span>
									<span>Zoom</span>
								</button>
								<img
									src={award.image}
									alt={award.title}
									className="w-full h-[360px] object-contain object-center bg-background sm:h-[420px] lg:h-[360px] xl:h-[340px] transition duration-300 group-hover:scale-[1.02]"
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
									<div className="flex items-center gap-4">
										<div className="flex items-center gap-3 rounded-full border border-border/80 bg-background/50 p-2 shadow-inner shadow-black/5 backdrop-blur-sm">
											{visibleNumbers.map((number) => {
												const numberIndex = number - 1;
												const active = numberIndex === index;
												const sideButton =
													numberIndex === index - 1 ||
													numberIndex === index + 1;

												return (
													<button
														key={number}
														type="button"
														onClick={() => setIndex(numberIndex)}
														className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
															active
																? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/30"
																: sideButton
																	? "border border-border bg-secondary/60 text-foreground hover:bg-secondary"
																	: "border border-transparent bg-transparent text-muted-foreground/70 hover:text-foreground"
														}`}
													>
														{number}
													</button>
												);
											})}
										</div>

										<div className="flex items-baseline gap-2 border-l border-border pl-4 text-sm text-muted-foreground">
											<span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
												Awards
											</span>
											<span className="text-2xl font-semibold tracking-tight text-foreground">
												{awards.length}
											</span>
										</div>
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

			{isModalOpen ? (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="relative w-full max-w-5xl rounded-[28px] border border-white/15 bg-slate-950/85 p-3 shadow-2xl shadow-black/50 sm:p-4"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setIsModalOpen(false)}
							aria-label="Close full-size award image"
							className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-lg text-white transition hover:bg-slate-800"
						>
							×
						</button>
						<div className="overflow-hidden rounded-[22px] bg-background/80">
							<img
								src={award.image}
								alt={award.title}
								className="max-h-[78vh] w-full object-contain object-center"
							/>
						</div>
						<div className="mt-3 px-2 pb-2 text-center sm:px-4">
							<p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary/80">
								Award spotlight
							</p>
							<h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">
								{award.title}
							</h4>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
