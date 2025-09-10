"use client";
import type { FC } from "react";
import { motion } from "framer-motion";
import type { SkillCategory as SkillCategoryType } from "@/types/skilltypes";

type Props = SkillCategoryType;




const SkillCategory: FC<Props> = ({ title, skills }) => {
  return (
  <motion.div
    className=" dark:from-slate-500 dark:to-slate-700 text-black dark:text-white rounded-2xl p-4 w-full sm:w-[300px] h-[320px] flex flex-col justify-between  transition  hover:scale-[1.03]"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >

  <div className="flex flex-col gap-4 h-full rounded-xl shadow-lg bg-white/30 dark:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/10 p-4 overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <ul className="grid grid-cols-3 gap-4 overflow-auto">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex flex-col items-center text-center">
            <span className={`${skill.colorClass || ""}`} style={skill.style || {}}>
              {skill.icon}
            </span>
              <span className="text-xs mt-1 text-gray-800 dark:text-gray-300 break-words">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillCategory;
