import { createFileRoute } from "@tanstack/react-router";
import { Awards } from "@/components/portfolio/Awards";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Kirubel Daniel — Full-Stack Developer & Solutions Architect" },
			{
				name: "description",
				content:
					"Portfolio of Kirubel Daniel — Full-Stack Developer building scalable, modern web platforms that help businesses grow.",
			},
			{
				property: "og:title",
				content: "Kirubel Daniel — Full-Stack Developer",
			},
			{
				property: "og:description",
				content:
					"Scalable web solutions crafted with React, Node.js and the modern stack.",
			},
		],
	}),
	component: Index,
});

function Index() {
	return (
		<main className="relative">
			<Navbar />
			<Hero />
			<Skills />
			<Projects />
			<Awards />
			<Resume />
			<Contact />
			<Footer />
		</main>
	);
}
