import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaGithub,
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaNodeJs
} from "react-icons/fa";

import {
  SiTypescript, SiTailwindcss, SiDjango, SiSpringboot, SiMysql,
  SiPostgresql, SiFigma, SiVite, SiEclipseide, SiRailway,
  SiRender, SiVercel, SiHeroku, SiPythonanywhere, SiClickup,
  SiTrello, SiJira, SiMeta, SiLanguagetool, SiNextdotjs,
  SiSupabase, SiExpress
} from "react-icons/si";

import { BiLogoFlask } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export const skillItems = [
  { name: "React", icon: <FaReact />, style: { color: "#61DAFB" } },
  { name: "HTML", icon: <FaHtml5 />, style: { color: "#E34F26" } },
  { name: "CSS", icon: <FaCss3Alt />, style: { color: "#1572B6" } },
  { name: "JavaScript", icon: <FaJsSquare />, style: { color: "#F7DF1E" } },
  { name: "TypeScript", icon: <SiTypescript />, style: { color: "#3178C6" } },
  { name: "Tailwind", icon: <SiTailwindcss />, style: { color: "#38B2AC" } },
  { name: "Next.js", icon: <SiNextdotjs />, style: { color: "#000000" } },

  { name: "Python", icon: <FaPython />, style: { color: "#3776AB" } },
  { name: "Java", icon: <FaJava />, style: { color: "#007396" } },
  { name: "Django", icon: <SiDjango />, style: { color: "#092E20" } },
  { name: "Spring Boot", icon: <SiSpringboot />, style: { color: "#6DB33F" } },
  { name: "Flask", icon: <BiLogoFlask />, style: { color: "#000000" } },
  { name: "Node.js", icon: <FaNodeJs />, style: { color: "#339933" } },
  { name: "Express.js", icon: <SiExpress />, style: { color: "#000000" } },

  { name: "MySQL", icon: <SiMysql />, style: { color: "#4479A1" } },
  { name: "PostgreSQL", icon: <SiPostgresql />, style: { color: "#336791" } },
  { name: "SQLite", icon: <DiSqllite />, style: { color: "#003B57" } },

  { name: "GitHub", icon: <FaGithub />, style: { color: "#181717" } },
  { name: "Figma", icon: <SiFigma />, style: { color: "#F24E1E" } },
  { name: "Vite", icon: <SiVite />, style: { color: "#646CFF" } },
  { name: "Eclipse", icon: <SiEclipseide />, style: { color: "#2C2255" } },
  { name: "Vscode", icon: <VscVscode />, style: { color: "#0079BA" } },

  { name: "Railway", icon: <SiRailway />, style: { color: "#0B0D0E" } },
  { name: "Render", icon: <SiRender />, style: { color: "#46E3B7" } },
  { name: "Vercel", icon: <SiVercel />, style: { color: "#000000" } },
  { name: "Heroku", icon: <SiHeroku />, style: { color: "#430098" } },
  { name: "PythonAnywhere", icon: <SiPythonanywhere />, style: { color: "#306998" } },
  { name: "Supabase", icon: <SiSupabase />, style: { color: "#3ECF8E" } },

  { name: "Microsoft Word", icon: <FaFileWord />, style: { color: "#2B579A" } },
  { name: "Excel", icon: <FaFileExcel />, style: { color: "#217346" } },
  { name: "PowerPoint", icon: <FaFilePowerpoint />, style: { color: "#D24726" } },

  { name: "Trello", icon: <SiTrello />, style: { color: "#0079BF" } },
  { name: "ClickUp", icon: <SiClickup />, style: { color: "#7B68EE" } },
  { name: "Jira", icon: <SiJira />, style: { color: "#0052CC" } },

  { name: "Meta Graph API", icon: <SiMeta />, style: { color: "#4267B2" } },
  { name: "LanguageTool API", icon: <SiLanguagetool />, style: { color: "#2C2C2C" } },
  { name: "Groq API", icon: <img src="groq.svg" alt="Groq" className="w-8 h-8" />, style: {} },
];
