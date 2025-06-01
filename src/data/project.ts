import {
  FaHtml5, FaCss3Alt, FaJsSquare,
} from "react-icons/fa";
import {
  SiDjango, SiSpringboot, SiMysql,SiReact,
  SiPostgresql, SiFigma, SiMeta,
  SiLanguagetool 
} from "react-icons/si";


import { DiSqllite } from "react-icons/di";
import type { Project } from "@/types/projecttype";
import GroqIcon from "@/components/icons/GroqIcon";

export const projects: Project[] = [
  {
    title: "SocialSphere",
    type: "Capstone Project",
    role: "Full Stack Developer",
    description:
      "An AI-powered social media management tool that automates posting and content creation for CIT-University’s innovation lab.",
    techStack: [
      { icon: SiDjango, name: "Django" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaHtml5, name: "HTML" },
      { icon: FaJsSquare, name: "Javascript" },
      { icon: SiPostgresql, name: "PostgreSQL"},
      { icon: SiMeta, name: "Meta Graph API"},
      { icon: GroqIcon , name: "Groq" },
    ],
    github: "https://github.com/yourusername/socialsphere",
    demo: "https://socialsphere.example.com",
    video: "https://www.youtube.com/embed/jqyvy7Xofgg?si=dxfe8QIofUoxK5Qt",
    screenshots: [
      "SocialSphere/SocialSphere (1).png",
      "SocialSphere/SocialSphere (2).png",
      "SocialSphere/SocialSphere (3).png",
      "SocialSphere/SocialSphere (4).png",
      "SocialSphere/SocialSphere (5).png",
      "SocialSphere/SocialSphere (6).png",
      "SocialSphere/SocialSphere (7).png",
      "SocialSphere/SocialSphere (8).png",
      "SocialSphere/SocialSphere (9).png",
      "SocialSphere/SocialSphere (10).png",
      "SocialSphere/SocialSphere (11).png",
      "SocialSphere/SocialSphere (12).png",
      "SocialSphere/SocialSphere (13).png",
      "SocialSphere/SocialSphere (14).png",

    ],
  },
  {
    title: "ProDigi",
    type: "Academic Project",
    role: "Full Stack Developer",
    description:
      "A productivity web app for managing daily tasks and personal journal entries with grammar-check integration.",
    techStack: [
      { icon: SiDjango, name: "Django" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaHtml5, name: "HTML" },
      { icon: FaJsSquare, name: "Javascript" },
      { icon: DiSqllite, name: "Sqlite"},
      { icon: SiLanguagetool, name: "Languange Tool API" },
    ],
    github: "https://github.com/yourusername/prodigi",
    demo: "https://prodigi.example.com",
    video: "https://www.youtube.com/embed/k55jYfu8d5o?si=nY9yTqov7C9oVjsx",
    screenshots: [
      "ProDigi/Prodigi  (1).png",
      "ProDigi/Prodigi  (2).png",
      "ProDigi/Prodigi  (3).png",
      "ProDigi/Prodigi  (4).png",
      "ProDigi/Prodigi  (5).png",
      "ProDigi/Prodigi  (6).png",
      "ProDigi/Prodigi  (7).png",
      "ProDigi/Prodigi  (8).png",
      "ProDigi/Prodigi  (9).png",
      "ProDigi/Prodigi  (10).png",
      "ProDigi/Prodigi  (11).png",
      "ProDigi/Prodigi  (12).png",
    ],
  },
  {
    title: "Reflect Daily",
    type: "Academic Project",
    role: "Fullstack Developer",
    description:
      "A guided self-reflection app featuring inspirational quotes and insightful visual dashboards to track personal growth.",
    techStack: [
      { icon: SiSpringboot, name: "Srping Boot" },
      { icon: SiReact, name: "React" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiMysql, name: "MySQL" },

    ],
    github: "https://github.com/yourusername/reflect-daily",
    demo: "https://reflectdaily.example.com",
    screenshots: [
      "ReflectDaily/ReflectDaily  (1).png",
      "ReflectDaily/ReflectDaily  (2).png",
      "ReflectDaily/ReflectDaily  (3).png",
      "ReflectDaily/ReflectDaily  (4).png",
      "ReflectDaily/ReflectDaily  (5).png",
      "ReflectDaily/ReflectDaily  (6).png",
      "ReflectDaily/ReflectDaily  (7).png",
      "ReflectDaily/ReflectDaily  (8).png",
      "ReflectDaily/ReflectDaily  (9).png",
      "ReflectDaily/ReflectDaily  (10).png",
      "ReflectDaily/ReflectDaily  (11).png",
    ],
  },
  {
    title: "Recruitment Platform (Interview Scheduling & Onboarding)",
    type: "Internship Project",
    role: "UI/UX Designer",
    description:
      "A responsive recruitment platform including interview scheduling and onboarding management features built during internship.",
    techStack: [
      { icon: SiFigma, name: "Figma" },
    ],
    screenshots: [
      "Figma/Recruitment/Recruitment (1).png",
      "Figma/Recruitment/Recruitment (2).png",
      "Figma/Recruitment/Recruitment (3).png",
      "Figma/Recruitment/Recruitment (4).png",
      "Figma/Onboarding/Onboarding (1).png",
      "Figma/Onboarding/Onboarding (2).png",
      "Figma/Onboarding/Onboarding (3).png",
    ],
  
  },
  {
    title: "Realty Website Design: Tahao Road Business Centers & Condominium",
    type: "Internship Project",
    role: "UI/UX Designer",
    description:
      "Real estate website showcasing properties and business centers with map and image gallery, built with responsive layout and interactive design.",
    techStack: [
      { icon: SiFigma, name: "Figma" },
    ],
    screenshots: [
      "Figma/Realty Website Design.png",
    ],
  },
  {
    title: "Landing Page Design System",
    type: "Internship Project",
    role: "UI/UX Designer",
    description:
      "A modular design system for marketing landing pages using an 8pt grid, Material symbols, and reusable components in Figma and React.",
    techStack: [
      { icon: SiFigma, name: "Figma" },
    ],
    screenshots: [
      "Figma/Landing Page design system.png",
    ],
  },
];
