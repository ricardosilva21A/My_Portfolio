import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Briefcase, Mail, Github, Linkedin } from "lucide-react";

import LLMWrapper from "@/components/LLMWrapper";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { FadeIn, HeroFadeIn } from "@/components/ui/FadeIn";

const CareerTabs = dynamic(() => import('@/components/CareerTabs').then(mod => mod.CareerTabs));
const TechStack = dynamic(() => import('@/components/TechStack').then(mod => mod.TechStack));
const FeaturedProjects = dynamic(() => import('@/components/FeaturedProjects'));
const LocationWidget = dynamic(() => import('@/components/LocationWidget').then(mod => mod.LocationWidget));

const llmMarkdown = `
# Ricardo Silva - Computer Systems Engineer | People & Process Improvement

I am a Computer Systems Engineer and Services and Materials Specialist based in Guimarães, Portugal. I focus on people management, process coordination, and applying systems thinking to make work clearer and more efficient.

## Professional Profile
- **Professional identity**: Computer Systems Engineer.
- **Focus**: People management, operational processes, and continuous improvement.
- **Approach**: Combine systems thinking with collaboration, clear communication, and practical process improvement.
- **Experience**: Services and materials operations, supplier coordination, billing, invoicing, and inventory support.

## Areas of Expertise
- People and team collaboration.
- Process coordination and operational improvement.
- Supplier, materials, inventory, and cost management.
- Business systems: SAP, INTEX, and ManWinWin.

## Current Projects
- **Orthopaedic X-ray Measurement Assistant**: In development to help orthopaedic clinicians identify the correct X-ray reference and calculate measurements automatically, supporting productivity.
- **Textile Company ERP**: In development with an emphasis on user-friendly workflows and clear manuals for each task.

## Interests
- People management, process optimization, technology, and continuous learning.
`;

export default function Home() {
  return (
    <LLMWrapper llmContent={llmMarkdown}>
      <div className="container mx-auto px-4 max-w-5xl pt-24 pb-16 space-y-32 relative z-10">
        {/* 1. Introduction */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center relative w-full overflow-visible py-20 pb-10">
          <HeroFadeIn className="relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-0">
            <ProfilePhoto />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white mb-4">
              Ricardo Silva
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-zinc-600 dark:text-zinc-400 mb-8 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full bg-zinc-50 dark:bg-zinc-900/50">
                <span>Computer Systems Engineer</span>
                <span className="opacity-50">•</span>
                <span>People &amp; Process Improvement</span>
                <span className="opacity-50">•</span>
                <span>Guimarães, Portugal</span>
            </div>

            <div className="max-w-xl mx-auto space-y-5 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty text-center">
              <p>
                I&apos;m a <span className="underline decoration-purple-500 decoration-wavy underline-offset-4 text-zinc-900 dark:text-zinc-200 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Computer Systems Engineer</span> focused on people, processes, and operational improvement. I use systems thinking to understand how teams work and find practical ways to make everyday processes clearer and more efficient.
              </p>
              <p>
                My experience in services and materials brings together supplier coordination, billing, inventory, and cost awareness. I&apos;m currently working on an orthopaedic X-ray measurement assistant and a user-friendly ERP for a textile company.
              </p>
            </div>

            {/* Call to Actions - Terminal Style */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <Link
                href="/#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold transition-all hover:scale-105 shadow-md"
              >
                <Briefcase size={14} />
                <span>Explore my experience</span>
              </Link>
              <span className="text-zinc-400 dark:text-zinc-600 text-sm italic font-serif">or</span>
              <Link
                href="mailto:refds1505@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <Mail size={14} />
                <span>Email Me</span>
              </Link>
            </div>
            
            {/* Mobile-Only Social Links (Moved from Dock) */}
            <div className="flex items-center justify-center gap-6 mt-10 md:hidden text-zinc-600 dark:text-zinc-400">
                <a href="https://github.com/ricardosilva21A" target="_blank" aria-label="GitHub Profile" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com/in/ricardofsilva0" target="_blank" aria-label="LinkedIn Profile" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:refds1505@gmail.com" aria-label="Send an Email" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"><Mail size={20} /></a>
            </div>

          </HeroFadeIn>
        </section>

        {/* 2. Focus Areas */}
        <section>
          <FadeIn>
            <div className="mb-10 lg:mb-14">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Areas of Focus</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                I apply my systems engineering background to people-centered operations, process improvement, and practical digital solutions.
              </p>
            </div>
            <TechStack />
          </FadeIn>
        </section>

        {/* 3. Career Section */}
        <section id="experience">
          <FadeIn>
            <div className="mb-8">
              <span className="text-zinc-600 dark:text-zinc-400 font-mono tracking-widest uppercase text-sm">So Far</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-1">
                Experience &amp; Education
              </h2>
            </div>

            <CareerTabs />
          </FadeIn>
        </section>

        {/* 4. How I Contribute */}
        <section>
          <FadeIn>
            <div className="mb-8">
              <span className="text-zinc-600 dark:text-zinc-400 font-mono tracking-widest uppercase text-sm">My approach</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-1">How I Contribute</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "People & collaboration", text: "Build positive working relationships, communicate clearly, and support teams in working toward shared goals." },
                { title: "Process improvement", text: "Understand day-to-day workflows, spot friction, and look for practical opportunities to improve efficiency and accuracy." },
                { title: "Operational coordination", text: "Bring structure to suppliers, materials, billing, and inventory while keeping service and cost in view." },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* 5. Projects Preview */}
        <section>
          <FadeIn>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-bold">Selected Projects</h2>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </div>

            <FeaturedProjects />

            <Link
              href="/projects"
              className="md:hidden flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-purple-600 dark:text-purple-400 font-medium"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </section>

        {/* 6. Location */}
        <section>
          <FadeIn>
            <div className="max-w-md h-[220px]">
              <LocationWidget />
            </div>
          </FadeIn>
        </section>

      </div>
    </LLMWrapper>
  );
}
