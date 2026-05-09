"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  note?: string;
}

const steps: ProcessStep[] = [
  {
    icon: "1",
    title: "Kickoff & Research",
    description: "Understanding your vision, users, and business goals",
  },
  {
    icon: "2",
    title: "Planning & Architecture",
    description:
      "Designing backend APIs and infrastructure that are robust, efficient, and growth-oriented.",
  },
  {
    icon: "3",
    title: "Design",
    description:
      "Crafting intuitive, user-friendly interfaces that align with your brand and delight users.",
  },
  {
    icon: "4",
    title: "Development",
    description:
      "Building and deploying high-quality software solutions using modern technologies and best practices.",
  },
  {
    icon: "5",
    title: "Quality Assurance",
    description:
      "Ensuring the software meets the highest standards through rigorous testing and validation.",
    note: "*Bug fixes and optimizations included",
  },
  {
    icon: "6",
    title: "Launch & Delivery",
    description:
      "Deploying your product to production and providing ongoing support to ensure a smooth launch and successful delivery.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate each step with ScrollTrigger
    gsap.from(".step", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".step",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <section
      id="how-it-works"
      className="bg-cream px-6 md:px-20 min-h-screen flex flex-col"
    >
      <div className="max-w-7xl mx-auto w-full grid bg-white rounded-xl p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <div className="inline-flex items-center bg-white rounded-sm border border-primary-dark/20 px-3 py-1 text-xs font-semibold transition-colors">
                How it works
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl font-serif lg:text-5xl tracking-tighter max-w-xl text-left font-regular ">
                From Idea to Launch
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                A clear, structured approach to building scalable digital
                products
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 lg:grid-cols-1 items-start gap-6 relative">
            {steps.map((step) => (
              <div
                key={step.title}
                className="step flex flex-row gap-6 items-start relative"
              >
                <div className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full bg-orange text-white font-medium z-10">
                  <span className="text-sm font-medium text-white">
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-sans font-bold text-md">{step.title}</p>
                  <p className="text-md">{step.description}</p>
                  {step.note && <p className="text-xs">{step.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange/10 rounded-md aspect-square items-center justify-center flex px-4 sm:px-8">
          <img
            alt="Microlaunch Home"
            loading="lazy"
            width={800}
            height={800}
            decoding="async"
            className="object-contain w-full h-full rounded-md"
            src="https://wild-dust-0517.microlaunch.workers.dev/premium/microlaunch-home-dark.png"
          />
        </div>
      </div>
    </section>
  );
}
