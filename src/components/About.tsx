import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import NeonBtn from "./ui/NeonBtn/NeonBtn";

const about =
  "I'm a dedicated and self-taught programmer with a strong foundation in full stack web development, particularly skilled in the MERN stack. As a college dropout turned coding enthusiast, I've honed my skills through hands-on projects and continuous learning. My passion for coding extends to teaching, click the button below to visit my skills section.";

export default function About() {
  return (
    <div className="h-screen w-full p-3 lg-p-0 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-6xl w-fit text-cyan-500"
      >
        About_me
        <TextGenerateEffect words={about} />
        <div className="__btn_container w-full flex justify-center items-center mt-3">
          <NeonBtn onClick={() => console.log("clicked")}>btn</NeonBtn>
        </div>
      </motion.div>
    </div>
  );
}
