import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface TrailParticle {
  id: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  color: string;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [trail, setTrail] = useState<TrailParticle[]>([]);

  const colors = useMemo(() => ["#ec4899", "#9333ea", "#3b82f6", "#facc15", "#22d3ee"], []);

  const gradientStyle = useMemo(() => ({
    background: "linear-gradient(135deg, #ec4899, #9333ea, #3b82f6)",
    backgroundSize: "200% 200%",
    boxShadow: "0 0 20px rgba(236, 72, 153, 0.7), 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(59, 130, 246, 0.5)",
  }), []);

  const generateTrail = useCallback((x: number, y: number) => {
    setTrail((prev) => {
      if (prev.length > 40) return prev.slice(-40); // Limits particles to 40 max

      const newParticle = {
        id: `${Date.now()}-${Math.random()}`, // Guarantees unique key
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        scale: Math.random() * 1 + 0.5,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      return [...prev, newParticle];
    });
  }, [colors]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 16) return; // Limits updates to ~60fps
      lastTime = now;

      setPosition({ x: e.clientX, y: e.clientY });
      generateTrail(e.clientX, e.clientY);
    };

    const animateTrail = () => {
      setTrail((prev) =>
        prev.map((particle) => ({
          ...particle,
          opacity: Math.max(0, particle.opacity - 0.07),
          scale: particle.scale * 0.94,
          y: particle.y - 2, // Makes particles rise like fireworks
        })).filter((particle) => particle.opacity > 0)
      );
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", () => setIsVisible(true));
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.body.style.cursor = "none"; // Hide system cursor

    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
      cancelAnimationFrame(animationFrameId);
    };
  }, [generateTrail]);

  if (!isVisible) return null;

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: position.x - 12, y: position.y - 12 }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-6 h-6 rounded-full absolute inset-0"
          style={gradientStyle}
          animate={{ rotate: 360, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            backgroundPosition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-md" />
      </motion.div>

      {/* Firework-Inspired Trail Effect */}
      {trail.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed top-0 left-0 pointer-events-none"
          style={{ x: particle.x, y: particle.y }}
          animate={{ opacity: [1, 0], scale: [particle.scale, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: particle.color, filter: "blur(3px)" }} />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;