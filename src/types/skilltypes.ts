import type { CSSProperties } from "react";

export type Skill = {
  name: string;
  icon: React.JSX.Element;
  colorClass?: string;
  style?: CSSProperties;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};
