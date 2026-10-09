import { ChartNoAxesCombined, MapPin, Users, Workflow } from "lucide-react";
import LLMWrapper from "@/components/LLMWrapper";

export const metadata = {
    title: "Focus Areas | Ricardo Silva",
    description: "Ricardo Silva's interests in people management, process coordination, and continuous improvement.",
};

const focusAreas = [
    {
        title: "People & team development",
        description: "Building trust, communicating clearly, and helping people work together toward shared objectives.",
        icon: Users,
    },
    {
        title: "Process coordination",
        description: "Understanding workflows and hand-offs so that responsibilities, information, and resources are coordinated effectively.",
        icon: Workflow,
    },
    {
        title: "Continuous improvement",
        description: "Looking for practical opportunities to improve efficiency, accuracy, service, and cost awareness.",
        icon: ChartNoAxesCombined,
    },
];

export default function FocusAreasPage() {
    const llmContent = `# Focus Areas\n\nRicardo Silva is based in Guimarães, Portugal, and is interested in people management, process coordination, and continuous improvement. These interests connect his operational experience in services and materials with his Computer Systems Engineering studies.`;

    return (
        <LLMWrapper llmContent={llmContent}>
            <main className="container mx-auto min-h-[80vh] max-w-5xl space-y-12 px-4 pb-16 pt-32">
                <header className="space-y-5 border-b border-zinc-200 pb-10 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        <MapPin size={16} className="text-purple-500" />
                        Guimarães, Portugal
                    </div>
                    <h1 className="text-4xl font-black tracking-tight md:text-5xl">People, Processes &amp; Improvement</h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        The areas I want to keep developing, and where I aim to make a practical contribution to teams and organizations.
                    </p>
                </header>

                <section className="grid gap-5 md:grid-cols-3" aria-label="Areas of focus">
                    {focusAreas.map(({ title, description, icon: Icon }) => (
                        <article key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <Icon size={24} className="mb-5 text-purple-500" />
                            <h2 className="mb-3 text-xl font-bold">{title}</h2>
                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
                        </article>
                    ))}
                </section>
            </main>
        </LLMWrapper>
    );
}
