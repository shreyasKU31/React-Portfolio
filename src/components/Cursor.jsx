import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      clearTimeout(window._cursorIdle);
      window._cursorIdle = setTimeout(() => setIsMoving(false), 100);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cursor"
        className="pointer-events-none fixed z-[9999]"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isHovering ? (
          <div className="relative w-12 h-12">
            <img src={assets.ufo} className="w-full h-full" alt="UFO" />
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-6 h-20 bg-yellow-300 opacity-30 blur-lg rotate-3 origin-top rounded-lg"></div>
          </div>
        ) : (
          <div className="relative w-10 h-10">
            <img src={assets.rocket} className="w-full h-full" alt="Rocket" />
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-full origin-top"
              animate={{
                width: isMoving ? "12px" : "10px",
                height: isMoving ? "70px" : "40px",
                background:
                  "radial-gradient(circle at 50% 0%, #facc15, #fb923c, transparent)",
                opacity: isMoving ? 0.9 : 0.9,
                filter: isMoving
                  ? "drop-shadow(0 0 6px #facc15)"
                  : "drop-shadow(0 0 4px #fb923c)",
                rotate: isMoving ? 0 : -2,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[3.5rem] w-28 h-28"
              animate={{
                opacity: isMoving ? 0.35 : 0.55,
                scale: isMoving ? 1.3 : 0.9,
              }}
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 10%, transparent 80%)",
                filter: "blur(14px)",
                borderRadius: "50%",
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
