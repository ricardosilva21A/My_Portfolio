export type CareerItem = {
    id: string;
    category: "experience" | "education";
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
        category: "experience",
        company: "TMG - MGC",
        role: "Services & Materials Management",
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
        id: "loja-linda",
        category: "experience",
        company: "Loja Linda",
        role: "Store Manager & Sales Associate",
        date: "January 2023 - June 2025",
        location: "Portugal",
        description: [
            "Managed day-to-day store operations and assisted customers with product selection and sales.",
            "Handled product selection and purchasing, overseeing inventory levels and stock availability.",
            "Managed product pricing and kept product and stock information up to date."
        ],
        tech: ["Store management", "Retail sales", "Product management", "Purchasing", "Inventory management", "Pricing"],
        logo: ""
    },
    {
        id: "lifeguard",
        category: "experience",
        company: "Lifeguard",
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
        id: "ipca-masters",
        category: "education",
        company: "IPCA",
        role: "Master's in Computer Science",
        date: "2026 - Present",
        location: "Barcelos, Portugal",
        description: [
            "Currently pursuing a Master's in Computer Science at IPCA.",
            "Aiming to pursue the double-degree pathway, with one year at IPCA and one year in Austria at FHV - Vorarlberg University of Applied Sciences."
        ],
        tech: ["Computer science", "Advanced study", "Continuous learning"],
        link: "https://www.ipca.pt/",
        logo: "https://logo.clearbit.com/ipca.pt"
    },
    {
        id: "ipca",
        category: "education",
        company: "IPCA",
        role: "Bachelor's in Computer Systems Engineering",
        date: "2023 - 2026",
        location: "Barcelos, Portugal",
        description: [
            "Completed a degree in Computer Systems Engineering, building foundations in software engineering, systems thinking, and practical problem solving.",
            "Developed technical skills in programming, software design, research, and applied digital innovation."
        ],
        tech: ["Systems thinking", "Software engineering", "Programming", "Project coordination"],
        link: "https://www.ipca.pt/",
        logo: "https://logo.clearbit.com/ipca.pt"
    },
    {
        id: "ipca-steam-genai",
        category: "education",
        company: "IPCA",
        role: "STEAM Microcredential in Generative Artificial Intelligence",
        date: "September 2025",
        location: "Online",
        description: [
            "Studied generative AI capabilities, effective prompting, and practical applications.",
            "Explored how to use AI tools across different domains and make the most of their potential."
        ],
        tech: ["Generative AI", "Prompting", "AI applications"],
        link: "https://www.ipca.pt/",
        logo: "https://logo.clearbit.com/ipca.pt"
    },
    {
        id: "ipca-english-b2",
        category: "education",
        company: "IPCA",
        role: "English B2 Course",
        date: "November 2024",
        location: "Hybrid",
        description: [
            "Completed an English language course at B2 level."
        ],
        tech: ["English", "B2"],
        link: "https://www.ipca.pt/",
        logo: "https://logo.clearbit.com/ipca.pt"
    },
    {
        id: "run-eu-ai2",
        category: "education",
        company: "RUN-EU",
        role: "Engineering Applications in Research Challenge AI2",
        date: "June 2024",
        location: "Barcelos, Portugal",
        description: [
            "Collaborated with professionals from different fields on innovative solutions to support ecological activities in the Barcelos region.",
            "Contributed to research and solutions addressing environmental sustainability challenges."
        ],
        tech: ["Applied research", "Interdisciplinary collaboration", "Sustainability", "Problem solving"],
        logo: ""
    },
    {
        id: "ul-engineering-python",
        category: "education",
        company: "University of Limerick (with Dell)",
        role: "Engineering Applications in Python",
        date: "May - June 2024",
        location: "Ireland",
        description: [
            "Participated in a blended technical program on cloud technologies and emerging IT trends.",
            "Collaborated with engineers across Europe and built CloudVault, a guided cloud project incorporating security best practices and cloud architecture principles."
        ],
        tech: ["Python", "Cloud technologies", "Cloud architecture", "Security best practices"],
        logo: ""
    }
];
