"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timelineData } from "@/data/timeline";

function TechStackBadges({
  tech,
}: {
  tech: { name: string; icon: React.JSX.Element; color?: string }[];
}) {
  const [showAll, setShowAll] = useState(false);
  const toShow = showAll ? tech : tech.slice(0, 4);

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {toShow.map((t, i) => (
        <span
          key={t.name + i}
          className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20"
          style={{ color: t.color || "inherit" }}
        >
          {t.icon}
          {t.name}
        </span>
      ))}

      {tech.length > 4 && !showAll && (
        <span
          onClick={() => setShowAll(true)}
          className="cursor-pointer px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          +{tech.length - 4}
        </span>
      )}

      {showAll && (
        <span
          onClick={() => setShowAll(false)}
          className="cursor-pointer px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          Show less
        </span>
      )}
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        My Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block" />

        <div className="flex flex-col gap-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:self-start"
                  : "md:pl-12 md:self-end"
              }`}
            >
              {/* Connector dot */}
              <span className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 left-1/2 transform -translate-x-1/2 ring-4 ring-white dark:ring-gray-900" />

              <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.place} · {item.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <TechStackBadges tech={item.tech} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
