import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaGithub,FaFileWord, FaFileExcel, FaFilePowerpoint
} from "react-icons/fa";
import {
  SiTailwindcss, SiDjango, SiSpringboot, SiMysql,
  SiPostgresql, SiEclipseide, SiVite, SiFigma, SiTypescript,
  SiRender, SiVercel, SiHeroku, SiJira, SiClickup, SiTrello, SiMeta,
  SiPythonanywhere, SiRailway, SiLanguagetool 
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { DiSqllite } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import type { SkillCategory } from "@/types/skilltypes";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, style: { color: "#61DAFB" } },
      { name: "HTML", icon: <FaHtml5 />, style: { color: "#E34F26" } },
      { name: "CSS", icon: <FaCss3Alt />, style: { color: "#1572B6" } },
      { name: "JavaScript", icon: <FaJsSquare />, style: { color: "#F7DF1E" } },
      { name: "TypeScript", icon: <SiTypescript />, style: { color: "#3178C6" } },
      { name: "Tailwind", icon: <SiTailwindcss />, style: { color: "#38B2AC" } },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython />, style: { color: "#3776AB" } },
      { name: "Java", icon: <FaJava />, style: { color: "#007396" } },
      { name: "Django", icon: <SiDjango />, style: { color: "#092E20" } },
      { name: "Spring Boot", icon: <SiSpringboot />, style: { color: "#6DB33F" } },
      { name: "Flask", icon: <BiLogoFlask />, style: { color: "#000000" } },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, style: { color: "#4479A1" } },
      { name: "PostgreSQL", icon: <SiPostgresql />, style: { color: "#336791" } },
      { name: "SQLite", icon: <DiSqllite />, style: { color: "#003B57" } },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub />, style: { color: "#181717" } },
      { name: "Figma", icon: <SiFigma />, style: { color: "#F24E1E" } },
      { name: "Vite", icon: <SiVite />, style: { color: "#646CFF" } },
      { name: "Eclipse", icon: <SiEclipseide />, style: { color: "#2C2255" } },
      { name: "Vscode", icon: <VscVscode />, style: { color: "#0079BA" } },

    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Railway", icon: <SiRailway />, style: { color: "#0B0D0E" } },
      { name: "Render", icon: <SiRender />, style: { color: "#46E3B7" } },
      { name: "Vercel", icon: <SiVercel />, style: { color: "#000000" } },
      { name: "Heroku", icon: <SiHeroku />, style: { color: "#430098" } },
      { name: "PythonAnywhere", icon: <SiPythonanywhere />, style: { color: "#306998" } },
    ],
  },
  {
    title: "Productivity Tools",
    skills: [
  { name: "Microsoft Word", icon: <FaFileWord />, colorClass: "text-blue-800" },
  { name: "Excel", icon: <FaFileExcel />, colorClass: "text-green-600" },
  { name: "PowerPoint", icon: <FaFilePowerpoint />, colorClass: "text-orange-500" },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Trello", icon: <SiTrello />, style: { color: "#0079BF" } },
      { name: "ClickUp", icon: <SiClickup />, style: { color: "#7B68EE" } },
      { name: "Jira", icon: <SiJira />, style: { color: "#0052CC" } },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      { name: "Meta Graph API", icon: <SiMeta />, style: { color: "#4267B2" } },
      { name: "LanguageTool API", icon: <SiLanguagetool />, style: { color: "#2C2C2C" } }, 
      { name: "Groq API", icon: <img src="groq.svg" alt="Groq" className="w-6 h-6" />,},
    ],
  },
];
