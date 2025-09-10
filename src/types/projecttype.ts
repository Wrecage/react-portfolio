import type { IconType } from "react-icons";


export interface TechStackItem {
  icon: IconType;
  name: string;
}

export interface Project  {
  title: string;
  type: string;
  role: string;
  description: string;
  techStack: TechStackItem[];
  github?: string;
  demo?: string;
  proto?: string;
  video?: string;
  screenshots?: string[];
}
