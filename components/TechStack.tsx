"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { skillsCategories } from "@/content/skills";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export function TechStack() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full space-y-4">
            <div className="flex justify-end">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                    {isExpanded ? "Show Less" : "View All Areas"}
                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 pt-4"
            >
                {skillsCategories.map((category) => (
                    <motion.div variants={itemVariants} key={category.name} className="space-y-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.slice(0, isExpanded ? undefined : 4).map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ y: -2 }}
                                    className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-purple-500/40 hover:bg-purple-50/50 dark:hover:bg-purple-900/10"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
