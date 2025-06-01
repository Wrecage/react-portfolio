import React, { useState } from "react";
import { motion } from "framer-motion";

const repelVariant = {
  initial: { x: 0, y: 0 },
  hover: (custom: { mx: number; my: number }) => ({
    x: custom.mx * 0.4,
    y: custom.my * 0.4,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  }),
};

const RepelText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - (rect.left + rect.width / 2),
      y: e.clientY - (rect.top + rect.height / 2),
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`flex flex-wrap justify-center gap-x-3 gap-y-1 ${className}`}
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="flex gap-0.5">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              custom={{ mx: mousePos.x, my: mousePos.y }}
              variants={repelVariant}
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default RepelText;
