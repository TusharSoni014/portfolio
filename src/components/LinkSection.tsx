"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";
import NeonBtnSecondary from "./ui/NeonBtnSecondary/NeonBtnSecondary";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <p className="font-bold text-xl text-white">Projects</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I&apos;ve Made projects ranging from Simple HTML, CSS, and JavaScript to{" "}
        <b className="font-bold text-cyan-500">ThreeJS</b> and{" "}
        <b className="font-bold text-cyan-500">AI SaaS</b>. Click the button
        below to visit my projects page.
      </p>
      <Link href="/projects">
        <NeonBtnSecondary>View Projects</NeonBtnSecondary>
      </Link>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="p-3">
      <p className="font-bold text-xl text-white">Skills</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I&apos;m a Full Stack Web Developer, with skills including, HTML, CSS,
        JavaScript, React... and more, Visit the skills page to view the
        detailed information about my skills and which programming languages I&apos;m
        proficient in.
      </p>
      <Link href="/skills">
        <NeonBtnSecondary>View Skills</NeonBtnSecondary>
      </Link>
    </div>
  );
};
const AboutMe = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">About Me</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        If you wanted to know more about me and my coding journey over the
        years, then make sure to visit the{" "}
        <Link href="/aboutme">
          <b className="font-bold text-cyan-500">/aboutme</b>
        </Link>{" "}
        by clicking the button below.
      </p>
      <Link href="/aboutme">
        <NeonBtnSecondary>Visit About me</NeonBtnSecondary>
      </Link>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <Projects />,
    className: "md:col-span-2",
    title: "Projects",
    thumbnail:
      "https://w0.peakpx.com/wallpaper/536/434/HD-wallpaper-project-model-structure-lines-points-dark.jpg",
  },
  {
    id: 2,
    content: <Skills />,
    className: "col-span-1",
    title: "Skills",
    thumbnail:
      "https://media.istockphoto.com/id/1176737314/photo/dots-and-lines-connection-on-abstract-technology-background.webp?b=1&s=170667a&w=0&k=20&c=4DWWJovOyI7ZdJ31zvn3xkDJar1j7cqMQE0EDW9TJO0=",
  },
  {
    id: 3,
    content: <AboutMe />,
    className: "col-span-1",
    title: "About Me",
    thumbnail:
      "https://www.zavenir.com/assets/uploads/contact-us/b199c5d5ec6574afc6fc1fd0eb893dd1.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    title: "Socials",
    thumbnail:
      "https://img.freepik.com/premium-photo/background-famous-social-media-icons_250994-1375.jpg",
  },
];

export default function LinkSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="h-screen py-20 w-full border-[1px] border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.6)] rounded-xl">
        <LayoutGrid cards={cards} />
      </div>
    </motion.div>
  );
}
