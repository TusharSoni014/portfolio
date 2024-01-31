"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import LinkSection from "@/components/LinkSection";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam>
      <Hero />
      <About />
      <LinkSection />
    </TracingBeam>
  );
}
