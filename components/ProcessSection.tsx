"use client";

import {
  Search,
  Paintbrush,
  Code2,
  ClipboardCheck,
  Rocket,
  Layers,
  Server,
  Database,
  ChevronDown,
} from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  bullets?: { icon: React.ElementType; label: string }[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "Deep dive into your goals, users, and competitive landscape to define clear, achievable objectives. We translate business needs into technical requirements.",
    icon: Search,
  },
  {
    id: 2,
    title: "Design System",
    description:
      "Crafting a cohesive visual language — components, typography, and interaction patterns that scale. We ensure brand consistency across all digital touchpoints.",
    icon: Paintbrush,
  },
  {
    id: 3,
    title: "Development Phase",
    description:
      "Building the core systems and interfaces with clean, scalable, production-ready code. Our engineering focus is on performance and maintainability.",
    icon: Code2,
    bullets: [
      { icon: Layers, label: "Frontend Architecture" },
      { icon: Server, label: "Backend & API" },
      { icon: Database, label: "Database Design" },
    ],
  },
  {
    id: 4,
    title: "Testing & QA",
    description:
      "Rigorous cross-browser, performance, and accessibility testing before go-live. We leave no stone unturned to ensure a bug-free experience.",
    icon: ClipboardCheck,
  },
  {
    id: 5,
    title: "Public Launch",
    description:
      "Deployment, monitoring setup, and post-launch iteration based on real user data. Your success is our long-term commitment.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lineFillPx, setLineFillPx] = useState(0);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !asideRef.current) return;

      const lastStep = stepRefs.current[steps.length - 1];
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        endTrigger: lastStep ?? sectionRef.current,
        end: "top 48%",
        pin: asideRef.current,
        pinSpacing: false,
      });

      steps.forEach((_, i) => {
        const el = stepRefs.current[i];
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 48%",
          end: "bottom 48%",
          onEnter: () => activate(i),
          onEnterBack: () => activate(i),
        });
      });

      function activate(i: number) {
        setActiveIndex(i);
        const firstDot = dotRefs.current[0];
        const activeDot = dotRefs.current[i];
        if (firstDot && activeDot) {
          const firstY = firstDot.getBoundingClientRect().top;
          const activeY = activeDot.getBoundingClientRect().top;
          setLineFillPx(activeY - firstY);
        }

        // Animate accordion content height
        const contentRef = contentRefs.current[i];
        if (contentRef) {
          gsap.fromTo(
            contentRef,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        }
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative"
    >
      <div className="flex flex-col md:flex-row gap-12">

        <div
          ref={asideRef}
          className="hidden md:flex flex-col items-center self-start"
          style={{ paddingTop: "6rem" /* aligns with section py-24 */ }}
        >
          <div
            className="relative flex flex-col items-center"
            style={{ gap: "6rem" }}
          >
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-dark-navy/10"
              aria-hidden
            />

            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full"
              style={{
                height: `${lineFillPx}px`,
                background: "#E8641A",
                boxShadow: "0 0 8px rgba(232,100,26,0.55)",
                transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
              aria-hidden
            />

            {steps.map((_, i) => {
              const isActive = i === activeIndex;
              const isCompleted = i < activeIndex;
              return (
                <div
                  key={i}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="relative z-10"
                  style={{
                    transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                    transform: isActive ? "scale(1.6)" : "scale(1)",
                  }}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ring-4 ring-cream transition-all duration-300 ${
                      isActive
                        ? "bg-orange shadow-[0_0_10px_rgba(232,100,26,0.8)]"
                        : isCompleted
                          ? "bg-orange/60"
                          : "bg-dark-navy/20"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Main content — scrolls freely ── */}
        <div className="flex-1 py-24">
          {/* Header */}
          <header className="mb-20 text-left">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-orange mb-4">
              Workflow
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-dark-navy mb-8">
              The <span className="text-orange">Process</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-navy/60 max-w-2xl leading-relaxed">
              A proven, repeatable workflow from initial discovery to a polished
              product — designed to keep you informed and in control at every
              stage.
            </p>
          </header>

          {/* Step cards */}
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeIndex;
              const isCompleted = i < activeIndex;
              const stepNum = String(step.id).padStart(2, "0");

              return (
                <div
                  key={step.id}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  style={{
                    transition: "opacity 0.4s ease",
                    opacity: isCompleted ? 0.45 : 1,
                  }}
                >
                  <div
                    className={`rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white border-2 border-orange shadow-[0_10px_30px_rgba(232,100,26,0.1)]"
                        : "bg-white border border-dark-navy/5 shadow-sm"
                    }`}
                  >
                    {/* Header - unified flex container with chevron */}
                    <div className="flex items-center p-6 cursor-default select-none pointer-events-none">
                      <div className="flex items-center flex-1">
                        <div
                          className={`z-10 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-orange text-white shadow-[0_0_20px_rgba(232,100,26,0.4)]"
                              : isCompleted
                                ? "bg-dark-navy text-white"
                                : "bg-[#FBF9F7] border border-dark-navy/10 text-dark-navy"
                          }`}
                        >
                          {stepNum}
                        </div>

                        <div className="ml-6 flex items-center space-x-4">
                          <Icon
                            size={24}
                            strokeWidth={2}
                            className={`transition-colors duration-300 ${
                              isActive
                                ? "text-orange"
                                : isCompleted
                                  ? "text-dark-navy"
                                  : "text-dark-navy/40"
                            }`}
                          />
                          <div className="flex items-center space-x-3">
                            <h3
                              className={`text-xl font-bold transition-colors duration-300 ${
                                isActive ? "text-orange" : "text-dark-navy"
                              }`}
                            >
                              {step.title}
                            </h3>
                            {isActive && (
                              <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-orange/10 text-orange border border-orange/20 rounded">
                                Active
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Chevron - now in same flex row as title */}
                      <ChevronDown
                        size={20}
                        strokeWidth={2}
                        className={`shrink-0 ml-4 transition-all duration-300 ${
                          isActive
                            ? "text-orange rotate-180"
                            : "text-dark-navy/40 rotate-0"
                        }`}
                      />
                    </div>

                    {/* Accordion content - only rendered when active */}
                    {isActive && (
                      <div
                        ref={(el) => { contentRefs.current[i] = el; }}
                        className="overflow-hidden"
                      >
                        {step.bullets ? (
                          <div className="px-6 pb-8 ml-16 grid md:grid-cols-2 gap-8">
                            <div>
                              <p className="text-dark-navy/60 leading-relaxed mb-6">
                                {step.description}
                              </p>
                              <div className="flex items-center space-x-2 text-xs font-bold text-orange uppercase tracking-widest">
                                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                                <span>Current Focus</span>
                              </div>
                            </div>
                            <div className="bg-[#FBF9F7] rounded-xl p-6 border border-dark-navy/5">
                              <ul className="space-y-4">
                                {step.bullets.map((b) => {
                                  const BIcon = b.icon;
                                  return (
                                    <li
                                      key={b.label}
                                      className="flex items-center text-sm font-semibold text-dark-navy"
                                    >
                                      <BIcon
                                        size={18}
                                        className="text-orange mr-3 shrink-0"
                                        strokeWidth={2}
                                      />
                                      {b.label}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className="px-6 pb-8 ml-16">
                            <p className="text-dark-navy/60 leading-relaxed max-w-2xl">
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
