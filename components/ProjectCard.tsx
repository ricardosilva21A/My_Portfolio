"use client";

import { Activity, LockKeyhole, MapPinned, Tag, Workflow } from "lucide-react";
import { Project } from "@/content/projects";
import { TechBadge } from "@/components/TechBadge";

export function ProjectCard({ project }: { project: Project }) {
    const icons = {
        healthcare: Activity,
        erp: Workflow,
        security: LockKeyhole,
        discovery: MapPinned,
    };
    const ProjectIcon = icons[project.kind];

    return (
        <div className="w-full bg-zinc-50 dark:bg-[#1a1a1f] rounded-2xl border border-zinc-200 dark:border-zinc-800/60 shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/10 hover:border-purple-500/30">

            <div className="bg-slate-300/60 p-4 dark:bg-zinc-700/40">
                <div className="flex aspect-[1200/630] flex-col justify-between overflow-hidden rounded-xl border border-zinc-700/30 bg-gradient-to-br from-zinc-900 via-zinc-800 to-purple-950 p-6 text-white shadow-inner sm:p-8">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1.5" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <ProjectIcon size={22} className="text-purple-300" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-purple-200">
                            {project.status ?? "Selected project"}
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
                        <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-zinc-300">{project.description}</p>
                    </div>
                </div>
            </div>

            {/* Metadata */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                    <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400 shrink-0 ml-3">{project.date}</span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm font-mono leading-relaxed mb-6 flex-1 line-clamp-3">
                    {project.story || project.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={15} className="text-zinc-400 mr-1 shrink-0" />
                    {project.tech.map((t, idx) => (
                        <TechBadge key={idx} tech={t} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}
