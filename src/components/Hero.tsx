
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [
  {
    text: "Full",
    className: "text-green-500 dark:text-slate-400",
  },
  {
    text: "Stack",
    className: "text-green-500 dark:text-slate-400",
  },
  {
    text: "Developer",
    className: "dark:text-cyan-500",
  },
];

export default function Hero() {
  return (
    <LampContainer className="h-[120dvh]">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-b from-white to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex flex-col justify-center items-center"
      >
        Tushar Soni <TypewriterEffect words={words} />
      </motion.h1>
    </LampContainer>
  );
}
