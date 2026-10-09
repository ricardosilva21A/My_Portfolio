"use client";

import { Home, Briefcase, SlidersHorizontal, User } from "lucide-react";
import { FloatingNav } from "./ui/floating-navbar";

export function TopNavigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-zinc-600" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-zinc-600" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 text-zinc-600" />,
    },
    {
      name: "Focus Areas",
      link: "/interests",
      icon: <SlidersHorizontal className="h-4 w-4 text-zinc-600" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
