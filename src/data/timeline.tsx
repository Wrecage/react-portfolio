import { FaReact, FaJava } from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiSpringboot,
  SiFigma,
  SiJavascript,
  SiPrisma,
  SiSupabase,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMeta,
  SiLanguagetool,
  SiMysql,
} from "react-icons/si";

export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  description: string;
  tech: { name: string; icon: React.JSX.Element; color?: string }[];
};

export const timelineData: TimelineItem[] = [
  {
    year: "Jun – Sept 2025",
    title: "SaaS Inventory Management System",
    place: "Startup Project",
    description:
      "Building a SaaS inventory system for SMEs. Backend APIs built with Prisma, Supabase, Express (TypeScript) — 60% complete. Frontend in Next.js (React, TypeScript) with ~30% API integration done.",
    tech: [
      { name: "Prisma", icon: <SiPrisma />, color: "inherit" },
      { name: "Supabase", icon: <SiSupabase />, color: "inherit" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "inherit" },
      { name: "Express", icon: <SiExpress />, color: "inherit" },
      { name: "TypeScript", icon: <SiTypescript />, color: "inherit" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "inherit" },
      { name: "React", icon: <FaReact />, color: "inherit" },
    ],
  },
  {
    year: "2025",
    title: "UI/UX Design Intern",
    place: "Pixel8 Web Solutions & Consultancy Inc.",
    description:
      "Created responsive web designs and user flows for 6 platforms. Delivered reusable design systems that cut iteration time by 30%.",
    tech: [
      { name: "Figma", icon: <SiFigma />, color: "inherit" },
      { name: "Google Sites", icon: <FaReact />, color: "inherit" }, // placeholder
    ],
  },
  {
    year: "2023 – 2024",
    title: "SocialSphere",
    place: "CIT-University | Wildcats Innovation Labs",
    description:
      "AI-powered social media management suite. Automated posting via Facebook Graph API, integrated AI for captions, and improved response times by 30%.",
    tech: [
      { name: "Django", icon: <SiDjango />, color: "inherit" },
      { name: "HTML", icon: <SiDjango />, color: "inherit" }, // placeholder, could use SiHtml5
      { name: "CSS", icon: <SiDjango />, color: "inherit" }, // placeholder, could use SiCss3
      { name: "JavaScript", icon: <SiJavascript />, color: "inherit" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "inherit" },
      { name: "Groq AI", icon: <img src="groq.svg" className="w-6 h-6" />, color: "inherit" },
      { name: "Meta Graph API", icon: <SiMeta />, color: "inherit" },
    ],
  },
  {
    year: "2023",
    title: "ProDigi",
    place: "Academic Project",
    description:
      "Task & diary management app with full CRUD and productivity-focused features. Integrated LanguageTool API to reduce errors in diary entries by 30%.",
    tech: [
      { name: "Django", icon: <SiDjango />, color: "inherit" },
      { name: "HTML", icon: <SiDjango />, color: "inherit" }, // placeholder
      { name: "CSS", icon: <SiDjango />, color: "inherit" }, // placeholder
      { name: "JavaScript", icon: <SiJavascript />, color: "inherit" },
      { name: "SQLite", icon: <FaReact />, color: "inherit" }, // placeholder
      { name: "LanguageTool API", icon: <SiLanguagetool />, color: "inherit" },
    ],
  },
  {
    year: "2023",
    title: "Reflect Daily",
    place: "Academic Project",
    description:
      "Contributed backend APIs with Spring Boot and integrated them with React frontend. Improved task tracking efficiency by 30% after user testing.",
    tech: [
      { name: "React", icon: <FaReact />, color: "inherit" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "inherit" },
      { name: "Java", icon: <FaJava />, color: "inherit" },
      { name: "MySQL", icon: <SiMysql />, color: "inherit" },
    ],
  },
];
