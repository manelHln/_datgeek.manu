import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-cream text-center px-5 pt-15 pb-12">
      {/* Duck Icon */}
      <div className="mx-auto mb-3 w-16 h-16">
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="42" cy="48" rx="22" ry="15" fill="#e8641a" opacity="0.9" />
          <circle cx="35" cy="36" r="14" fill="#e8641a" />
          <ellipse cx="22" cy="38" rx="8" ry="5" fill="#f5a623" />
          <circle cx="30" cy="33" r="2" fill="#1a1a2e" />
          <ellipse
            cx="48"
            cy="60"
            rx="12"
            ry="4"
            fill="#f5a623"
            transform="rotate(-10 48 60)"
          />
        </svg>
      </div>

      <div className="text-[11px] font-semibold tracking-[2px] text-[#888] uppercase mb-2">
        All Kin. No Platform.
      </div>

      <h1 className="font-serif text-[clamp(32px,5vw,54px)] leading-[1.15] text-text-dark max-w-[620px] mx-auto mt-4">
        Email Agent Marko to Negotiate Any Contract.{" "}
        <span className="text-orange">No New Platform Required.</span>
      </h1>

      <p className="text-[#555] text-[15px] max-w-[420px] mx-auto mt-3.5 leading-relaxed">
        Agent Marko is trained by 70+ top-tier lawyers on 70+ contracts to apply
        hundreds of custom moves in any client&apos;s negotiations.
      </p>

      <Link
        href="#"
        className="mt-5 inline-block rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white hover:bg-orange/90 transition-colors"
      >
        Book a demo →
      </Link>
    </section>
  );
}
