import Link from "next/link";
import HeroWorkingAnimation from "./HeroWorkingAnimation";
import ParticleBackground from "./ParticleBackground";
import { ArrowRight, Braces } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream text-center px-5 pt-15 pb-12">
      <ParticleBackground />
      <div className="flex justify-center h-28 mb-8">
        <HeroWorkingAnimation />
      </div>

      <span className="text-[20px] bg-white rounded-full py-4 px-6 text-primary-dark font-semibold">
        Software Engineer. Tech Enthusiast.
      </span>

      <h1 className="font-serif text-[clamp(32px,5vw,64px)] leading-[1.15] text-primary-dark max-w-3/5 mx-auto mt-8">
        Build Production-Ready Software That Scales{" "}
        <span className="text-orange">From Idea to Production.</span>
      </h1>

      <p className="text-primary-dark text-[20px] font-medium max-w-3/6 mx-auto mt-12 break-words leading-relaxed">
        I design and build scalable web applications, APIs, and data pipelines.
        Specializing in full-stack development with modern frameworks and cloud infrastructure.
      </p>

      <div className="flex justify-center mt-5">
        <Link
        href="mailto:holonouemmanuel0@gmail.com"
        className="flex items-center text-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange/90 transition-colors"
      >
        <span className="bg-white rounded-full text-orange flex justify-center items-center w-[40px] h-[40px]">
          <Braces />
        </span>
        <span className="text-[20px]">Contact me</span>
        <ArrowRight />
      </Link>
      </div>
    </section>
  );
}
