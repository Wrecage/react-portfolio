"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface RippleEffect {
  id: string
  x: number
  y: number
  scale: number
  opacity: number
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const [isPressed, setIsPressed] = useState(false)

  const createRipple = useCallback((x: number, y: number) => {
    const newRipple: RippleEffect = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      scale: 0,
      opacity: 1,
    }

    setRipples((prev) => {
      // Limit to 8 ripples for performance
      const filtered = prev.filter((ripple) => ripple.opacity > 0.1)
      return [...filtered.slice(-7), newRipple]
    })
  }, [])

  useEffect(() => {
    let animationFrameId: number
    let lastTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime < 16) return // 60fps throttle
      lastTime = now

      setPosition({ x: e.clientX, y: e.clientY })

      // Create ripple effect on movement
      if (Math.random() > 0.7) {
        // 30% chance for performance
        createRipple(e.clientX, e.clientY)
      }
    }

    const handleMouseDown = () => {
      setIsPressed(true)
      createRipple(position.x, position.y)
    }

    const handleMouseUp = () => {
      setIsPressed(false)
    }

    const animateRipples = () => {
      setRipples((prev) =>
        prev
          .map((ripple) => ({
            ...ripple,
            scale: Math.min(ripple.scale + 0.8, 50),
            opacity: Math.max(0, ripple.opacity - 0.02),
          }))
          .filter((ripple) => ripple.opacity > 0),
      )
      animationFrameId = requestAnimationFrame(animateRipples)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", () => setIsVisible(true))
    document.addEventListener("mouseleave", () => setIsVisible(false))
    document.body.style.cursor = "none"

    animationFrameId = requestAnimationFrame(animateRipples)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "auto"
      cancelAnimationFrame(animationFrameId)
    }
  }, [createRipple, position.x, position.y])

  if (!isVisible) return null

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: position.x - 8, y: position.y - 8 }}
        animate={{
          scale: isPressed ? 1.5 : 1,
          rotate: 360,
        }}
        transition={{
          scale: { duration: 0.1 },
          rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 shadow-lg" />
        <div className="absolute inset-0.5 rounded-full bg-white/30 backdrop-blur-sm" />
      </motion.div>

      {/* Sequin-like Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed top-0 left-0 pointer-events-none rounded-full border-2 border-blue-400/30"
          style={{
            x: ripple.x - ripple.scale / 2,
            y: ripple.y - ripple.scale / 2,
            width: ripple.scale,
            height: ripple.scale,
            opacity: ripple.opacity,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${ripple.opacity * 0.1}) 0%, transparent 70%)`,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
