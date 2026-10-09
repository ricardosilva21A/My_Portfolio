export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  story?: string;
  date: string;
  kind: "healthcare" | "erp" | "security" | "discovery";
  status?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Orthopaedic X-ray Measurement Assistant",
    description:
      "A system in development to help orthopaedic clinicians identify the appropriate reference on an X-ray and calculate measurements automatically, supporting a more efficient workflow.",
    tech: ["Healthcare workflow", "X-ray measurement", "Calculation automation", "Clinical support"],
    link: "mailto:refds1505@gmail.com?subject=Orthopaedic%20X-ray%20Measurement%20Assistant",
    date: "In development",
    kind: "healthcare",
    status: "In development",
    story:
      "This project aims to support orthopaedic clinicians by helping identify the correct reference on an X-ray and automate the associated calculation. The goal is to reduce manual steps and support productivity, with results remaining subject to clinical review.",
  },
  {
    title: "Textile Company ERP",
    description:
      "An ERP in development for a textile company, with a focus on an intuitive user experience and clear task-by-task manuals.",
    tech: ["ERP", "Textile operations", "User-friendly design", "Process documentation"],
    link: "mailto:refds1505@gmail.com?subject=Textile%20Company%20ERP",
    date: "In development",
    kind: "erp",
    status: "In development",
    story:
      "The aim is to make day-to-day ERP tasks easier to understand and use. The project emphasizes a user-friendly experience and comprehensive, practical instructions explaining what each task does and how to complete it.",
  },
  {
    title: "CloudVault",
    description:
      "A secure password manager application built with Python and Tkinter. It focuses on encrypted storage and safe credential management using SQL integration.",
    tech: ["Python", "Tkinter", "SQL", "Encryption"],
    link: "https://github.com/ricardosilva21A/CloudVault",
    date: "2024",
    kind: "security",
    story:
      "A practical project focused on secure data handling. The goal was to build a reliable password manager with privacy in mind, combining local application logic with database storage and encryption best practices.",
  },
  {
    title: "MuseHub",
    description:
      "A web platform that integrates museums worldwide, built with HTML, Bootstrap, TypeScript, and OpenStreetMap for interactive map-based discovery.",
    tech: ["HTML", "Bootstrap", "TypeScript", "OpenStreetMap"],
    link: "https://github.com/pokepark99/Programacao-Web",
    date: "2024",
    kind: "discovery",
    story:
      "This project brought together user experience and geographic data to create a museum discovery platform. It was a strong example of building a polished frontend with clear information architecture and interactive exploration.",
  },
];
