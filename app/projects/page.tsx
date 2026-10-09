import { Github } from "lucide-react";
import Link from "next/link";

import { featuredProjects } from "@/content/projects";
import GithubCalendarWidget from "@/components/GithubCalendarWidget";
import LLMWrapper from "@/components/LLMWrapper";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
    title: "Projects in Progress | Ricardo Silva",
    description: "Current systems engineering projects: an orthopaedic X-ray measurement assistant and a user-friendly ERP for a textile company.",
};

export default async function ProjectsPage() {
    const githubUsername = "ricardosilva21A";

    const llmMarkdown = `
# Systems Engineering Projects

My projects apply systems engineering to real workflows, with attention to the people using them, process coordination, and operational improvement.

### Current projects
- **Orthopaedic X-ray Measurement Assistant**: In development to help orthopaedic clinicians identify the correct reference on an X-ray and calculate measurements automatically. It aims to support productivity and remains a clinician-support tool.
- **Textile Company ERP**: In development, focused on user-friendly workflows and comprehensive, task-by-task user manuals.

### Additional projects
${featuredProjects.map(repo => `- **${repo.title}**: ${repo.description || "No description"} (Tech Stack: ${repo.tech.join(", ")})`).join('\n')}
  `;

    return (
        <LLMWrapper llmContent={llmMarkdown}>
            <div className="container mx-auto px-4 max-w-5xl pt-24 pb-16 space-y-16">
                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Systems Engineering Projects</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl text-pretty">
                        I&apos;m applying systems engineering to projects that support people, improve workflows, and address practical operational needs.
                    </p>
                </header>

                {/* Supplementary GitHub activity */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Github size={24} />
                            GitHub Activity
                        </h2>
                    </div>
                    <GithubCalendarWidget username={githubUsername} />
                </section>

                {/* Repositories Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Current &amp; Selected Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                        {featuredProjects.length > 0 ? (
                            featuredProjects.map((repo, idx) => (
                                <Link 
                                    key={idx}
                                    href={repo.link} 
                                    target="_blank" 
                                    className="block w-full outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl h-full"
                                >
                                    <ProjectCard project={repo} />
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-zinc-600 dark:text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl">
                                Could not load repositories or no repositories found.
                            </div>
                        )}
                    </div>
                </section>
            </div >
        </LLMWrapper >
    );
}
