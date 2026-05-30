"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "Nexus Analytics",
    text: "Emmanuel joined us during a critical growth phase and completely transformed our data pipeline. What impressed me most was his ownership mindset—he treated our product like his own. Communication was crystal clear throughout, and he delivered a scalable solution that's still running 18 months later with zero downtime.",
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "CTO",
    company: "PayStack Pro",
    text: "I've worked with many engineers, but Emmanuel stands out for his ability to bridge business requirements with technical excellence. He built our payment gateway from scratch and it's now processing millions in daily transactions. Clean architecture, thorough testing, and he actually listens to what the business needs.",
    avatar: "MR",
  },
  {
    name: "Jennifer Okonkwo",
    role: "Head of Product",
    company: "ScaleFlow",
    text: "The reliability factor. That's what you get with Emmanuel. Deadlines are never missed, updates are always prompt, and the code quality is production-ready from day one. He scaled our platform from 10K to 500K users without a single hiccup. The kind of partner every startup needs.",
    avatar: "JO",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !titleRef.current) return;

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Card stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll("[data-testimonial-card]");
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-cream py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-14 md:mb-20">
          <span className="text-orange font-medium text-sm tracking-widest uppercase mb-4 inline-block">
            What People Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-dark leading-tight">
            Trusted by{" "}
            <span className="text-orange">Founders & Teams</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial-card
              className="group relative bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-lg shadow-primary-dark/5 hover:shadow-xl hover:shadow-primary-dark/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-orange/10 group-hover:text-orange/20 transition-colors duration-300">
                <Quote className="w-12 h-12 md:w-16 md:h-16" />
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange to-orange/80 flex items-center justify-center text-white font-serif text-lg md:text-xl font-semibold mb-6 shadow-lg shadow-orange/20">
                  {testimonial.avatar}
                </div>

                {/* Testimonial Text */}
                <p className="text-primary-dark/80 text-base md:text-lg leading-relaxed mb-8 min-h-[140px] md:min-h-[160px]">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div>
                  <p className="text-primary-dark font-semibold text-lg mb-1 group-hover:text-orange transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-dark/60 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-dark/10">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-cream bg-gradient-to-br from-orange to-orange/80 flex items-center justify-center text-white text-xs font-semibold"
                >
                  {["SC", "MR", "JO"][i]}
                </div>
              ))}
            </div>
            <span className="text-primary-dark/70 text-sm font-medium">
              Delivered for 50+ satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
