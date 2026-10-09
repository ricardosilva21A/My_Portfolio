export type CareerItem = {
    id: string;
    company: string;
    role: string;
    date: string;
    location: string;
    description: string[];
    tech: string[];
    link?: string;
    logo?: string;
};

export const careerData: CareerItem[] = [
    {
        id: "tmg-mgc",
        company: "TMG - MGC",
        role: "Services and Materials Specialist",
        date: "June 2025 - Present",
        location: "Guimarães, Portugal",
        description: [
            "Manage billing, invoicing, and operational support using SAP and INTEX platforms, with attention to accurate and timely processing.",
            "Coordinate with suppliers on service and material procurement, supporting continuity of operations and clear communication.",
            "Support inventory control, pricing, and cost optimization while maintaining accurate operational records."
        ],
        tech: ["Process coordination", "Supplier management", "Billing & invoicing", "Inventory control", "Cost optimization", "SAP", "INTEX", "ManWinWin"],
        link: "https://www.tmg-mgc.pt/",
        logo: "https://logo.clearbit.com/tmg-mgc.pt"
    },
    {
        id: "lifeguard",
        company: "Independent",
        role: "Lifeguard & Swimming Instructor",
        date: "June 2022 - September 2022",
        location: "Portugal",
        description: [
            "Provided water safety monitoring and emergency response in aquatic environments.",
            "Delivered swimming instruction, ensured compliance with safety procedures, and maintained a safe, supportive environment for participants.",
            "Worked as part of a safety-focused setup requiring vigilance, responsibility, and quick decision-making."
        ],
        tech: ["Safety procedures", "Training", "Communication", "Teamwork"],
        logo: ""
    },
    {
        id: "ipca",
        company: "IPCA",
        role: "Computer Systems Engineering",
        date: "2023 - 2027",
        location: "Barcelos, Portugal",
        description: [
            "Studying Computer Systems Engineering with a focus on software engineering, systems thinking, and practical problem solving.",
            "Developing technical foundations in programming, software design, research, and applied digital innovation."
        ],
        tech: ["Systems thinking", "Process analysis", "Project coordination", "Continuous learning"],
        link: "https://www.ipca.pt/",
        logo: "https://logo.clearbit.com/ipca.pt"
    }
];
