export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillsCategories: SkillCategory[] = [
  {
    name: "People & Teamwork",
    skills: ["Team collaboration", "Communication", "Stakeholder coordination", "Training & support"],
  },
  {
    name: "Processes & Operations",
    skills: ["Process coordination", "Process optimization", "Supplier coordination", "Inventory management", "Billing & invoicing", "Cost awareness"],
  },
  {
    name: "Operational Systems",
    skills: ["SAP", "INTEX", "ManWinWin"],
  },
];
