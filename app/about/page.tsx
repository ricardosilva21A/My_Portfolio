import { Github, Linkedin, Mail } from "lucide-react";
import LLMWrapper from "@/components/LLMWrapper";

export const metadata = {
    title: "About | Ricardo Silva",
    description: "Ricardo Silva is a Computer Systems Engineer focused on people management, process coordination, and operational improvement.",
};

export default function AboutPage() {
    return (
        <LLMWrapper llmContent={"# About Me\n\nI am a Computer Systems Engineer and Services and Materials Specialist based in Guimarães, Portugal. I focus on people management, process coordination, and continuous improvement, applying systems thinking to real operational needs. I am currently working on an assistant for orthopaedic X-ray measurements and a user-friendly ERP for a textile company."}>
            <div className="container mx-auto px-4 max-w-5xl pt-32 pb-16 space-y-12 min-h-[80vh]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-10">
                    <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter">
                        About Me
                    </h1>
                    <div className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-mono text-zinc-600">
                        Systems Engineering | People | Processes
                    </div>
                </div>

                <div className="max-w-3xl space-y-10 text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono text-sm md:text-base">
                    <div className="space-y-4">
                        <p>
                            I&apos;m a Computer Systems Engineer and Services and Materials Specialist based in Guimarães, Portugal. My engineering background helps me understand systems as a whole, while my professional experience brings together operational support, supplier coordination, billing, invoicing, and inventory management.
                        </p>
                        <p>
                            I&apos;m especially interested in how people and processes work together. I enjoy collaborating with different teams, communicating clearly with stakeholders, and looking for practical ways to improve workflows, accuracy, and the use of resources.
                        </p>
                        <p>
                            I&apos;m currently working on two systems with a strong focus on the people who use them: an assistant to help orthopaedic clinicians identify X-ray references and calculate measurements, and an ERP for a textile company designed around user-friendly workflows and clear manuals for each task. Both projects reflect my interest in applying systems engineering to real needs, supporting productivity, and improving processes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                        {[
                            { title: "People & teams", text: "Communication, collaboration, coordination, and supporting shared goals." },
                            { title: "Process improvement", text: "Workflow awareness, accurate records, cost consciousness, and continuous improvement." },
                            { title: "Operational systems", text: "Hands-on experience with SAP, INTEX, and ManWinWin." },
                        ].map((item) => (
                            <div key={item.title} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-3">
                                <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-sans">{item.title}</h2>
                                <p className="text-xs leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-6 text-[11px] font-bold text-zinc-600 font-sans uppercase tracking-[0.2em]">
                        <a href="https://github.com/ricardosilva21A" aria-label="GitHub Profile" className="hover:text-purple-500 transition-colors flex items-center gap-2"><Github size={14}/> GitHub</a>
                        <a href="https://linkedin.com/in/ricardofsilva0" aria-label="LinkedIn Profile" className="hover:text-purple-500 transition-colors flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
                        <a href="mailto:refds1505@gmail.com" aria-label="Send an Email" className="hover:text-purple-500 transition-colors flex items-center gap-2"><Mail size={14}/> Email</a>
                    </div>
                </div>
            </div>
        </LLMWrapper>
    );
}
