import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiRedis,
  SiGraphql,
  SiLaravel,
} from "@icons-pack/react-simple-icons";

const icons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiDjango, label: "Django" },
  { Icon: SiRedis, label: "Redis" },
  { Icon: SiGraphql, label: "GraphQL" },
  { Icon: SiLaravel, label: "Laravel" },
];

export default function LogosSection() {
  return (
    <section className="bg-cream py-6 overflow-hidden">
      <p className="text-[16px] font-sans font-medium text-text-dark text-center mb-5">
        Built with modern tools and frameworks
      </p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-12 animate-marquee shrink-0">
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
        <div
          className="ml-12 flex gap-12 animate-marquee shrink-0"
          aria-hidden="true"
        >
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-hidden mt-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-12 animate-marquee-reverse shrink-0">
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
        <div
          className="ml-12 flex gap-12 animate-marquee-reverse shrink-0"
          aria-hidden="true"
        >
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-hidden mt-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-12 animate-marquee shrink-0">
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
        <div className="ml-12 flex gap-12 animate-marquee shrink-0" aria-hidden="true">
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-text-dark/40 hover:text-text-dark/70 transition-colors duration-300 shrink-0"
            >
              <Icon size={28} />
              <span className="text-[15px] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
