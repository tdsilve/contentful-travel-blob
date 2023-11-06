"use client";

import { useScroll, motion } from "framer-motion";
import React from "react";
export const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  React.useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#3e3e3e",
        height: "10px",
        transformOrigin: "0%",
      }}
    />
  );
};
