"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Feature from "./ui/feature";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Full-Stack Product Engineering",
    description:
      "Architecting and building end-to-end software solutions. From concept to production-ready deployment.",
    tagline: "Build the full product",
    subtitle: "Build the full product",
  },
  {
    title: "Scalable System Architecture",
    description:
      "Designing backend APIs and infrastructure that are robust, efficient, and growth-oriented.",
    tagline: "Design for scale",
    subtitle: "Design for scale",
  },
  {
    title: "Maintainable Modern Codebase",
    description:
      "Writing clean, maintainable code using contemporary frameworks, tooling, and best practices.",
    tagline: "Deliver on best practices",
    subtitle: "Clean code • CI/CD • Cloud",
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresGridRef = useRef<HTMLDivElement>(null);
  // const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!featuresGridRef.current || !sectionRef.current) return;

      const featureItems =
        featuresGridRef.current.querySelectorAll("[data-feature]");

      // Create a timeline for staggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      });

      // Animate each feature card from below viewport
      featureItems.forEach((item, index) => {
        tl.fromTo(
          item,
          {
            yPercent: 200,
            //   opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4", // stagger start time
        );
      });
      // tl.fromTo(
      //   ctaRef.current,
      //   {
      //     xPercent: 100,
      //     opacity: 0,
      //   },
      //   {
      //     xPercent: 0,
      //     opacity: 1,
      //     duration: 1,
      //     ease: "power2.out",
      //   },
      //   "-=0.2",
      // );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-6 md:px-20 min-h-screen py-20 flex flex-col overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className=" mb-12">
          <p className="text-orange font-medium mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary-dark">
            I help companies build{" "}
            <span className="text-orange font-semibold">
              reliable & scalable
            </span>{" "}
            software systems.
          </h2>
        </div>
        <div
          ref={featuresGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div key={index} data-feature>
              <Feature
                title={feature.title}
                description={feature.description}
                tagline={feature.tagline}
                subtitle={feature.subtitle}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="py-10 max-w-7xl mx-auto w-full" ref={ctaRef}>
        <div className="bg-white shadow-sm rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-primary-dark font-serif mb-6 tracking-tight">
              Ready to bring your project{" "}
              <span className="text-orange">to life?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-dark font-semibold mb-10 leading-relaxed">
              Let's discuss your requirements and build something great
              together. Book a free consultation today.
            </p>
            <Link
              className="inline-flex items-center px-8 py-4 bg-orange text-white font-bold rounded-xl shadow-[0_10px_25px_rgba(232,100,26,0.3)] hover:bg-brand-accent/90 transition-all duration-300 transform hover:-translate-y-1 group"
              href="#"
            >
              <CalendarDays className="mr-2" />
              Book a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div> */}

    </section>
  );
}
