"use client";

import { useState } from "react";
import {
  SiC,
  SiExpress,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase } from "react-icons/fa";

const SKILLS = [
  { name: "JavaScript", Icon: SiJavascript, iconClass: "text-[#F7DF1E]" },
  { name: "TypeScript", Icon: SiTypescript, iconClass: "text-[#3178C6]" },
  { name: "Python",     Icon: SiPython,     iconClass: "text-[#3776AB]" },
  { name: "Java",       Icon: FaJava,       iconClass: "text-[#ED8B00]" },
  { name: "C",          Icon: SiC,          iconClass: "text-[#A8B9CC]" },
  { name: "SQL",        Icon: FaDatabase,   iconClass: "text-[#336791] dark:text-[#60a5fa]" },
  { name: "HTML",       Icon: SiHtml5,      iconClass: "text-[#E34F26]" },
  { name: "CSS",        Icon: FaCss3Alt,    iconClass: "text-[#1572B6]" },
  { name: "React",      Icon: SiReact,      iconClass: "text-[#61DAFB]" },
  { name: "Next.js",    Icon: SiNextdotjs,  iconClass: "text-slate-900 dark:text-white" },
  { name: "Express",    Icon: SiExpress,    iconClass: "text-slate-700 dark:text-slate-300" },
  { name: "Flask",      Icon: SiFlask,      iconClass: "text-slate-900 dark:text-white" },
  { name: "Git",        Icon: SiGit,        iconClass: "text-[#F05032]" },
  { name: "Linux",      Icon: SiLinux,      iconClass: "text-slate-900 dark:text-white" },
  { name: "Three.js",   Icon: SiThreedotjs, iconClass: "text-slate-900 dark:text-white" },
];

function Pill({ name, Icon, iconClass }: (typeof SKILLS)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0px)",
        boxShadow: hovered ? "0 6px 20px rgba(37,99,235,0.18)" : undefined,
        borderColor: hovered ? "rgba(37,99,235,0.4)" : undefined,
        background: hovered ? "rgba(37,99,235,0.08)" : undefined,
        transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease",
      }}
      className="inline-flex max-w-full cursor-default items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[13px] text-foreground shadow-sm shadow-slate-900/5 backdrop-blur-sm sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-sm dark:shadow-black/40"
    >
      <Icon className={`shrink-0 ${iconClass}`} size={18} aria-hidden />
      {name}
    </span>
  );
}

export function SkillsList() {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
      {SKILLS.map((skill) => (
        <li key={skill.name} className="min-w-0">
          <Pill {...skill} />
        </li>
      ))}
    </ul>
  );
}
