"use client";
import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 0.5,
        }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "100000000px",

          border: "4px solid rgba(0, 0, 0, 0)",
          borderTop: "2px solid blue",
          borderBottom: "2px solid blue",
        }}
      />
    </div>
  );
}
