"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { careerData } from "@/content/career";
import type { CareerItem } from "@/content/career";
import { Globe, GraduationCap, Building2 } from "lucide-react";

export function CareerTabs() {
    const experienceItems = careerData.filter(item => item.category === "experience");
    const educationItems = careerData.filter(item => item.category === "education");

    return (
        <div className="space-y-16">
            <CareerSection title="Work Experience" items={experienceItems} />
            <CareerSection title="Education & Certifications" items={educationItems} />
        </div>
    );
}

function CareerSection({ title, items }: { title: string; items: CareerItem[] }) {
    const [activeTab, setActiveTab] = useState(0);
    const activeItem = items[activeTab];
    const isEducation = activeItem.category === "education";

    return (
        <section aria-label={title}>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{title}</h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 min-h-[320px]">
                <div role="tablist" aria-label={title} className="flex overflow-x-auto md:flex-col gap-2 md:w-1/3 border-b md:border-b-0 md:border-l border-zinc-200 dark:border-zinc-800 pb-4 md:pb-0 hide-scrollbar relative">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            id={`${item.id}-tab`}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === index}
                            aria-controls={`${item.id}-panel`}
                            onClick={() => setActiveTab(index)}
                            className={`text-left px-4 py-3 md:py-4 transition-all min-w-max md:min-w-0 md:whitespace-normal md:-ml-[1px] relative flex flex-col gap-1 ${activeTab === index
                                ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10"
                                : "text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                                }`}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId={`${title}-activeTabBorder`}
                                    className="absolute bottom-0 left-0 w-full md:w-[2px] md:h-full bg-purple-500"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 text-sm font-semibold">{item.role}</span>
                            <span className="relative z-10 text-xs opacity-70">{item.company}</span>
                        </button>
                    ))}
                </div>

                <div
                    id={`${activeItem.id}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${activeItem.id}-tab`}
                    className="md:w-2/3 md:pl-6 pt-4 md:pt-0"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 overflow-hidden">
                                    {activeItem.logo ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={activeItem.logo} alt={activeItem.company} className="w-full h-full object-cover bg-white" />
                                    ) : isEducation ? (
                                        <GraduationCap size={24} />
                                    ) : (
                                        <Building2 size={24} />
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                        {activeItem.role}
                                    </h4>
                                    <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1 flex items-center gap-2">
                                        {activeItem.company}
                                        {activeItem.link && (
                                            <a href={activeItem.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${activeItem.company}`} className="text-zinc-400 hover:text-purple-500 transition-colors">
                                                <Globe size={14} />
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm font-mono tracking-tight text-zinc-600 dark:text-zinc-400 mb-6 flex flex-wrap items-center gap-2">
                                {activeItem.date} <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" /> {activeItem.location}
                            </p>

                            {activeItem.tech.length > 0 && (
                                <div className="mb-6 space-y-3">
                                    <h5 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Relevant skills &amp; systems</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {activeItem.tech.map(skill => (
                                            <span key={skill} className="rounded-full border border-zinc-200 dark:border-zinc-700/50 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <ul className="space-y-4">
                                {activeItem.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
